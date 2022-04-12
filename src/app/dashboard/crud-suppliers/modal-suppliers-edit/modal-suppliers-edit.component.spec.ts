import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSuppliersEditComponent } from './modal-suppliers-edit.component';

describe('ModalSuppliersEditComponent', () => {
  let component: ModalSuppliersEditComponent;
  let fixture: ComponentFixture<ModalSuppliersEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSuppliersEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSuppliersEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
