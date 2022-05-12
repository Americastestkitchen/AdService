import type { User, PianoConfig } from "./types";
export default class PianoAdapter {
    afterRenderCallbacks?: (() => void)[];
    thirdPartyCallbacks?: (() => void)[];
    tp: any;
    user: User;
    result: any;
    constructor({ thirdPartyCallbacks, afterRenderCallbacks, matchers, tags, user }: {
        thirdPartyCallbacks?: any[];
        afterRenderCallbacks?: any[];
        matchers?: any[];
        tags?: any[];
        user: any;
    });
    init(): void;
    setThirdPartyCallbacks(cbs: any): void;
    setMixpanel({ status, action }: {
        status: any;
        action: any;
    }): void;
    setBeforeAdInit(cbs: (() => void)[]): void;
    setAfterAdRender(cbs: (() => void)[]): void;
    setCustomVariables(matchers: string[]): void;
    getConfigProperties(): PianoConfig;
    setEnvConfig(): void;
    setTags(tags: string[]): void;
}
