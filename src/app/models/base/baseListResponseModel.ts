import { BaseResponseModel } from "./baseResponseModel";

export interface BaseListResponseModel<T> extends BaseResponseModel{
    data:T[]
}