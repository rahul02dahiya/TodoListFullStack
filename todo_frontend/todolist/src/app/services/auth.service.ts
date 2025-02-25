import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = `http://localhost:8082/users`;
  
  constructor(private http: HttpClient) { }

  register(user: any) {
    return this.http.post(`${this.baseUrl}/save`, user);
  }

  login(credentials: any) {
    return this.http.post(`${this.baseUrl}/login`, credentials);
  }
  clearStorage():void{
    localStorage.clear();
  }
  isUserLoggedIn():boolean{
    const id=localStorage.getItem("userId");
    return id!==null ?true:false;
  }
}
