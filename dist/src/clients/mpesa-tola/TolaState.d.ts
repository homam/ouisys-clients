export declare type TolaErrorTypes = "InvalidMSISDN" | "FailChargeResponseReceived" | "FailLodgementNotificationReceived" | "FailDisbursementNotificationReceived" | "Timeout" | "UnknownError";
export declare type TolaErrors<E> = {
    type: TolaErrorTypes;
    error: E;
};
export declare type TolaSuccessResult = {
    type: "Success";
};
export declare function match<R>({ success }: {
    success: () => R;
}): (model: TolaSuccessResult) => R;
export declare const Success: () => TolaSuccessResult;
export declare const mkTolaError: <E>(type: TolaErrorTypes, error: E) => {
    type: TolaErrorTypes;
    error: E;
};
