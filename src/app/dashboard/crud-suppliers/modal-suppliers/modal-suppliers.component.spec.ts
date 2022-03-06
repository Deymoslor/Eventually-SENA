import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSuppliersComponent } from './modal-suppliers.component';

describe('ModalSuppliersComponent', () => {
  let component: ModalSuppliersComponent;
  let fixture: ComponentFixture<ModalSuppliersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSuppliersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSuppliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
