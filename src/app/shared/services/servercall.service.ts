import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServercallService {
  baseUrl:string="http://localhost:2020/"
  constructor(private _http:HttpClient) { }

  post(url,data){
    return  this._http.post(this.baseUrl+url,data);
  }

  get(url){
    return this._http.get(url);
  }
}
