import { Component, OnInit } from '@angular/core';
import { RelayStatusService } from '../relay-status.service';

@Component({
  selector: 'app-relay',
  templateUrl: './relay.component.html',
  styleUrls: ['./relay.component.css']
})
export class RelayComponent implements OnInit {

  relayStatus: boolean | undefined;

  constructor(private relayStatusService: RelayStatusService) { }

  ngOnInit(): void {
    this.relayStatusService.getRelayStatus().subscribe(relay => {
      console.log(relay);
      if (relay.status == 'on')
        this.relayStatus = true;
      else
      this.relayStatus = false;
    });
  }

  setRelayStatus(): void {
    console.log("set relay status");
    this.relayStatus = !this.relayStatus;

    this.relayStatusService.setRelayStatus(this.relayStatus).subscribe(status => {
      console.log(status);
    })
  }
}
