import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { RestaurentData } from '../restaurent-dash/restaurent.model';

@Injectable({
  providedIn: 'root'
})

export class ApiService 
{

  constructor(private _http: HttpClient) {}

  //POST request
  postRestaurent(data:any ) 
  {
    return this._http.post<any>("http://localhost:5100/CREATE", data).pipe(map((res:any)=>{
      return res;
    }))
  }
    
  //GET request
  getRestaurent() 
  {
    return this._http.get<any>("http://localhost:5100/READ").pipe(map((res:any)=>{
      return res;
    }));
  }

  //delete request
  deleteRestaurant(id: number) 
  {
    return this._http.delete<any>("http://localhost:5100/DELETE/" + id).pipe(map((res: any) => res));  
}


  //update request
  updateRestaurant(id: number, data: any) 
  {
    return this._http.put<any>("http://localhost:5100/UPDATE/"+id,data).pipe(map((res:any)=>{
      return res;
    }));
  }
}
