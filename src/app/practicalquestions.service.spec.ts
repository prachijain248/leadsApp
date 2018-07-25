import { TestBed, inject } from '@angular/core/testing';

import { PracticalquestionsService } from './practicalquestions.service';

describe('PracticalquestionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PracticalquestionsService]
    });
  });

  it('should be created', inject([PracticalquestionsService], (service: PracticalquestionsService) => {
    expect(service).toBeTruthy();
  }));
});
