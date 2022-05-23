import type { User, PianoConfig } from "./types"
/**
 * Conditionally import SDK to support original
 * CV implementation that's running paywalls
 */

import "./piano"
export default class PianoAdapter {
    afterRenderCallbacks?:(()=> void)[];
    thirdPartyCallbacks?:(()=> void)[];
    tp:any;
    user:User;
    result: any;

    constructor({
      thirdPartyCallbacks = [],
      afterRenderCallbacks = [],
      matchers = [],
      tags = [],
      user
    }) {
        this.tp = window.tp || []
        this.user = this.setUser(user);
        this.setEnvConfig();
        this.setThirdPartyCallbacks(thirdPartyCallbacks);
        this.setCustomVariables(matchers);
        this.setAfterAdRender(afterRenderCallbacks);
        if(!Array.isArray(tags[0])){
          tags = [tags]
        }
        this.setTags(tags);
      }

      /**
       * Returns the AID based on the current url
       */
      #getAid(){
        /**
         * static aid when localhost pointing at
         * ATK Sandbox piano application for example
         */
        const [subdomain, domain] = window.location.hostname.split('.')
        if (subdomain === 'localhost') return "P3MUmmU9pu";
        if (subdomain === 'www'){
          return {
            "americastestkitchen": "o8it4JKTpu",
            "cooksillustrated": "0l4CXRBBpu",
            "cookscountry": "vRqttsu1pu",
          }[domain]
        } else {
          return {
            "americastestkitchen": "P3MUmmU9pu",
            "cooksillustrated": "CLRfAMqqpu",
            "cookscountry": "rkIgdPatpu",
          }[domain]
        }
      }

      /**
       * Retrieves the user token from cookies or from a user context.
       */
      #getUserToken():string{
          var c = document.cookie.match("(^|;)\\s*user_token\\s*=\\s*([^;]+)");
          if (c && c.length > 0) return c.pop();
          else return null;
      }

      /**
       * Sets required user fields to execute a piano experience.
       *
       * @remarks
       * Piano only needs the custom variable to match, but the user-token has something to do on their side.
       * I am not sure what it does, but to be backwards compatible we will add it in there.
       *
       * We are passing in a user argument just in-case we need additional properties from our
       * context or cookie in a future iteration.
       *
       * @param user
       */
      setUser(user){
        return {
          aid: this.#getAid(),
          token: this.#getUserToken(),
        }
      }

     init(){
       /**
       * Initializes the piano experience
       * this is where we could eventually expand our callbacks using the tp api.
       * https://docs.piano.io/callbacks/
       *
       * @typedef {string} Command - Initialization command for piano experience.
       * @typedef {()=>void} Callback - In this callback you can access a lot of user information before initializing the experience.
       * @typedef {[Command, Callback]} InitParams
       * @param {InitParams}
       */
        this.tp.push(["init", () => {
            this.tp.experience.init();
        }, ]);
      }

      /**
       * Configuration objects carry the necessary data to the third party callback
       * Each configuration object is going to be different based on the 'service'.
       * Required properties are service, and callbacks.
       *
       * @typedef Service {string}
       * @typedef Callbacks {[()=>void]}
       * @typedef {Service, Callbacks} ConfigObj
       * @param thirdPartyConfigs ConfigObj[]
       */
      setThirdPartyCallbacks(thirdPartyConfigs){
        thirdPartyConfigs.forEach((config) => {
          switch (config.service) {
            case 'mixpanel':{
              this.setMixpanel(config);
              break;
            }
            case 'atk': {
              //do other stuff.
              break;
            }
            default:
              this.setMixpanel(config);
              break;
          }
        })
      }

      /**
       * Configures mixpanel's global api for tracking events with piano template content fields
       *
       * @remarks
       * We are borrowing a pattern from redux, instead of action and payload we have mixpanel properties of status and actions
       * Actions are the event callbacks taking piano content fields and parsing the information we require for each specific event.
       *
       * We are using external events launch these callback. A hacky solution currently but we are injecting a third party iframe into our
       * application. There is a limited scope of interaction we can have with the template. But what we don't want is to couple our code
       * where the template is getting rendered. So hacky > heavily coupled currently.
       *
       * https://docs.piano.io/offer-template-essentials/#externalevent
       *
       * Every action that we want to track with mixpanel we add an additional case and add an external event on the template
       * We have to trigger it with javascript on the template if it is not a user triggered event (until we find a better way).
       *
       * @param ConfigObj
       *
       */
      setMixpanel({status, action}){
        /**
         * todo: add all of the available fields we get from the piano params obj and the params.params obj
         * This function maps the params data received from the event we get from piano
         * including custom parameters we have to set up in the external-event data-attributes
         * We can not target traditional data-attributes :frown:
         *
         *
         *@example
         * <span
         * id="mixpanel-params"
         * external-event="presented"
         * external-event-params="{{params}}"
         * external-event-adtype="[%% ad-type %%]"
         * external-event-incode="[%% incode %%]"
         * external-event-deviceType="[%% deviceType %%]"
         * external-event-clickdomain="[%% click-domain %%]"
         * external-event-mdc="[%% mdc %%]"
         * ></span>
         *
         *
         * In the custom script we have to manually trigger an event that is not cause by
         * user interaction. For this example we want to be able to fire a presented event to mixpanel
         * but because it isn't user triggered we will click on the span that will fire the external-event.
         *
         * <div custom-script>
         *   document.getElementById("mixpanel-params").click();
         * </div>
         */
        async function trackMixpanel({action, status, params, customParams: {incode,clickdomain} }){
          let {url} = await JSON.parse(params)
          // TODO: change 172 to support subdomains
          const [, location = "homepage"] = url.split(":5500/")
          window.mixpanel.track(action, {incode, status, location, type: clickdomain})
        }

        switch (status) {
          case 'Accepted':{
            this.tp.push(["addHandler", "customEvent", function(event){
              if(event?.eventName !== 'sign-up-button')return;
              trackMixpanel({action, status, params: event.params.params, customParams:event.params});
           } ]);
           break;
          }
          case 'Presented':{
            this.tp.push(["addHandler", "customEvent", async function(event){
              if(event?.eventName !== 'presented')return;
              trackMixpanel({action, status, params: event.params.params, customParams:event.params});
           } ]);
          break;
          }
          default:
            break;
        }
      }

      /**
       * We attach callbacks that fire before the browser renders the template
       *
       * @remarks
       *  This is not built to support third-party callbacks. Those need to be handled individually by their handlers.
       *
       * @param cbs
       */
      setBeforeAdInit(cbs:(()=>void)[]) {
        cbs.forEach((callback) => {
          if (typeof callback === "function") {
            this.tp.push(["addHandler", "beforeBrowserEvent", callback]);
          }
        });
      }

      /**
       * We attach callbacks that fire after the browser renders the template
       *
       * @remarks
       *  This is not built to support third-party callbacks. Those need to be handled individually by their handlers.
       *
       * @param cbs
       */
      setAfterAdRender(cbs:(()=>void)[]) {
        cbs.forEach((callback) => {
          this.tp.push( [ "addHandler", "showTemplate", function (templateParams){
            callback();
          }]);
        });

      }

      /**
       * Set the user segments that will match on the piano segment
       * in the initial user segments phase of the composer experience
       *
       * i.e. experience rules, initial user segments, events and triggers, actions
       * https://docs.piano.io/track/overview-composer?chapter=5556#menu5556
       *
       * @param matchers
       */
      setCustomVariables(matchers:string[]) {
        matchers.forEach((cv) => {
          const [key, value] = cv;
          this.tp.push(["setCustomVariable", key, value]);
        });
      }

      /**
       * Each experience in composer requires proper configuration.
       * This object will set up our configuration object properly to launch the expected experience.
       *
       * @returns PianoConfig
       */

      // debug if non prod
      getConfigProperties(): PianoConfig {
        return {
          setAid: this.user.aid,
          setDebug: true,
          setEndpoint: "https://buy.tinypass.com/api/v3",
          setExternalJWT: this.user.token,
          setUsePianoIdUserProvider: true,
          setUseTinypassAccounts: false,
        };
      }

      /**
       * Sets up the window.tp piano object in the specific way it requires.
       *
       * @remarks
       * window.tp expects to push tuples with the proper 'key' (at position tuple[0]).
       * todo: expand explanation
       */
      setEnvConfig() {
        const config = this.getConfigProperties();
        Object.entries(config).forEach((d) => this.tp.push(d));
      }

      /**
       * This configures the window tp object to accept custom tags.
       *
       * @remarks
       * Tags are a way for us to match experiences with great specificity. (Experience Rules Phase)
       * Tags are used in the experience, and can be rendered on the template.
       * Tags can be returned to be used in third-party integrations
       * https://docs.piano.io/content-tracking/#custags
       *
       * @param tags
       */
      setTags(tags:string[][]) {
        tags.forEach((tag) => {
          if (!Array.isArray(tag)) {
            this.tp.push(["setTags", tag]);
          }
        });
      }
}
