import { TestBed, inject } from '@angular/core/testing';

import { SecurityContextService } from './security-context.service';

describe('SecurityContextService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SecurityContextService]
    });
  });

  it('should be created', inject([SecurityContextService], (service: SecurityContextService) => {
    expect(service).toBeTruthy();
  }));
});
