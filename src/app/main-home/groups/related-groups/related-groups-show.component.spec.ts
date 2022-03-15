import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedGroupsShowComponent } from './related-groups-show.component';

describe('RelatedGroupsShowComponent', () => {
  let component: RelatedGroupsShowComponent;
  let fixture: ComponentFixture<RelatedGroupsShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatedGroupsShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedGroupsShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
