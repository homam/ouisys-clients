/// <reference types="react" />
import { IKeywordShortcode } from "./main";
import * as HOC from "./HOC";
export { IKeywordShortcode };
export { HOC };
export declare const MOLink: import("react").ComponentType<{
    keywordAndShortcode: IKeywordShortcode;
    children: import("react").ReactNode;
} & import("react").HTMLAttributes<HTMLAnchorElement>>;
