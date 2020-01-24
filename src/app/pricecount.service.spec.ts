import { TestBed } from '@angular/core/testing';

import { PricecountService } from './pricecount.service';

describe('PricecountService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PricecountService = TestBed.get(PricecountService);
    expect(service).toBeTruthy();
  });
});
