import { TestBed } from '@angular/core/testing';

import { FormAnalysisService } from './form-analysis.service';

describe('FormAnalysisService', () => {
  let service: FormAnalysisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormAnalysisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
