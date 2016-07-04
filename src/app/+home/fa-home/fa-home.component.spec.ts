/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { FaHomeComponent } from './fa-home.component';

describe('Component: FaHome', () => {
  it('should create an instance', () => {
    let component = new FaHomeComponent();
    expect(component).toBeTruthy();
  });
});
