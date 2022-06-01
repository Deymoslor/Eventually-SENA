import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSourceUsersComponent } from './modal-source-users.component';

describe('ModalSourceUsersComponent', () => {
  let component: ModalSourceUsersComponent;
  let fixture: ComponentFixture<ModalSourceUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSourceUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSourceUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
