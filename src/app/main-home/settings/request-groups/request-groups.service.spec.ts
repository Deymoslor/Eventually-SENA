import { TestBed } from '@angular/core/testing';

import { RequestGroupsService } from './request-groups.service';

describe('RequestGroupsService', () => {
  let service: RequestGroupsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestGroupsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
