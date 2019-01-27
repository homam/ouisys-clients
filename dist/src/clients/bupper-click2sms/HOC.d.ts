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
declare const _default: <P extends {}>(tracker: ITracker, Comp: React.ComponentType<P & HOCProps>, maybeConfig?: IConfig) => (initialState: RDS.RemoteDataState<string, IKeywordShortcode>) => {
    new (props: Readonly<P>): {
        state: {
            currentState: RDS.RemoteDataState<string, IKeywordShortcode>;
        };
        componentDidMount(): void;
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
    new (props: P, context?: any): {
        state: {
            currentState: RDS.RemoteDataState<string, IKeywordShortcode>;
        };
        componentDidMount(): void;
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
