import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  private apiUrl = 'http://localhost:3000/send-email'; // URL del backend

  constructor(private http: HttpClient) { }

  enviarFormulario(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}