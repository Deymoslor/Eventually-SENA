import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventInComponent } from './event-in.component';

describe('EventInComponent', () => {
  let component: EventInComponent;
  let fixture: ComponentFixture<EventInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
