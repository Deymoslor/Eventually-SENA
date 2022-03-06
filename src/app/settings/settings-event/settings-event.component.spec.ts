import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsEventComponent } from './settings-event.component';

describe('SettingsEventComponent', () => {
  let component: SettingsEventComponent;
  let fixture: ComponentFixture<SettingsEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
