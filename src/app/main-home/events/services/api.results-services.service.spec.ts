import { TestBed } from '@angular/core/testing';

import { ApiResultsServicesService } from './api.results-services.service';

describe('Api.ResultsServicesService', () => {
  let service: ApiResultsServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiResultsServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
