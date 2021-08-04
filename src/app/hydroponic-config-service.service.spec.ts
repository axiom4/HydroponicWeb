import { TestBed } from '@angular/core/testing';

import { HydroponicConfigServiceService } from './hydroponic-config-service.service';

describe('HydroponicConfigServiceService', () => {
  let service: HydroponicConfigServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HydroponicConfigServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
