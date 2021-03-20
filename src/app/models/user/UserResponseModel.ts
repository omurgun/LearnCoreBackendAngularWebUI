import { BaseResponseModel } from "../base/baseResponseModel";
import { User } from "./user";

export interface UserResponseModel extends BaseResponseModel{
    data:User[]
}