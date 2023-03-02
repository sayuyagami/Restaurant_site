import { TestBed } from '@angular/core/testing';

import { RestaurantlistService } from './restaurantlist.service';

describe('RestaurantlistService', () => {
  let service: RestaurantlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestaurantlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
