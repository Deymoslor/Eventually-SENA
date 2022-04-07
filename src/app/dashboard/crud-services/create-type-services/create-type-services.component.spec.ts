import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTypeServicesComponent } from './create-type-services.component';

describe('CreateTypeServicesComponent', () => {
  let component: CreateTypeServicesComponent;
  let fixture: ComponentFixture<CreateTypeServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTypeServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTypeServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
