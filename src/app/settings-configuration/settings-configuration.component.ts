import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HydroponicConfig } from '../hydroponic-config';
import { HydroponicConfigService } from '../hydroponic-config.service';

@Component({
  selector: 'app-settings-configuration',
  templateUrl: './settings-configuration.component.html',
  styleUrls: ['./settings-configuration.component.css']
})
export class SettingsConfigurationComponent implements OnInit {
  config: HydroponicConfig | undefined;

  constructor(private hydroponicConfigService: HydroponicConfigService) { }

  ngOnInit(): void {
     this.getHydroponicConfig()
  }

  onSubmit() {
    if(this.config) {
      this.hydroponicConfigService.setHydroponicConfig(this.config).subscribe(value => console.log(value));
    }
  }

  getHydroponicConfig(): void {
    this.hydroponicConfigService.getHydroponicConfig().subscribe(config => this.config = config);
  }
}
