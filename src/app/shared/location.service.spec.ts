/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { LocationService } from './location.service';

describe('Location Service', () => {
  beforeEachProviders(() => [LocationService]);

  it('should ...',
      inject([LocationService], (service: LocationService) => {
    expect(service).toBeTruthy();
  }));
});
