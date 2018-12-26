import * as React from "react";
import { IConfig, IKeywordShortcode } from "./api";
import * as RDS from "../../common-types/RemoteDataState";
import ITracker from "../../common-types/ITracker";
import IVisitor from "../../common-types/IVisitor";
export declare type MSISDNEntryFailure = {
    errorType: MSISDNEntryErrorTypes;
    error: any;
};
export declare type MSISDNEntrySuccess = IKeywordShortcode;
export declare type State = {
    type: "MSISDNEntry";
    result: RDS.RemoteDataState<MSISDNEntryFailure, MSISDNEntrySuccess>;
} | {
    type: 'Completed';
    result: void;
};
export declare type MSISDNEntryErrorTypes = "AlreadySubscribed" | "UnknownError" | "InvalidMSISDN";
export declare type PINEntryErrorTypes = "UnknownError" | "TooEarly" | "InvalidPIN";
export declare const initialState: State;
export declare const mockedMSISDNEntrySuccess: State;
export declare const mockedCompletedState: State;
export interface IActions {
    submitMSISDN: (window: Window, visitor: IVisitor, config: IConfig, msisdn: string) => void;
    backToStart: () => void;
}
export declare type HOCProps = {
    currentState: State;
    actions: IActions;
};
export declare function match<R>({ msisdnEntry, completed }: {
    msisdnEntry: (rds: RDS.RemoteDataState<MSISDNEntryFailure, MSISDNEntrySuccess>) => R;
    completed: (result: void) => R;
}): (state: State) => R;
declare const _default: <P extends HOCProps>(tracker: ITracker, Comp: React.ComponentType<HOCProps>) => (initialState: State) => {
    new (props: any): {
        state: {
            currentState: State;
            actions: IActions;
        };
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<{}>) => {} | Pick<{}, K>) | Pick<{}, K>, callback?: () => void): void;
        forceUpdate(callBack?: () => void): void;
        readonly props: Readonly<{
            children?: React.ReactNode;
        }> & Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<{}>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<{}>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): void;
    };
    contextType?: React.Context<any>;
};
export default _default;
export declare const MOLink: ({ keywordAndShortcode, children }: {
    keywordAndShortcode: IKeywordShortcode;
    children: React.ReactNode;
}) => JSX.Element;
