import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudUsersComponent } from './crud-users.component';

describe('CrudUsersComponent', () => {
  let component: CrudUsersComponent;
  let fixture: ComponentFixture<CrudUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
