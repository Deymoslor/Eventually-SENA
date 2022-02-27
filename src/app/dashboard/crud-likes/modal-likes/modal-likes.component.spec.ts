import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalLikesComponent } from './modal-likes.component';

describe('ModalLikesComponent', () => {
  let component: ModalLikesComponent;
  let fixture: ComponentFixture<ModalLikesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalLikesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalLikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
