import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http' 
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  userReg(user: any){
   const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
   return this.http.post('http://localhost:3677/account/registration', user, {headers: headers}).pipe(map((response: any)=> response));
  }

  userAuth(user: any){
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post('http://localhost:3677/account/auth', user, {headers: headers}).pipe(map((response: any)=> response));
  }

  
}
