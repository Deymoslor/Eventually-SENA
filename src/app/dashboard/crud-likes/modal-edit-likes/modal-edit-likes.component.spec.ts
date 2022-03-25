import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditLikesComponent } from './modal-edit-likes.component';

describe('ModalEditLikesComponent', () => {
  let component: ModalEditLikesComponent;
  let fixture: ComponentFixture<ModalEditLikesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditLikesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditLikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
