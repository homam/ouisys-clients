import { IKeywordShortcode } from "../assrock-mo/main";
declare type Config = {
    host?: string;
    country?: string;
    handle?: string;
    offer: number;
};
export declare type IConfig = {
    tag: "bupper";
} & Config | {
    tag: "keywordAndShortCode";
} & IKeywordShortcode;
export { IKeywordShortcode };
export default function load(window: Window, maybeConfig: IConfig): Promise<IKeywordShortcode>;
