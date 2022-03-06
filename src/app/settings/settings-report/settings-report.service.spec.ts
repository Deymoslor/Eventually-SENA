import { TestBed } from '@angular/core/testing';

import { SettingsReportService } from './settings-report.service';

describe('SettingsReportService', () => {
  let service: SettingsReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SettingsReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
