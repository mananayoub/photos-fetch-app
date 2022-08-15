import { TestBed } from '@angular/core/testing';

import { PhotoGetService } from './photo-get.service';

describe('PhotoGetService', () => {
  let service: PhotoGetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotoGetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
