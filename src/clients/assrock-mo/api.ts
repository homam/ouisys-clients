export interface IConfig {
  host?: string;
  handle?: string;
  country?: string;
  offer: number;
}

export type IKeywordShortcode = {
  keyword: string;
  shortcode: string;
};

export type IResult = {
  isValid: boolean;
  errorText?: string;
  errorType?: string;
  submissionId?: string;
  keyword: IKeywordShortcode;
};

const defaultConfig = (country: string, offer: number): IConfig => {
  switch (country) {
    case "my":
      return {
        offer: offer || 1,
        host: "m.gamezones.biz",
        country: "my",
        handle: "api-handle"
      };
    default:
      throw `'country' environment variable is either missing or has an unsupported value (${country}). This is necessary for defaultConfig(offer).`;
  }
};

export default async function submitMSISDN(
  window: Window,
  maybeConfig: IConfig,
  msisdn: string
): Promise<IKeywordShortcode> {
  const visitor = window.pac_analytics.visitor;
  const config = !maybeConfig ? { offer: visitor.offer } : maybeConfig;
  const { host, country, handle, offer } =
    !config.host || !config.handle
      ? defaultConfig(process.env.REACT_APP_COUNTRY, config.offer)
      : config;
  const search = window.location.search.substr(1) || "";
  const result: IResult = await fetch(
    `https://lp-api.sam-media.com/v1/submit_msisdn_mo/${host}/${country}/${handle}/${offer}/?msisdn=${msisdn}&rockman_id=${
      visitor.rockmanId
    }&${search}`
  ).then(x => x.json());
  if (!result.isValid) {
    const error = new Error(`${result.errorType}:\n${result.errorText}`);
    error["type"] = result.errorType;
    console.error(error);
    throw error;
  } else {
    return result.keyword;
  }
}
