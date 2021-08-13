import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { timeout, tap, catchError } from 'rxjs/operators';
import { HydroponicConfig } from './hydroponic-config';

@Injectable({
  providedIn: 'root'
})
export class RelayStatusService {
  private configUrl = '/rest/relay';

  constructor(private http: HttpClient) { }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getRelayStatus(): Observable<any> {
    const url = `${this.configUrl}`;
    return this.http.get<any>(url).pipe(
      timeout(10000),
      tap(_ => this.log(`fetched RelayStatusService`)),
      catchError(this.handleError<any>(`RelayStatusService`))
    );
  }

  setRelayStatus(status: boolean): Observable<any> {
    const url = `${this.configUrl}`;

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    const statusValue = (status ? 'on' : 'off');

    const request = { status: statusValue };

    return this.http.post<any>(url, request, httpOptions).pipe(
      timeout(10000),
      tap(_ => this.log(`fetched RelayStatusService`)),
      catchError(this.handleError<any>(`RelayStatusService`))
    );
  }

  private log(message: string) {
    console.log(`RelayStatusService: ${message}`);
  }
}
