import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudLikesComponent } from './crud-likes.component';

describe('CrudLikesComponent', () => {
  let component: CrudLikesComponent;
  let fixture: ComponentFixture<CrudLikesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudLikesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudLikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
