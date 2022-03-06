import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierServiceComponent } from './supplier-service.component';

describe('SupplierServiceComponent', () => {
  let component: SupplierServiceComponent;
  let fixture: ComponentFixture<SupplierServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplierServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
