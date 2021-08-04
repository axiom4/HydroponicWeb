import { TestBed } from '@angular/core/testing';

import { HydroponicConfigService } from './hydroponic-config.service';

describe('HydroponicConfigService', () => {
  let service: HydroponicConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HydroponicConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
