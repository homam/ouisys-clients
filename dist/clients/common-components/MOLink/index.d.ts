import * as React from "react";
export declare type IKeywordShortcode = {
    keyword: string;
    shortcode: string;
};
export declare const MOLink: React.ComponentType<{
    keywordAndShortcode: IKeywordShortcode;
    children: React.ReactNode;
} & React.HTMLAttributes<HTMLAnchorElement>>;
