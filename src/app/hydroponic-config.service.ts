import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap, timeout } from 'rxjs/operators';

import { HydroponicConfig } from './hydroponic-config';

@Injectable({
  providedIn: 'root'
})
export class HydroponicConfigService {

  private configUrl = '/rest/config';

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

  getHydroponicConfig(): Observable<HydroponicConfig> {
    const url = `${this.configUrl}`;
    return this.http.get<HydroponicConfig>(url).pipe(
      timeout(10000),
      tap(_ => this.log(`fetched HydroponicConfig`)),
      catchError(this.handleError<HydroponicConfig>(`HydroponicConfig`))
    );
  }

  setHydroponicConfig(config: HydroponicConfig): Observable<any> {
    const url = `${this.configUrl}`;

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post<HydroponicConfig>(url, config, httpOptions).pipe(
      timeout(10000),
      tap(_ => this.log(`fetched HydroponicConfig`)),
      catchError(this.handleError<HydroponicConfig>(`HydroponicConfig`))
    );
  }

  private log(message: string) {
    console.log(`HydroponicConfig: ${message}`);
  }
}
