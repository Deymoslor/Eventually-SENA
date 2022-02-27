import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudServicesComponent } from './crud-services.component';

describe('CrudServicesComponent', () => {
  let component: CrudServicesComponent;
  let fixture: ComponentFixture<CrudServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
