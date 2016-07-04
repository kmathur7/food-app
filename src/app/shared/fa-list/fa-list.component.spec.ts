/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { FaListComponent } from './fa-list.component';

describe('Component: FaList', () => {
  it('should create an instance', () => {
    let component = new FaListComponent();
    expect(component).toBeTruthy();
  });
});
