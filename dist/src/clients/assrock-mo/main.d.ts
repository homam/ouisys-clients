export declare type IConfig = {
    host?: string;
    country?: string;
    handle?: string;
    offer: number;
};
export declare type IKeywordShortcode = {
    keyword: string;
    shortcode: string;
};
export declare type IResult = {
    isValid: boolean;
    errorText?: string;
    errorType?: string;
    submissionId?: string;
    keyword: IKeywordShortcode;
};
export default function submitMSISDN(window: Window, maybeConfig: IConfig, msisdn: string): Promise<IKeywordShortcode>;
