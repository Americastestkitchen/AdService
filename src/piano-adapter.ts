import type { User, PianoConfig } from "./types"

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
        this.user = user;
        this.setEnvConfig();
        this.setThirdPartyCallbacks(thirdPartyCallbacks);
        this.setCustomVariables(matchers);
        this.setAfterAdRender(afterRenderCallbacks);
        if(!Array.isArray(tags[0])){
          tags = [tags]
        }
        this.setTags(tags);
      }

     init(){
        this.tp.push(["init", () => {
            this.tp.experience.init();
        }, ]);
      }

      setThirdPartyCallbacks(cbs){
        cbs.forEach((cb) => {
          switch (cb.service) {
            case 'mixpanel':{
              this.setMixpanel(cb);
              break;
            }
            case 'atk': {
              //do other stuff.
              break;
            }
            default:
              this.setMixpanel(cb);
              break;
          }
        })
      }

      setMixpanel({status, action}){
        async function trackMixpanel({action, status, params, customParams: {incode,clickdomain} }){
          let {url} = await JSON.parse(params)
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

      setBeforeAdInit(cbs:(()=>void)[]) {
        cbs.forEach((callback) => {
          if (typeof callback === "function") {
            this.tp.push(["addHandler", "beforeBrowserEvent", callback]);
          }
        });
      }

      setAfterAdRender(cbs:(()=>void)[]) {
        cbs.forEach((callback) => {
          this.tp.push( [ "addHandler", "showTemplate", function (templateParams){
            callback();
          }]);
        });

      }

      setCustomVariables(matchers:string[]) {
        matchers.forEach((cv) => {
          const [key, value] = cv;
          this.tp.push(["setCustomVariable", key, value]);
        });
      }

      getConfigProperties(): PianoConfig {
        return {
          setAid: this.user.aid,
          setDebug: false,
          setEndpoint: "https://buy.tinypass.com/api/v3",
          setExternalJWT: this.user.token,
          setUsePianoIdUserProvider: true,
          setUseTinypassAccounts: false,
        };
      }

      setEnvConfig() {
        const config = this.getConfigProperties();
        Object.entries(config).forEach((d) => this.tp.push(d));
      }

      setTags(tags:string[][]) {
        tags.forEach((tag) => {
          if (!Array.isArray(tag)) {
            this.tp.push(["setTags", tag]);
          }
        });
      }
}
