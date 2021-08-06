import { TestBed } from '@angular/core/testing';

import { SystemRebootService } from './system-reboot.service';

describe('SystemRebootService', () => {
  let service: SystemRebootService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SystemRebootService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
