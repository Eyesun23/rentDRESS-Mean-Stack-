import { TestBed, inject } from '@angular/core/testing';

import { NewDressService } from './new-dress.service';

describe('NewDressService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewDressService]
    });
  });

  it('should be created', inject([NewDressService], (service: NewDressService) => {
    expect(service).toBeTruthy();
  }));
});
