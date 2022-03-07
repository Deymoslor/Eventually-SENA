import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRequestEventComponent } from './table-request-event.component';

describe('TableRequestEventComponent', () => {
  let component: TableRequestEventComponent;
  let fixture: ComponentFixture<TableRequestEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableRequestEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableRequestEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
