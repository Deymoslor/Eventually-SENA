import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTypeServicesComponent } from './table-type-services.component';

describe('TableTypeServicesComponent', () => {
  let component: TableTypeServicesComponent;
  let fixture: ComponentFixture<TableTypeServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableTypeServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableTypeServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
