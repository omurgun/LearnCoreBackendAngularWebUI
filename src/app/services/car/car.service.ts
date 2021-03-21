import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseListResponseModel } from 'src/app/models/base/baseListResponseModel';
import { Car } from 'src/app/models/car/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  
  apiUrl : string = "http://192.168.1.152:55134/api/cars/getall"
  constructor(private httpClient : HttpClient) { }


  getCars(): Observable<BaseListResponseModel<Car>> {
    return this.httpClient.get<BaseListResponseModel<Car>>(this.apiUrl)
   
  }
}
