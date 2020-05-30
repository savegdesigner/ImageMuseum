import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Obra from '../models/Obra.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObraService {

  private db: string = 'http://127.0.0.1:8000/api/museum/obras'

  constructor(private http: HttpClient) { }

  public createObra(obra: Obra): Observable<any> {

    return this.http.post(
      `${this.db}`,
      obra,
       {headers: new HttpHeaders({
        'X-Requested-With' : 'XMLHttpRequest'
      })}
       )

  }

  public readObras(): Observable<any> {
    return this.http.get(
      this.db,
      {headers: new HttpHeaders({
        'X-Requested-With' : 'XMLHttpRequest'
      })}
      )

  }

  public readObraById(id: number): Observable<any> {
    return this.http.get(
      `${this.db}/${id}`,
      {headers: new HttpHeaders({
        'X-Requested-With' : 'XMLHttpRequest'
      })})

  }

  public updateObra(id: number): void {

  }

  public deleteObra(id: number): void {

  }
}
