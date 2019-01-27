export declare type IConfig = {
    host?: string;
    country?: string;
    handle?: string;
    offer: number;
};
export declare type IResult = {
    finalUrl?: string;
    isValid: boolean;
    errorText?: string;
    errorType?: string;
    submissionId?: string;
};
export default function submitMSISDN(window: Window, maybeConfig: IConfig, msisdn: string): Promise<(pin: string) => Promise<string>>;
