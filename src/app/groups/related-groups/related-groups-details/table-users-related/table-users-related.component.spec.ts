import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableUsersRelatedComponent } from './table-users-related.component';

describe('TableUsersRelatedComponent', () => {
  let component: TableUsersRelatedComponent;
  let fixture: ComponentFixture<TableUsersRelatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableUsersRelatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableUsersRelatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
