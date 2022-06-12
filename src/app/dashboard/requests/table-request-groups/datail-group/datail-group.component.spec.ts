import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatailGroupComponent } from './datail-group.component';

describe('DatailGroupComponent', () => {
  let component: DatailGroupComponent;
  let fixture: ComponentFixture<DatailGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatailGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatailGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
