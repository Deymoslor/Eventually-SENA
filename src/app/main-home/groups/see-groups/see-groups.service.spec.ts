import { TestBed } from '@angular/core/testing';

import { SeeGroupsService } from './see-groups.service';

describe('SeeGroupsService', () => {
  let service: SeeGroupsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeeGroupsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
