import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableInvitationsEventsComponent } from './table-invitations-events.component';

describe('TableInvitationsEventsComponent', () => {
  let component: TableInvitationsEventsComponent;
  let fixture: ComponentFixture<TableInvitationsEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableInvitationsEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableInvitationsEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
