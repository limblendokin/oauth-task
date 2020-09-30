import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http:HttpClient) { }

  public getFriends(){
    return this.http.get<any>('http://localhost:5500')
  }

  public getAuth(){
    return this.http.get<any>('http://localhost:5500/oauth/vk/');
  }

}
