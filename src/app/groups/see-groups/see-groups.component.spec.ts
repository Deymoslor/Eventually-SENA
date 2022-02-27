import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeGroupsComponent } from './see-groups.component';

describe('SeeGroupsComponent', () => {
  let component: SeeGroupsComponent;
  let fixture: ComponentFixture<SeeGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeGroupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
