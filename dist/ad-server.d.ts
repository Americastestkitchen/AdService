import PianoAdapter from "./piano-adapter";
/**
 *
 *  When we decide to ad a new ad service we will have to change the type of adServicer
 *  Currently it is just reliant on the PianoAdapter, but it could be any adapter that responds to
 *  .init() and takes the lifecycle methods along with matchers/tags.
 *
 */
declare class AdServer {
    afterAdRender?: (() => void)[];
    beforeAdInit?: (() => void)[];
    thirdPartyCallbacks?: (() => void)[];
    matchers?: string[];
    tags?: string[];
    user: {};
    adServicer?: PianoAdapter;
    constructor({ afterAdRender, beforeAdInit, matchers, thirdPartyCallbacks, tags, adServicer, }: {
        afterAdRender?: any[];
        beforeAdInit?: any[];
        matchers?: any[];
        thirdPartyCallbacks?: any[];
        tags?: any[];
        adServicer: any;
    });
    /**
     * @remarks
     * These methods are private and should be only called through #dispatchAd
     */
    executeBeforeAdInit(): void;
    executeAfterAdRender(): void;
    setServicerConfig(): void;
    /**
     * Execute advertisement and lifecycle methods.
     */
    dispatchAd(): void;
}
export default AdServer;
