import PianoAdapter from "./piano-adapter.js";
declare global {
    interface Window {
        tp: [];
        mixpanel: {
            track: (action: string, payload: {
                incode: string;
                location: string;
                type: string;
                status: string;
            }) => void;
        };
    }
}
/**
 *
 *  When we decide to ad a new ad service we will have to change the type of adServicer
 *  Currently it is just reliant on the PianoAdapter, but it could be any adapter that responds to
 *  .init() and takes the lifecycle methods along with matchers/tags.
 *
 */
export default class AdServer {
    afterAdRender?: (() => void)[];
    afterAdInit?: (() => void)[];
    beforeAdInit?: (() => void)[];
    thirdPartyCallbacks?: (() => void)[];
    matchers?: string[];
    tags?: string[];
    user: {};
    adServicer?: PianoAdapter;
    constructor({ afterAdRender, afterAdInit, beforeAdInit, matchers, thirdPartyCallbacks, tags, adServicer, }: {
        afterAdRender?: any[];
        afterAdInit?: any[];
        beforeAdInit?: any[];
        matchers?: any[];
        thirdPartyCallbacks?: any[];
        tags?: any[];
        adServicer: any;
    });
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
    setAdapter(adServicer: any): PianoAdapter;
    /**
     * @remarks
     * These methods are private and should be only called through #dispatchAd
     * todo: need to think about this more, these methods could potentially fire twice because
     * todo: cont. of the way piano needs lifecycle methods to be implemented in a their own way
     * todo: link to piano adapter before, around, after render callbacks.
     */
    executeBeforeAdInit(): void;
    executeAfterAdRender(): void;
    executeAfterAdInit(): void;
    /**
     * Gathers needed properties and creates a configuration obj
     *
     * @remarks
     * The user data could come from context or it could come from
     * todo: Move the AID into the piano adapter as the AdServer does not need the composer specific ID
     * @returns User
     */
    setUser(): {};
    getAid(): string;
    /**
     * Execute advertisement and lifecycle methods.
     */
    dispatchAd(): void;
}
