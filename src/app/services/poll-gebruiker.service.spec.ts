import { TestBed } from '@angular/core/testing';

import { PollGebruikerService } from './poll-gebruiker.service';

describe('PollGebruikerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PollGebruikerService = TestBed.get(PollGebruikerService);
    expect(service).toBeTruthy();
  });
});
