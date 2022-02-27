import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeGroupsShowComponent } from './see-groups-show.component';

describe('SeeGroupsShowComponent', () => {
  let component: SeeGroupsShowComponent;
  let fixture: ComponentFixture<SeeGroupsShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeGroupsShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeGroupsShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
