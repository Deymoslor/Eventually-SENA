import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableServicesComponent } from './table-services.component';

describe('TableServicesComponent', () => {
  let component: TableServicesComponent;
  let fixture: ComponentFixture<TableServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
