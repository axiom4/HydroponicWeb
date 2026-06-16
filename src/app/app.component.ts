import { Component, ChangeDetectionStrategy } from '@angular/core';
import { WebSocketDataService } from './web-socket-data.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class AppComponent  {

  constructor(private websocketDataService: WebSocketDataService) {

  }
}

