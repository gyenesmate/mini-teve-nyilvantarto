import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Camel } from '../models/camel.model';
import { urls } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class CamelManagementService {

  constructor(private http: HttpClient) {}

  addCamel(camelData: Partial<Camel>): Observable<Camel> {
    return this.http.post<Camel>(urls.apiBase, camelData).pipe(
      catchError(this.handleError)
    );
  }

  listCamels(): Observable<Camel[]> {
    return this.http.get<Camel[]>(urls.apiBase).pipe(
      catchError(this.handleError)
    );
  }

  getCamelById(id: number): Observable<Camel> {
    return this.http.get<Camel>(`${urls.apiBase}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  updateCamel(id: number, camelData: Partial<Camel>): Observable<Camel> {
    return this.http.put<Camel>(`${urls.apiBase}/${id}`, camelData).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('API error:', error);

    let errorMessage = 'Unknown error occurred';

    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = error.error.message;
    } else {
      // Server-side error
      errorMessage = error.error?.message || `Server returned ${error.status}`;
    }

    return throwError(() => new Error(errorMessage));
  }
}
