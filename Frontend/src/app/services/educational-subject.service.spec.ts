import { TestBed } from '@angular/core/testing';

import { EducationalSubjectService } from './educational-subject.service';

describe('EducationalSubjectService', () => {
  let service: EducationalSubjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EducationalSubjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
