import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatailEventComponent } from './datail-event.component';

describe('DatailEventComponent', () => {
  let component: DatailEventComponent;
  let fixture: ComponentFixture<DatailEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatailEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatailEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
