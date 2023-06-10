import { TestBed } from '@angular/core/testing';

import { WinderService } from './winder.service';

describe('WinderService', () => {
  let service: WinderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WinderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
