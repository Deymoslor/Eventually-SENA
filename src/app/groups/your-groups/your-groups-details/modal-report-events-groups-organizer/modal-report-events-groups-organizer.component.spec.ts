import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalReportEventsGroupsOrganizerComponent } from './modal-report-events-groups-organizer.component';

describe('ModalReportEventsGroupsOrganizerComponent', () => {
  let component: ModalReportEventsGroupsOrganizerComponent;
  let fixture: ComponentFixture<ModalReportEventsGroupsOrganizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalReportEventsGroupsOrganizerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalReportEventsGroupsOrganizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
