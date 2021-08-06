import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { timeout, tap, catchError } from 'rxjs/operators';
import { HydroponicConfig } from './hydroponic-config';

@Injectable({
  providedIn: 'root'
})
export class SystemRebootService {

  private configUrl = '/rest/system/reboot';

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

  systemReboot(): Observable<any> {
    const url = `${this.configUrl}`;

    const httpOptions = {
      headers: new HttpHeaders(
        { 'Authorization': 'Basic ' + btoa('admin:password') }
        )
    };

    return this.http.get<HydroponicConfig>(url, httpOptions).pipe(
      timeout(10000),
      tap(_ => this.log(`fetched SystemReboot`)),
      catchError(this.handleError<any>(`SystemReboot`))
    );
  }

  private log(message: string) {
    console.log(`HydroponicConfig: ${message}`);
  }
}
