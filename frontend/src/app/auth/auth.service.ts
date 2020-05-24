import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import User from '../models/User.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: string
  private db: string = '/api/museum/user'

  constructor(private http: HttpClient) { }

  public signin(user: User): Observable<any> {
    return this.http.post(
      `${this.db}/signin`, 
      user,
      {headers: new HttpHeaders({'X-Requested-With' : 'XMLHttpRequest'})}
      )
      
  }

  public signUp(user: User): Observable<any> {
    return this.http.post(
      `${this.db}/signup`, 
      user,
      {headers: new HttpHeaders({'X-Requested-With' : 'XMLHttpRequest'})}
      )
      
  }

  public authenticate(): void {

  }

  public logout(): void {

  }

}
