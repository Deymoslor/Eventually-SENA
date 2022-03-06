import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalReportsComponent } from './modal-reports.component';

describe('ModalReportsComponent', () => {
  let component: ModalReportsComponent;
  let fixture: ComponentFixture<ModalReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
