import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudSuppliersComponent } from './crud-suppliers.component';

describe('CrudSuppliersComponent', () => {
  let component: CrudSuppliersComponent;
  let fixture: ComponentFixture<CrudSuppliersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudSuppliersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudSuppliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
