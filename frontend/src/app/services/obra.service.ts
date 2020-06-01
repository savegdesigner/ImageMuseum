import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Obra from '../models/Obra.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObraService {

  private db: string = 'http://127.0.0.1:8000/api/'

  constructor(private http: HttpClient) { }

  public createObra(obra: Obra): Observable<any> {

    return this.http.post(
      `${this.db}museum/obras`,
      obra,
       {headers: new HttpHeaders({
        'X-Requested-With' : 'XMLHttpRequest'
      })}
       )

  }

  public readObras(): Observable<any> {
    return this.http.get(
      `${this.db}museum/obras`,
      {headers: new HttpHeaders({
        'X-Requested-With' : 'XMLHttpRequest'
      })}
      )

  }

  public getObraById(id: number): Observable<any> {
    return this.http.get(
      `${this.db}museum/obras/${id}`,
      {headers: new HttpHeaders({
        'X-Requested-With' : 'XMLHttpRequest'
      })}
      )
  }

  public readObraById(id: number): Observable<any> {
    return this.http.get(
      `${this.db}museum/userObras/${id}`,
      {headers: new HttpHeaders({
        'X-Requested-With' : 'XMLHttpRequest'
      })}
      )

  }

  public updateObra(id: number, obra: Obra): Observable<any> {
    return this.http.put(
      `${this.db}museum/obras/${id}`,
      obra,
      {headers: new HttpHeaders({
        'X-Requested-With' : 'XMLHttpRequest'
      })}
      )
  }

  public deleteObra(id: number): Observable<any> {
    return this.http.delete(
      `${this.db}museum/obras/${id}`,
      {headers: new HttpHeaders({
        'X-Requested-With' : 'XMLHttpRequest'
      })})

  }

}
