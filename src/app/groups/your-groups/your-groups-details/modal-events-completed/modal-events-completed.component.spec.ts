import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEventsCompletedComponent } from './modal-events-completed.component';

describe('ModalEventsCompletedComponent', () => {
  let component: ModalEventsCompletedComponent;
  let fixture: ComponentFixture<ModalEventsCompletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEventsCompletedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEventsCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
