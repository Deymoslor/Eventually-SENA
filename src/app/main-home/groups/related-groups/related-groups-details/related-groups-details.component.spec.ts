import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedGroupsDetailsComponent } from './related-groups-details.component';

describe('RelatedGroupsDetailsComponent', () => {
  let component: RelatedGroupsDetailsComponent;
  let fixture: ComponentFixture<RelatedGroupsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatedGroupsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedGroupsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
