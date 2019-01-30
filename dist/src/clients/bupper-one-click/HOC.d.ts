import * as React from "react";
import { ITracker } from "../../pacman/record";
declare type IState = "NothingYet" | "Clicked";
declare type IActions = {
    onClick: () => void;
};
export declare type IProps = {
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
}): (state: IState) => JSX.Element | R;
declare const _default: (tracker: ITracker, maybeConfig: IConfig, Comp: React.ComponentType<IProps>) => (initState: IState) => {
    new (props: Readonly<any>): {
        state: {
            current: IState;
        };
        actions: IActions;
        render(): JSX.Element;
        context: any;
        setState<K extends "current">(state: {
            current: IState;
        } | ((prevState: Readonly<{
            current: IState;
        }>, props: Readonly<any>) => {
            current: IState;
        } | Pick<{
            current: IState;
        }, K>) | Pick<{
            current: IState;
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
            current: IState;
        }>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<any>, prevState: Readonly<{
            current: IState;
        }>): any;
        componentDidUpdate?(prevProps: Readonly<any>, prevState: Readonly<{
            current: IState;
        }>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<any>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<any>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<any>, nextState: Readonly<{
            current: IState;
        }>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<any>, nextState: Readonly<{
            current: IState;
        }>, nextContext: any): void;
    };
    new (props: any, context?: any): {
        state: {
            current: IState;
        };
        actions: IActions;
        render(): JSX.Element;
        context: any;
        setState<K extends "current">(state: {
            current: IState;
        } | ((prevState: Readonly<{
            current: IState;
        }>, props: Readonly<any>) => {
            current: IState;
        } | Pick<{
            current: IState;
        }, K>) | Pick<{
            current: IState;
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
            current: IState;
        }>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<any>, prevState: Readonly<{
            current: IState;
        }>): any;
        componentDidUpdate?(prevProps: Readonly<any>, prevState: Readonly<{
            current: IState;
        }>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<any>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<any>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<any>, nextState: Readonly<{
            current: IState;
        }>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<any>, nextState: Readonly<{
            current: IState;
        }>, nextContext: any): void;
    };
    contextType?: React.Context<any>;
};
export default _default;
export declare const initialState: IState;
