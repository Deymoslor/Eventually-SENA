import { TestBed } from '@angular/core/testing';

import { GroupsServiceService } from './groups-service.service';

describe('GroupsServiceService', () => {
  let service: GroupsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
