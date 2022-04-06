import { TestBed } from '@angular/core/testing';

import { ApiTypeReportService } from './api-type-report.service';

describe('ApiTypeReportService', () => {
  let service: ApiTypeReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiTypeReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
