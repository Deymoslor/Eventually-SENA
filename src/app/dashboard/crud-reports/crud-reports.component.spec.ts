import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudReportsComponent } from './crud-reports.component';

describe('CrudReportsComponent', () => {
  let component: CrudReportsComponent;
  let fixture: ComponentFixture<CrudReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
