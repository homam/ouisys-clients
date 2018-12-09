import IVisitor from "../common-types/IVisitor";

interface Navigator {
    connection: any;
    userLanguage: any;
    browserLanguage: any;
    systemLanguage: any;
    oscpu: any;
  }
  
  interface Window {
    openDatabase: any;
    pac_analytics?: {
      visitor: IVisitor,
      startTime: number,
      url: string,
      queryString: (key: string) => string
    }
    dataLayer: {
      push: (...args) => void
    }
  }