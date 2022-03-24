import { TestBed } from '@angular/core/testing';

import { YourGroupsService } from './your-groups.service';

describe('YourGroupsService', () => {
  let service: YourGroupsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YourGroupsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
