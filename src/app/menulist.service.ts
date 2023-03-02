import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MenubyRestrtid } from './menus';
import { map, Observable } from 'rxjs';

@Injectable()
export class MenulistService {

  private _url : string="/assets/data/menudata.json";
  constructor(private http:HttpClient) { }

  getMenu() : Observable<MenubyRestrtid[]>{
    return this.http.get<MenubyRestrtid[]>(this._url);
  }

  getProduct(){
    return this.http.get<any>(this._url)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
