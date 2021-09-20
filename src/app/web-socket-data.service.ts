import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { Observable, Subject, Subscription, timer } from 'rxjs';
import { tap, timeout } from 'rxjs/operators';

export const WS_ENDPOINT = environment.wsEndpoint;

@Injectable({
  providedIn: 'root'
})
export class WebSocketDataService {
  private socket$: WebSocketSubject<any> | undefined;
  private subject = new Subject<any>();
  private heartbeat$: Subscription | undefined;

  constructor() {
    this.connect();
  }

  private connect(): void {
    if (!this.socket$ || this.socket$.closed) {

      this.socket$ = this.getNewWebSocket();

      this.heartbeat$ = timer(1000, 5000)
      .pipe(
        tap(() => {
          if(this.socket$)
            this.socket$.next('{ "data" : "ping" }')
        })
      ).subscribe();

      this.socket$.pipe(timeout(10000)).subscribe(
        msg => {
          if (msg?.data && msg?.data === "pong") {
            console.log("ping ok");
          } else  {
            this.subject.next(msg);
          }
        },
        err => console.log(err), // Called if at any point WebSocket API signals some kind of error.
        () => console.log('complete') // Called when connection is closed (for whatever reason).
      );
    }
  }

  private getNewWebSocket() {
    return webSocket({
      url: WS_ENDPOINT,
      openObserver: {
        next: msg => {
          console.log('[DataService]: connection open')
        }
      },
      serializer: msg=> JSON.parse(JSON.stringify(msg)),
      closeObserver: {
        next: msg => {
          console.log('[DataService]: connection closed');
          if (this.socket$) {
            this.heartbeat$?.unsubscribe()
            this.socket$?.unsubscribe()
            this.socket$.complete()
            this.socket$ = undefined;
            this.heartbeat$ = undefined;
            this.connect();
          }
        }
      }
    });
  }

  sendMessage(message: any) {
    if (!this.socket$)
      this.connect();

    if (this.socket$)
      this.socket$.next({ data: message });
  }

  clearMessages() {
    this.subject.next();
  }

  onMessage(): Observable<any> {
    return this.subject.asObservable();
  }

  ngOnDestroy() {
    this.heartbeat$?.unsubscribe();
    this.socket$?.unsubscribe();
  }
}


