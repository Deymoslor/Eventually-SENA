import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreateServiceComponent } from './modal-create-service.component';

describe('ModalCreateServiceComponent', () => {
  let component: ModalCreateServiceComponent;
  let fixture: ComponentFixture<ModalCreateServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCreateServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCreateServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
