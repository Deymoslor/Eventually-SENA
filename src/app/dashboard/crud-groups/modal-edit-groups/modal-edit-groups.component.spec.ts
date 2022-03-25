import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditGroupsComponent } from './modal-edit-groups.component';

describe('ModalEditGroupsComponent', () => {
  let component: ModalEditGroupsComponent;
  let fixture: ComponentFixture<ModalEditGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditGroupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
