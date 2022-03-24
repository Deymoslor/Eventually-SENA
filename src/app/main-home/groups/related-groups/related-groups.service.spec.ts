import { TestBed } from '@angular/core/testing';

import { RelatedGroupsService } from './related-groups.service';

describe('RelatedGroupsService', () => {
  let service: RelatedGroupsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RelatedGroupsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
