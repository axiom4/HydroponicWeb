import { Component, OnInit } from '@angular/core';
import { SystemRebootService } from '../system-reboot.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private systemRebootService: SystemRebootService) { }

  reboot() {
    this.systemRebootService.systemReboot().subscribe(value => console.log(value));
  }

  ngOnInit(): void {
  }

}
