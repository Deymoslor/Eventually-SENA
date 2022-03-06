import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudGroupsComponent } from './crud-groups.component';

describe('CrudGroupsComponent', () => {
  let component: CrudGroupsComponent;
  let fixture: ComponentFixture<CrudGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudGroupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
