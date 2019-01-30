import queryString from "./queryString";
export { queryString };
export declare function recordImpression(window: Window, url: string, country: string, page: string): {
    visitor: {
        country: string;
        rockmanId: string;
        impressionNumber: number;
        page: string;
        xaid: string;
        cid: number;
        offer: number;
    };
    startTime: number;
    url: string;
    queryString: (key: string) => string;
};
export declare function recordEvent(window: Window, url: string, view: string, args: {
    category: string;
    action?: string;
    label?: string;
    value?: number;
    args?: any;
}): void;
export declare type ITracker = {
    viewChanged: (view: string) => void;
    msisdnSubmitted: (msisdn: string) => void;
    advancedInFlow: (flow: string, action: string, args?: any) => void;
    advancedInPreFlow: (label: string, args?: any) => void;
    recedeInFlow: (flow: string, newState: string, args?: any) => void;
};
declare const _default: (window: Window, country: string, page: string) => ITracker;
export default _default;
