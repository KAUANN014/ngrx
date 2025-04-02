import { Servidor } from '../../core/models/servidor.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ServidorService {
  private apiUrl = `${environment.apiBaseUrl}/servidores`;

  constructor(private http: HttpClient) {}

  GetServidores(): Observable<Servidor[]> {
    return this.http.get<Servidor[]>(this.apiUrl);
  }
}
