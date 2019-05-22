import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const API_URL = '/api';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  constructor(private httpClient: HttpClient) {}

  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

  public get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.httpClient.get(API_URL + path, { params }).pipe(catchError(this.formatErrors));    
  }

  public put(path: string, body: object = {}): Observable<any> {

    return this.httpClient
      .put(API_URL + path, JSON.stringify(body), this.options)
      .pipe(catchError(this.formatErrors));
  }

  public post(path: string, body: object = {}): Observable<any> {

    return this.httpClient
      .post(API_URL + path, JSON.stringify(body), this.options)
      .pipe(catchError(this.formatErrors));
  }

  public delete(path: string): Observable<any> {

    return this.httpClient.delete(API_URL + path).pipe(catchError(this.formatErrors));
  }

  public formatErrors(error: any): Observable<any> {
    return throwError(error.error);
  }
}