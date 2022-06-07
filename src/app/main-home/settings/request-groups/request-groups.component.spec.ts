import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestGroupsComponent } from './request-groups.component';

describe('RequestGroupsComponent', () => {
  let component: RequestGroupsComponent;
  let fixture: ComponentFixture<RequestGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestGroupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
