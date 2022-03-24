import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourGroupsDetailsComponent } from './your-groups-details.component';

describe('YourGroupsDetailsComponent', () => {
  let component: YourGroupsDetailsComponent;
  let fixture: ComponentFixture<YourGroupsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourGroupsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YourGroupsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
