import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditServiceComponent } from './modal-edit-service.component';

describe('ModalEditServiceComponent', () => {
  let component: ModalEditServiceComponent;
  let fixture: ComponentFixture<ModalEditServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
