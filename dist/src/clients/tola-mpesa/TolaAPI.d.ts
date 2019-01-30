import * as TS from "./TolaState";
import * as RDS from "../../common-types/RemoteDataState";
import IVisitor from "../../common-types/IVisitor";
export declare function chargeAndWait1(visitor: IVisitor, msisdn: string, message: string, price: number): Promise<any>;
export declare type TolaFailure = TS.TolaErrors<string>;
export declare type TolaSuccess = TS.TolaSuccessResult;
export declare type TolaRDS = RDS.RemoteDataState<TS.TolaErrors<string>, TS.TolaSuccessResult>;
export declare const chargeAndWait: (visitor: IVisitor, msisdn: string, message: string, price: number, callback: (state: RDS.RemoteDataState<TS.TolaErrors<string>, TS.TolaSuccessResult>) => void) => void;
export interface ITolaActions {
    chargeAndWait: (msisdn: string, message: string, price: number) => any;
    backToNothingYet: () => any;
}
