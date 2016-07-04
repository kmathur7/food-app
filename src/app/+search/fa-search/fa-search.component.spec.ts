/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { FaSearchComponent } from './fa-search.component';

describe('Component: FaSearch', () => {
  it('should create an instance', () => {
    let component = new FaSearchComponent();
    expect(component).toBeTruthy();
  });
});
