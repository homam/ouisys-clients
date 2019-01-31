import * as React from "react";
import { ITracker } from "../../pacman/record";
declare type IState = "NothingYet";
declare type IActions = {
    onClick: () => void;
    productUrl: () => any;
};
export declare type HOCProps = {
    currentState: IState;
    actions: IActions;
};
export declare type IConfig = {
    host?: string;
    country?: string;
    handle?: string;
    offer?: number;
};
export declare function match<R>(matcher: {
    nothingYet: () => R;
}): (state: "NothingYet") => JSX.Element | R;
declare const _default: (tracker: ITracker, maybeConfig: IConfig, Comp: React.ComponentType<HOCProps>) => (initState: "NothingYet") => {
    new (props: Readonly<any>): {
        state: {
            current: "NothingYet";
        };
        actions: IActions;
        render(): JSX.Element;
        context: any;
        setState<K extends "current">(state: {
            current: "NothingYet";
        } | ((prevState: Readonly<{
            current: "NothingYet";
        }>, props: Readonly<any>) => {
            current: "NothingYet";
        } | Pick<{
            current: "NothingYet";
        }, K>) | Pick<{
            current: "NothingYet";
        }, K>, callback?: () => void): void;
        forceUpdate(callBack?: () => void): void;
        readonly props: Readonly<{
            children?: React.ReactNode;
        }> & Readonly<any>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<any>, nextState: Readonly<{
            current: "NothingYet";
        }>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<any>, prevState: Readonly<{
            current: "NothingYet";
        }>): any;
        componentDidUpdate?(prevProps: Readonly<any>, prevState: Readonly<{
            current: "NothingYet";
        }>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<any>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<any>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<any>, nextState: Readonly<{
            current: "NothingYet";
        }>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<any>, nextState: Readonly<{
            current: "NothingYet";
        }>, nextContext: any): void;
    };
    new (props: any, context?: any): {
        state: {
            current: "NothingYet";
        };
        actions: IActions;
        render(): JSX.Element;
        context: any;
        setState<K extends "current">(state: {
            current: "NothingYet";
        } | ((prevState: Readonly<{
            current: "NothingYet";
        }>, props: Readonly<any>) => {
            current: "NothingYet";
        } | Pick<{
            current: "NothingYet";
        }, K>) | Pick<{
            current: "NothingYet";
        }, K>, callback?: () => void): void;
        forceUpdate(callBack?: () => void): void;
        readonly props: Readonly<{
            children?: React.ReactNode;
        }> & Readonly<any>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<any>, nextState: Readonly<{
            current: "NothingYet";
        }>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<any>, prevState: Readonly<{
            current: "NothingYet";
        }>): any;
        componentDidUpdate?(prevProps: Readonly<any>, prevState: Readonly<{
            current: "NothingYet";
        }>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<any>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<any>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<any>, nextState: Readonly<{
            current: "NothingYet";
        }>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<any>, nextState: Readonly<{
            current: "NothingYet";
        }>, nextContext: any): void;
    };
    contextType?: React.Context<any>;
};
export default _default;
export declare const initialState: IState;
