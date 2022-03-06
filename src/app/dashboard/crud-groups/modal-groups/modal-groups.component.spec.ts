import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalGroupsComponent } from './modal-groups.component';

describe('ModalGroupsComponent', () => {
  let component: ModalGroupsComponent;
  let fixture: ComponentFixture<ModalGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalGroupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
