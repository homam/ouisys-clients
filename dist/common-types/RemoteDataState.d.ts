export declare type RemoteDataState<E, D> = {
    type: "NothingYet";
} | {
    type: "Loading";
} | {
    type: "Failure";
    error: E;
} | {
    type: "Success";
    data: D;
};
export interface IMatcher<E, D, R> {
    nothingYet: () => R;
    loading: () => R;
    failure: (error: E) => R;
    success: (data: D) => R;
}
export interface ISuccessMatcher<E, D, R> {
    success: (data: D) => R;
    otherwise: (rds: RemoteDataState<E, D>) => R;
}
export declare function match<E, D, R>({ nothingYet, loading, failure, success }: IMatcher<E, D, R>): (model: RemoteDataState<E, D>) => R;
export declare const NothingYet: <E, D>() => RemoteDataState<E, D>;
export declare const Loading: <E, D>() => RemoteDataState<E, D>;
export declare const Failure: <E, D>(error: E) => RemoteDataState<E, D>;
export declare const Success: <E, D>(data: D) => RemoteDataState<E, D>;
export declare const IsNothingYet: <E, D>(s: RemoteDataState<E, D>) => boolean;
export declare const IsLoading: <E, D>(s: RemoteDataState<E, D>) => boolean;
export declare const IsFailure: <E, D>(s: RemoteDataState<E, D>) => boolean;
export declare const IsSuccess: <E, D>(s: RemoteDataState<E, D>) => boolean;
export declare const WhenFailure: <E, D, R>(d: R, r: (err: E) => R) => (s: RemoteDataState<E, D>) => R;
export declare const WhenLoading: <D, R>(d: R, r: () => R) => (s: RemoteDataState<any, D>) => R;
export declare const WhenSuccess: <D, R>(d: R, r: (data: D) => R) => (s: RemoteDataState<any, D>) => R;
export declare const MatchFailure: <E, D, R>({ failure, otherwise }: {
    otherwise: () => R;
    failure: (err: E) => R;
}) => (s: RemoteDataState<E, D>) => R;
export declare const MatchSuccess: <E, D, R>({ success, otherwise }: ISuccessMatcher<E, D, R>) => (s: RemoteDataState<E, D>) => R;
