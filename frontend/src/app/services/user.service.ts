import { Injectable } from '@angular/core';
import User from '../models/User.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private db: string = 'http://127.0.0.1:8000/api/user'

  constructor(private http: HttpClient) { }

  public getUser(): void {
    this.http.get(this.db).subscribe(user => {
      console.log(user)
    })
  }

}
