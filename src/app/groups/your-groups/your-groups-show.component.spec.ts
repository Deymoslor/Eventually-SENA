import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourGroupsShowComponent } from './your-groups-show.component';

describe('YourGroupsShowComponent', () => {
  let component: YourGroupsShowComponent;
  let fixture: ComponentFixture<YourGroupsShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourGroupsShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YourGroupsShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
