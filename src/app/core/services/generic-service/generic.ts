import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Generic {

  constructor(private http: HttpClient) {}
  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');

    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token ? `Bearer ${token}` : ''
    });
  }

  // GET
  get<T>(url: string): Observable<T> {
    return this.http.get<T>(url, { headers: this.getHeaders() });
  }

  // POST
  post<T>(url: string, body: any): Observable<T> {
    return this.http.post<T>(url, body, { headers: this.getHeaders() });
  }


  // PUT
  put<T>(url: string, body: any): Observable<T> {
    return this.http.put<T>(url, body, { headers: this.getHeaders() });
  }

  // PATCH
  patch<T>(url: string, body: any): Observable<T> {
    return this.http.patch<T>(url, body, { headers: this.getHeaders() });
  }

  // DELETE
  delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(url, { headers: this.getHeaders() });
  }
  
}
  

