import { TestBed } from '@angular/core/testing';

import { CarPriceCategoryService } from './car-price-category.service';

describe('CarPriceCategoryService', () => {
  let service: CarPriceCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarPriceCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
