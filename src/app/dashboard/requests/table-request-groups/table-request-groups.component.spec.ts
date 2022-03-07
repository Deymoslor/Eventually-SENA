import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRequestGroupsComponent } from './table-request-groups.component';

describe('TableRequestGroupsComponent', () => {
  let component: TableRequestGroupsComponent;
  let fixture: ComponentFixture<TableRequestGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableRequestGroupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableRequestGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
