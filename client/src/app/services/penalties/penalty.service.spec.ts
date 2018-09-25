import { TestBed, inject } from '@angular/core/testing';

import { PenaltyService } from './penalty.service';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PenaltyService]
    });
  });

  it('should be created', inject([PenaltyService], (service: PenaltyService) => {
    expect(service).toBeTruthy();
  }));
});
