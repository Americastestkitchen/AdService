import type { User } from "./types";
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
    user: User;
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
    setAdapter(adServicer: any): PianoAdapter;
    executeBeforeAdInit(): void;
    executeAfterAdRender(): void;
    executeAfterAdInit(): void;
    setUser(): User;
    getAid(): string;
    getUserToken(): string;
    dispatchAd(): void;
}
