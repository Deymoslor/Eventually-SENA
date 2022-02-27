import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedGroupsComponent } from './related-groups.component';

describe('RelatedGroupsComponent', () => {
  let component: RelatedGroupsComponent;
  let fixture: ComponentFixture<RelatedGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatedGroupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
