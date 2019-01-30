import * as React from "react";

export type IKeywordShortcode = {
  keyword : string,
  shortcode : string
}

const formatSMSLink = (keywordAndShortcode : IKeywordShortcode) =>
  (typeof navigator != "undefined" && (/iPhone/i.test(navigator.userAgent) || /Mac OS/i.test(navigator.userAgent)))
  ? `sms:${keywordAndShortcode.shortcode}&body=${keywordAndShortcode.keyword}`
  : `sms:${keywordAndShortcode.shortcode}?body=${keywordAndShortcode.keyword}`
  
export const MOLink : React.ComponentType<{keywordAndShortcode: IKeywordShortcode, children: React.ReactNode} & React.HTMLAttributes<HTMLAnchorElement>> = ({keywordAndShortcode, children, ...props}) =>
  <a href={formatSMSLink(keywordAndShortcode)} {...props}>{children}</a>