import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDisableEventComponent } from './modal-disable-event.component';

describe('ModalDisableEventComponent', () => {
  let component: ModalDisableEventComponent;
  let fixture: ComponentFixture<ModalDisableEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDisableEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDisableEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
