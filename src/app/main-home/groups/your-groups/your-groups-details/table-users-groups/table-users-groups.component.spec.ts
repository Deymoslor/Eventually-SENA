import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableUsersGroupsComponent } from './table-users-groups.component';

describe('TableUsersGroupsComponent', () => {
  let component: TableUsersGroupsComponent;
  let fixture: ComponentFixture<TableUsersGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableUsersGroupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableUsersGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
