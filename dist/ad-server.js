/**
 *
 *  When we decide to ad a new ad service we will have to change the type of adServicer
 *  Currently it is just reliant on the PianoAdapter, but it could be any adapter that responds to
 *  .init() and takes the lifecycle methods along with matchers/tags.
 *
 */
class AdServer {
    afterAdRender;
    beforeAdInit;
    thirdPartyCallbacks;
    matchers;
    tags;
    user;
    adServicer;
    constructor({ afterAdRender = [], beforeAdInit = [], matchers = [], thirdPartyCallbacks = [], tags = [], adServicer, }) {
        this.afterAdRender = afterAdRender;
        this.beforeAdInit = beforeAdInit;
        this.matchers = matchers;
        this.tags = tags;
        this.thirdPartyCallbacks = thirdPartyCallbacks;
        this.adServicer = adServicer;
    }
    /**
     * @remarks
     * These methods are private and should be only called through #dispatchAd
     */
    executeBeforeAdInit() {
        this.beforeAdInit.forEach((cb) => cb());
    }
    executeAfterAdRender() {
        this.afterAdRender.forEach((cb) => cb());
    }
    setServicerConfig() {
        const isEmpty = ((arr) => arr.length == 0);
        if (!isEmpty(this.matchers))
            this.adServicer.setMatchers(this.matchers);
        if (!isEmpty(this.tags))
            this.adServicer.setTags(this.tags);
        if (!isEmpty(this.thirdPartyCallbacks))
            this.adServicer.setThirdPartyCallbacks(this.thirdPartyCallbacks);
    }
    /**
     * Execute advertisement and lifecycle methods.
     */
    dispatchAd() {
        this.executeBeforeAdInit();
        this.setServicerConfig();
        this.adServicer.init();
        this.executeAfterAdRender();
    }
}
export default AdServer;
//# sourceMappingURL=ad-server.js.map