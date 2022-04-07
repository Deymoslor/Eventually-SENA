import { TestBed } from '@angular/core/testing';

import { RequestEventsService } from './request-events.service';

describe('RequestEventsService', () => {
  let service: RequestEventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestEventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
