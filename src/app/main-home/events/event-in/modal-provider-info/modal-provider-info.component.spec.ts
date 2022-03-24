import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalProviderInfoComponent } from './modal-provider-info.component';

describe('ModalProviderInfoComponent', () => {
  let component: ModalProviderInfoComponent;
  let fixture: ComponentFixture<ModalProviderInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalProviderInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalProviderInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
