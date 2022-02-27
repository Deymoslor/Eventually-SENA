import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsLikeComponent } from './settings-like.component';

describe('SettingsLikeComponent', () => {
  let component: SettingsLikeComponent;
  let fixture: ComponentFixture<SettingsLikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsLikeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
