import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class DataService {
  backendUrl = "/"
  constructor(private http:HttpClient) { }

  public getFriends(){
    return this.http.get<any>(this.backendUrl + "api/friends", {withCredentials:true})
  }
  public getProfile(){
    return this.http.get<any>(this.backendUrl + "api/profile",{withCredentials:true})
  }

}
