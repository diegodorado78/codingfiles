import { TestBed } from '@angular/core/testing';

import { ExtrusorService } from './extrusor.service';

describe('ExtrusorService', () => {
  let service: ExtrusorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExtrusorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
