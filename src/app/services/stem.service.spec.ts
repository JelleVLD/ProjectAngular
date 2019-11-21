import { TestBed } from '@angular/core/testing';

import { StemService } from './stem.service';

describe('StemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StemService = TestBed.get(StemService);
    expect(service).toBeTruthy();
  });
});
