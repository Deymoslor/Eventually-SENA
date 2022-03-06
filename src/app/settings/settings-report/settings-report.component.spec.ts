import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsReportComponent } from './settings-report.component';

describe('SettingsReportComponent', () => {
  let component: SettingsReportComponent;
  let fixture: ComponentFixture<SettingsReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
