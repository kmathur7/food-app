/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { FaRestaurantComponent } from './fa-restaurant.component';

describe('Component: FaRestaurant', () => {
  it('should create an instance', () => {
    let component = new FaRestaurantComponent();
    expect(component).toBeTruthy();
  });
});
