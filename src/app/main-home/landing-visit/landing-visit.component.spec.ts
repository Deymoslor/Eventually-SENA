import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingVisitComponent } from './landing-visit.component';

describe('LandingVisitComponent', () => {
  let component: LandingVisitComponent;
  let fixture: ComponentFixture<LandingVisitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingVisitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
