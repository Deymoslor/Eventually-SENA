import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalInfoSerProvComponent } from './modal-info-ser-prov.component';

describe('ModalInfoSerProvComponent', () => {
  let component: ModalInfoSerProvComponent;
  let fixture: ComponentFixture<ModalInfoSerProvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalInfoSerProvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalInfoSerProvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
