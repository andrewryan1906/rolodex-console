import { TestBed, inject } from '@angular/core/testing';

import { AlgoliaKeyManagementService } from './algolia-key-management.service';

describe('AlgoliaKeyManagementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlgoliaKeyManagementService]
    });
  });

  it('should be created', inject([AlgoliaKeyManagementService], (service: AlgoliaKeyManagementService) => {
    expect(service).toBeTruthy();
  }));
});
