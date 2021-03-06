export default class PianoAdapter {
    afterRenderCallbacks;
    thirdPartyCallbacks;
    tp;
    user;
    result;
    pianoDebug;
    mixpanelDebug;
    constructor({ afterRenderCallbacks = [], matchers = [], mpDebug = true, pDebug = false, sdk, tags = [], thirdPartyCallbacks = [], user }) {
        this.tp = sdk;
        this.user = this.setUser(user);
        //todo: set debug based on env
        this.pianoDebug = pDebug;
        this.mixpanelDebug = mpDebug;
        this.setEnvConfig();
        this.setDisclaimer();
        this.setThirdPartyCallbacks(thirdPartyCallbacks);
        this.setMatchers(matchers);
        this.setAfterAdRender(afterRenderCallbacks);
        this.setTags(tags);
    }
    mixpanelLog() {
        if (this.mixpanelDebug) {
            this.tp.push(['addHandler', "checkoutCustomEvent", function (event) {
                    console.log({ 'mixpanel': window.mixpanel });
                    console.log({ "external-event": event });
                }]);
        }
    }
    /**
     * Returns the AID based on the current url
     */
    getAid() {
        /**
         * static aid when localhost pointing at
         * ATK Sandbox piano application for example
         */
        const [subdomain, domain] = window.location.hostname.split('.');
        if (subdomain === 'localhost')
            return "P3MUmmU9pu";
        if (subdomain === 'www') {
            return {
                "americastestkitchen": "o8it4JKTpu",
                "cooksillustrated": "0l4CXRBBpu",
                "cookscountry": "vRqttsu1pu",
            }[domain];
        }
        else {
            return {
                "americastestkitchen": "P3MUmmU9pu",
                "cooksillustrated": "CLRfAMqqpu",
                "cookscountry": "rkIgdPatpu",
            }[domain];
        }
    }
    /**
     * Retrieves the user token from cookies or from a user context.
     */
    getUserToken() {
        var c = document.cookie.match("(^|;)\\s*user_token\\s*=\\s*([^;]+)");
        if (c && c.length > 0)
            return c.pop();
        else
            return null;
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
    setUser(user) {
        if (user) {
            return {
                aid: user.aid,
                token: user.token,
            };
        }
        else {
            return {
                aid: this.getAid(),
                token: this.getUserToken(),
            };
        }
    }
    init() {
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
            },]);
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
    setThirdPartyCallbacks(thirdPartyConfigs) {
        thirdPartyConfigs.forEach((config) => {
            switch (config.service) {
                case 'mixpanel': {
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
        });
    }
    setMixpanel({ status, action }) {
        const locationMap = {
            article: 'article detail page',
            collection: 'collection detail page',
            how_to: 'how to detail page',
            recipe: 'recipe detail page',
            thanksgiving: 'Thanksgiving guide',
            'recipe landing page': 'recipe landing page',
            'reviews landing page': 'reviews landing page',
            'review detail page': 'review detail page',
            '/': 'homepage'
        };
        function handleMembershipBlock() {
            async function trackMixpanel({ action, status, params, customParams }) {
                const location = locationMap[window.location.pathname];
                window.mixpanel.track(action, { incode: customParams.incode, status, location, type: customParams.clickdomain }, { transport: 'sendBeacon' });
            }
            switch (status) {
                case 'Accepted': {
                    this.tp.push(["addHandler", "customEvent", function (event) {
                            if (event?.eventName !== 'sign-up-button')
                                return;
                            trackMixpanel({ action, status, params: event.params.params, customParams: event.params });
                        }]);
                    break;
                }
                case 'Presented': {
                    this.tp.push(["addHandler", "customEvent", async function (event) {
                            if (event?.eventName !== 'presented')
                                return;
                            trackMixpanel({ action, status, params: event.params.params, customParams: event.params });
                        }]);
                    break;
                }
                default:
                    break;
            }
        }
        function handleEmailCapture() {
            this.tp.push(["addHandler", "customEvent", async function (event) {
                    const { eventName, params } = event;
                    if (eventName !== 'sign-up-button')
                        return;
                    const { params: jsonParams, adtype, clickdomain, devicetype, incode, mdc } = params;
                    const url = window.location;
                    const location = locationMap[window.location.pathname];
                    //track email capture
                    window.mixpanel.track(action, { incode: incode, status: 'Accepted', location, type: status }, { transport: 'sendBeacon' });
                    window.location.href = `${window.location.origin}/order?mdc=${mdc}&incode=${incode}`;
                }]);
        }
        switch (action) {
            case "Membership Block":
                handleMembershipBlock.call(this);
                break;
            case "Email Capture":
                handleEmailCapture.call(this);
                break;
            default:
                break;
        }
    }
    setDisclaimer() {
        this.tp.push(['addHandler', "checkoutCustomEvent", function (event) {
                if (event.eventName === 'how-we-use') {
                    let hideShow;
                    const button = document.getElementById('how-we-use');
                    if (button.style.display === 'none') {
                        hideShow = 'block';
                    }
                    else {
                        hideShow = 'none';
                    }
                    button.style.display = hideShow;
                }
            }]);
    }
    /**
     * We attach callbacks that fire before the browser renders the template
     *
     * @remarks
     *  This is not built to support third-party callbacks. Those need to be handled individually by their handlers.
     *
     * @param cbs
     */
    setBeforeAdInit(cbs) {
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
    setAfterAdRender(cbs) {
        cbs.forEach((callback) => {
            this.tp.push(["addHandler", "showTemplate", function (templateParams) {
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
    setMatchers(matchers) {
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
    getConfigProperties() {
        return {
            setAid: this.user.aid,
            setDebug: this.pianoDebug,
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
        this.mixpanelLog();
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
    setTags(tags) {
        this.tp.push(["setTags", tags]);
    }
}
//# sourceMappingURL=piano-adapter.js.map