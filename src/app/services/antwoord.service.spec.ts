import { TestBed } from '@angular/core/testing';

import { AntwoordService } from './antwoord.service';

describe('AntwoordService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AntwoordService = TestBed.get(AntwoordService);
    expect(service).toBeTruthy();
  });
});
