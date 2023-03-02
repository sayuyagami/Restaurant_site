import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Myrestaurantlist } from './restaurant';


@Injectable()
export class RestaurantlistService {

  private _url : string="/assets/data/restaurant.json";

  constructor(private http:HttpClient) { }

  getRestaurants() : Observable<Myrestaurantlist[]>{
    return this.http.get<Myrestaurantlist[]>(this._url);
  }
}
