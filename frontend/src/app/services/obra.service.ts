import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Obra from '../models/Obra.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObraService {

  private db: string = 'http://localhost:8000/api/museum/obras'

  constructor(private http: HttpClient) { }

  public createObra(obra: Obra): Observable<Obra> {
    return this.http.post<Obra>(`${this.db}`, obra)

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
