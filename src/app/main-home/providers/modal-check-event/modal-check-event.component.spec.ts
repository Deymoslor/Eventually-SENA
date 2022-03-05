import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCheckEventComponent } from './modal-check-event.component';

describe('ModalCheckEventComponent', () => {
  let component: ModalCheckEventComponent;
  let fixture: ComponentFixture<ModalCheckEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCheckEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCheckEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
