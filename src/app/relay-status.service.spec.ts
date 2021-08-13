import { TestBed } from '@angular/core/testing';

import { RelayStatusService } from './relay-status.service';

describe('RelayStatusService', () => {
  let service: RelayStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RelayStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
