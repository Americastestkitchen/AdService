declare global {
    interface Window {
        tp: [];
        mixpanel: {
            track: (action: string, payload: {
                incode: string;
                location: string;
                type: string;
                status: string;
            }, transport: {
                transport: string;
            }) => void;
        };
    }
}
export interface User {
    aid: string;
    token: string;
}
export interface PianoConfig {
    setAid: string;
    setDebug: boolean;
    setEndpoint: string;
    setExternalJWT: string;
    setUsePianoIdUserProvider: boolean;
    setUseTinypassAccounts: boolean;
}
