import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: string

  constructor(private http: HttpClient) { }

  public signin(): void {

  }

  public signUp(): void {

  }

  public authenticate(): void {

  }

  public logout(): void {

  }

}
