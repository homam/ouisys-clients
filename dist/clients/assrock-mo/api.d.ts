import IVisitor from "../../common-types/IVisitor";
export interface IConfig {
    host?: string;
    handle?: string;
    country?: string;
    offer: number;
}
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
export default function submitMSISDN(window: Window, visitor: IVisitor, maybeConfig: IConfig, msisdn: string): Promise<IKeywordShortcode>;