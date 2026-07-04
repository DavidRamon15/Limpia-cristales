import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  private apiUrl = 'https://limpia-cristales-backend.onrender.com/send-email';

  constructor(private http: HttpClient) { }

  enviarFormulario(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}