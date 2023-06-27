import { TestBed } from '@angular/core/testing';

import { EducationalStandardService } from './educational-standard.service';

describe('EducationalStandardService', () => {
  let service: EducationalStandardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EducationalStandardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
