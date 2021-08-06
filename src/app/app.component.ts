import { Component, OnInit } from '@angular/core';
import { SystemRebootService } from './system-reboot.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  constructor(private systemRebootService: SystemRebootService) { }

  reboot() {
    this.systemRebootService.systemReboot().subscribe(value => console.log(value));
  }
}

