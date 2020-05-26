import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import User from '../models/User.model';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: string
  private db: string = '/api/museum/user'

  constructor(
    private http: HttpClient,
    private router: Router
    ) { }

  public signin(user: User): Observable<any> {
    return this.http.post(
      `${this.db}/signin`, 
      user,
      {headers: new HttpHeaders({'X-Requested-With' : 'XMLHttpRequest'})}
      )
      
  }

  public signUp(user: User): any {
    return this.http.post(
      `${this.db}/signup`, 
      user,
      {headers: new HttpHeaders({'X-Requested-With' : 'XMLHttpRequest'})}
      )
      
  }

  public setToken(token: string): void {
    localStorage.setItem('userToken', token)
    this.token = token
  }

  public checkUserActive(): Observable<any> {
    return of(localStorage.getItem('userToken')) 
  }

  public authenticated(): boolean {
    if(this.token === undefined && localStorage.getItem('userToken') != null){
      this.token = localStorage.getItem('userToken')

    }

    if(this.token == undefined){
      this.router.navigate(['home'])
    }

    return this.token !== undefined

  }

  public logout(): void {

  }

}
