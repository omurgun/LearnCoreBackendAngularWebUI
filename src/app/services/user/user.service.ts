import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { BaseListResponseModel } from 'src/app/models/base/baseListResponseModel';
import { User } from 'src/app/models/user/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {


  apiUrl : string = "http://192.168.1.152:55134/api/users/getall"
  constructor(private httpClient : HttpClient) { }


  getUsers(): Observable<BaseListResponseModel<User>> {
    return this.httpClient.get<BaseListResponseModel<User>>(this.apiUrl)
   
  }
}
