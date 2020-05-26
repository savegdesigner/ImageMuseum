import { Injectable } from '@angular/core';
import User from '../models/User.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

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

}
