import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventProviderComponent } from './event-provider.component';

describe('EventProviderComponent', () => {
  let component: EventProviderComponent;
  let fixture: ComponentFixture<EventProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventProviderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
