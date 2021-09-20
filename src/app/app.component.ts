import { Component } from '@angular/core';
import { WebSocketDataService } from './web-socket-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  constructor(private websocketDataService: WebSocketDataService) {

  }
}

