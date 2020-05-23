import { Injectable } from '@angular/core';
import User from '../models/User.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public getUser(id: number): void {
    
  }

}
