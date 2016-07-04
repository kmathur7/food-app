/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { FaHeaderComponent } from './fa-header.component';

describe('Component: FaHeader', () => {
  it('should create an instance', () => {
    let component = new FaHeaderComponent();
    expect(component).toBeTruthy();
  });
});
