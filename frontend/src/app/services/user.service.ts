import { Injectable } from '@angular/core';
import User from '../models/User.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public userId: number
  private db: string = '/api/museum/user'
  public userActive = new Subject<boolean>()

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

  public checkUserActive(): void {
    if(localStorage.getItem('userToken')){ 
      this.userActive.next(true)

    } else {
      this.userActive.next(false)

    }

  }

  public setId(id: number): void {
    localStorage.setItem('userId', id.toString())
    this.userId = id
  }

  public logoutUser(): void {
    localStorage.removeItem('userToken')
    localStorage.removeItem('userId')

  }

}
