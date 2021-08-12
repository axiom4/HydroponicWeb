import { Component, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { BatteryStatusService } from '../battery-status.service';

@Component({
  selector: 'app-battery-status',
  templateUrl: './battery-status.component.html',
  styleUrls: ['./battery-status.component.css']
})
export class BatteryStatusComponent implements OnInit {
  batteryStatus : number = 0;
  subscription: Subscription | undefined;

  constructor(private batteryStatusService : BatteryStatusService) { }

  getBatteryPercentStatus(value: number): number {

    if(value >= 4.2) return 100;
    else if(value >= 4.15) return 95;
    else if(value >= 4.11) return 90;
    else if(value >= 4.08) return 85;
    else if(value >= 4.02) return 80;
    else if(value >= 3.98) return 75;
    else if(value >= 3.95) return 70;
    else if(value >= 3.91) return 65;
    else if(value >= 3.87) return 60;
    else if(value >= 3.85) return 55;
    else if(value >= 3.84) return 50;
    else if(value >= 3.82) return 45;
    else if(value >= 3.80) return 40;
    else if(value >= 3.79) return 35;
    else if(value >= 3.77) return 30;
    else if(value >= 3.75) return 25;
    else if(value >= 3.73) return 20;
    else if(value >= 3.71) return 15;
    else if(value >= 3.69) return 10;
    else if(value >= 3.61) return 5;
    else if(value >= 3.27) return 0;

    return 0;
  }

  ngOnInit(): void {
    this.subscription = timer(0, 1000).pipe(
      switchMap(() => this.batteryStatusService.getBatterySatus())
    ).subscribe(json => {
      if(json && typeof json.status !== "undefined"){
        this.batteryStatus = json.status;
      } else {
        this.batteryStatus = 0;
      }
    });
  }

}
