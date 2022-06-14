import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingProvComponent } from './landing-prov.component';

describe('LandingProvComponent', () => {
  let component: LandingProvComponent;
  let fixture: ComponentFixture<LandingProvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingProvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingProvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
