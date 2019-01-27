import * as React from "react";
import { IConfig } from "./main";
import * as RDS from "../../common-types/RemoteDataState";
import { ITracker } from "../../pacman/record";
export declare type MSISDNEntryFailure = {
    errorType: MSISDNEntryErrorTypes;
    error: any;
};
export declare type MSISDNEntrySuccess = {};
export declare type PINEntryFailure = {
    errorType: PINEntryErrorTypes;
    error?: Error;
};
export declare type PINEntrySuccess = {
    finalUrl: string;
};
export declare type State = {
    type: "MSISDNEntry";
    result: RDS.RemoteDataState<MSISDNEntryFailure, MSISDNEntrySuccess>;
} | {
    type: "PINEntry";
    result: RDS.RemoteDataState<PINEntryFailure, PINEntrySuccess>;
} | {
    type: 'Completed';
    result: PINEntrySuccess;
};
export declare type MSISDNEntryErrorTypes = "AlreadySubscribed" | "UnknownError" | "InvalidMSISDN";
export declare type PINEntryErrorTypes = "UnknownError" | "TooEarly" | "InvalidPIN";
export declare const initialState: State;
export declare const mockedPINState: State;
export declare const mockedCompletedState: State;
export interface IActions {
    submitMSISDN: (window: Window, config: IConfig, msisdn: string) => any;
    submitPIN: (pin: string) => any;
    backToStart: () => void;
}
export declare type HOCProps = {
    currentState: State;
    actions: IActions;
};
export declare function match<R>({ msisdnEntry, pinEntry, completed }: {
    msisdnEntry: (rds: RDS.RemoteDataState<MSISDNEntryFailure, MSISDNEntrySuccess>) => R;
    pinEntry: (rds: RDS.RemoteDataState<PINEntryFailure, PINEntrySuccess>) => R;
    completed: (result: PINEntrySuccess) => R;
}): (state: State) => R;
declare const _default: <P extends HOCProps>(tracker: ITracker, Comp: React.ComponentType<P>) => (initialState: State) => {
    new (props: any): {
        state: {
            currentState: State;
            actions: IActions;
        };
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<P>) => {} | Pick<{}, K>) | Pick<{}, K>, callback?: () => void): void;
        forceUpdate(callBack?: () => void): void;
        readonly props: Readonly<{
            children?: React.ReactNode;
        }> & Readonly<P>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<P>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<P>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<P>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<P>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<P>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<P>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<P>, nextState: Readonly<{}>, nextContext: any): void;
    };
    contextType?: React.Context<any>;
};
export default _default;
