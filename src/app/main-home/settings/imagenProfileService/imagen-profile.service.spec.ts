import { TestBed } from '@angular/core/testing';

import { ImagenProfileService } from './imagen-profile.service';

describe('ImagenProfileService', () => {
  let service: ImagenProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImagenProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
