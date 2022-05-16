import PianoAdapter from "./piano-adapter.js";
/**
 *
 *  When we decide to ad a new ad service we will have to change the type of adServicer
 *  Currently it is just reliant on the PianoAdapter, but it could be any adapter that responds to
 *  .init() and takes the lifecycle methods along with matchers/tags.
 *
 */
export default class AdServer {
    constructor({ afterAdRender = [], afterAdInit = [], beforeAdInit = [], matchers = [], thirdPartyCallbacks = [], tags = [], adServicer, }) {
        this.afterAdInit = afterAdInit;
        this.afterAdRender = afterAdRender;
        this.beforeAdInit = beforeAdInit;
        this.matchers = matchers;
        this.tags = tags;
        this.thirdPartyCallbacks = thirdPartyCallbacks;
        this.user = this.setUser();
        this.adServicer = this.setAdapter(adServicer);
    }
    /**
     * Sets up the adapter for our Ad Service
     * Adapters api:
     * To render an template it REQUIRES an init() method
     * To interact with third-party services the adapter constructor REQUIRES an interface to receive an array of callbacks.
     * To match on custom variables it MAY have tags, matchers, or user-state
     * Lifecycle methods can be fired from the AdServer class or passed through to the Adapter.
     *
     * @remarks
     * Piano lifecycle methods lives inside the window.tp object so we have to pass through callbacks.
     * @param adServicer
     * @returns Adapter Class
     */
    setAdapter(adServicer) {
        const pianoConfig = {
            afterRenderCallbacks: this.afterAdRender,
            matchers: this.matchers,
            tags: this.tags,
            thirdPartyCallbacks: this.thirdPartyCallbacks,
            user: this.user
        };
        switch (adServicer) {
            case "piano": {
                return new PianoAdapter(pianoConfig);
            }
            case "atk": {
                //configure in house AdService
            }
            default: {
                return new PianoAdapter(pianoConfig);
            }
        }
    }
    /**
     * @remarks
     * These methods are private and should be only called through #dispatchAd
     * todo: need to think about this more, these methods could potentially fire twice because
     * todo: cont. of the way piano needs lifecycle methods to be implemented in a their own way
     * todo: link to piano adapter before, around, after render callbacks.
     */
    executeBeforeAdInit() {
        this.beforeAdInit.forEach((cb) => cb());
    }
    executeAfterAdRender() {
        this.afterAdRender.forEach((cb) => cb());
    }
    executeAfterAdInit() {
        this.afterAdInit.forEach((cb) => cb());
    }
    /**
     * Gathers needed properties and creates a configuration obj
     *
     * @remarks
     * The user data could come from context or it could come from
     * todo: Move the AID into the piano adapter as the AdServer does not need the composer specific ID
     * @returns User
     */
    setUser() {
        return {};
    }
    //todo: move into piano adapter
    getAid() {
        //This will be set on the Dry.rb or User Context
        return "P3MUmmU9pu";
    }
    /**
     * Execute advertisement and lifecycle methods.
     */
    dispatchAd() {
        this.executeBeforeAdInit();
        this.adServicer.init();
        this.executeAfterAdInit();
    }
}
//# sourceMappingURL=ad-server.js.map