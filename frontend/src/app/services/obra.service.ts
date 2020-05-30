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

  public readObras(): void {

  }

  public readObraById(id: number): void {

  }

  public updateObra(id: number): void {

  }

  public deleteObra(id: number): void {

  }
}
