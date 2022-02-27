import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeGroupDetailComponent } from './see-group-detail.component';

describe('SeeGroup.DetailComponent', () => {
  let component: SeeGroupDetailComponent;
  let fixture: ComponentFixture<SeeGroupDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeGroupDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeGroupDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
