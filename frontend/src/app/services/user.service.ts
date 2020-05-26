import { Injectable } from '@angular/core';
import User from '../models/User.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userId: number
  private db: string = '/api/museum/user'

  constructor(private http: HttpClient) { }

  public getUser(): Observable<any> {
    let token = localStorage.getItem('userToken')

    return this.http.get(
        this.db,
        {headers: new HttpHeaders({
          'X-Requested-With' : 'XMLHttpRequest',
          'Authorization' : `Bearer ${token}`
        })}
      )
  }

  public checkUserActive(): Observable<any> {
    return of(localStorage.getItem('userToken')) 
  }

  public setId(id: number): void {
    this.userId = id
  }

  public logoutUser(): void {
    localStorage.removeItem('userToken')

  }

}
