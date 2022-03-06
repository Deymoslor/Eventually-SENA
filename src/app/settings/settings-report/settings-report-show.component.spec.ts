import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsReportShowComponent } from './settings-report-show.component';

describe('SettingsReportShowComponent', () => {
  let component: SettingsReportShowComponent;
  let fixture: ComponentFixture<SettingsReportShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsReportShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsReportShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
