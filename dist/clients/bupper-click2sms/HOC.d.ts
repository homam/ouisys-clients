import * as React from "react";
import * as RDS from "../../common-types/RemoteDataState";
import { ITracker } from "../../pacman/record";
import { IKeywordShortcode, IConfig } from "./main";
export declare type State = RDS.RemoteDataState<string, IKeywordShortcode>;
export declare const initialState: State;
export declare const mockedSuccessState: State;
export declare const mockedFailureState: State;
export declare const mockedLoadingState: State;
export { IKeywordShortcode };
export declare type HOCProps = {
    currentState: State;
    MOLink: ACompType;
};
declare type ACompType = React.ComponentType<{
    children: React.ReactNode;
} & React.HTMLAttributes<HTMLAnchorElement> & {
    keyword?: string;
    shortcode?: string;
}>;
declare const _default: <P extends {}>(tracker: ITracker, Comp: React.ComponentType<P & HOCProps>, maybeConfig?: IConfig) => (initialState: RDS.RemoteDataState<string, IKeywordShortcode>) => React.ComponentType<{}>;
export default _default;
