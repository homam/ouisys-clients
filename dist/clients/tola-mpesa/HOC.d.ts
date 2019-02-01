import * as React from "react";
import * as TAPI from "./TolaAPI";
import * as RDS from "../../common-types/RemoteDataState";
import ITracker from "../../common-types/ITracker";
import IVisitor from "../../common-types/IVisitor";
export declare type TolaRDS = TAPI.TolaRDS;
export declare type ITolaProps = {
    currentState: TAPI.TolaRDS;
    actions: TAPI.ITolaActions;
};
export declare type TolaFailure = TAPI.TolaFailure;
export declare type TolaSuccess = TAPI.TolaSuccess;
export declare function match<R>(matcher: RDS.IMatcher<TAPI.TolaFailure, TAPI.TolaSuccess, R>): (rds: RDS.RemoteDataState<import("./TolaState").TolaErrors<string>, import("./TolaState").TolaSuccessResult>) => R;
export declare function MatchSuccess<R>(matcher: RDS.ISuccessMatcher<TolaFailure, TolaSuccess, R>): (rds: RDS.RemoteDataState<import("./TolaState").TolaErrors<string>, import("./TolaState").TolaSuccessResult>) => R;
declare const _default: (tracker: ITracker, visitor: IVisitor) => (Comp: React.ComponentType<ITolaProps>) => (initState: RDS.RemoteDataState<import("./TolaState").TolaErrors<string>, import("./TolaState").TolaSuccessResult>) => {
    new (props: any): {
        state: {
            current: RDS.RemoteDataState<import("./TolaState").TolaErrors<string>, import("./TolaState").TolaSuccessResult>;
        };
        actions: TAPI.ITolaActions;
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
export declare const mockLoadingState: RDS.RemoteDataState<import("./TolaState").TolaErrors<string>, import("./TolaState").TolaSuccessResult>;
export declare const mockSuccessState: RDS.RemoteDataState<import("./TolaState").TolaErrors<string>, import("./TolaState").TolaSuccessResult>;
export declare const mockFailureState: (err: import("./TolaState").TolaErrors<string>) => RDS.RemoteDataState<import("./TolaState").TolaErrors<string>, import("./TolaState").TolaSuccessResult>;
export declare const initialState: RDS.RemoteDataState<import("./TolaState").TolaErrors<string>, import("./TolaState").TolaSuccessResult>;
