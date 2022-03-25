import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditEventsComponent } from './modal-edit-events.component';

describe('ModalEditEventsComponent', () => {
  let component: ModalEditEventsComponent;
  let fixture: ComponentFixture<ModalEditEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
