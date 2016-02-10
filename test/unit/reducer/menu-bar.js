'use strict';

import { expect } from 'chai';
import menuBar from '../../../app/reducer/menu-bar';
import * as MenuBarActions from '../../../app/actions/menu-bar';


describe('@menuBar', function () {
  it('should return the initial state', function () {
    const expectedState = {};
    expect(menuBar(undefined, {})).to.deep.equal(expectedState);
  });
  it('should forward the received state if no action is handled', function () {
    const initialState = {
      text: 'Hello'
    };
    expect(menuBar(initialState, {})).to.deep.equal(initialState);
  });
  it('should handle SET_AS_BOLD action', function () {
    const initialState = {
      text: 'Hello',
      cursorPosition: { line: 0, ch: 5 },
      somethingSelected: true,
      selections: [{
        anchor: { line: 0, ch: 5 },
        head: { line: 0, ch: 0 }
      }]
    };
    const expectedState = {
      text: '**Hello**',
      cursorPosition: { line: 0, ch: 5 },
      somethingSelected: true,
      selections: [{
        anchor: { line: 0, ch: 5 },
        head: { line: 0, ch: 0 }
      }]
    };
    expect(menuBar(initialState, MenuBarActions.setAsBold())).to.deep.equal(expectedState);
  });
  it('should handle SET_AS_ITALIC action', function () {
    const initialState = {
      text: 'Hello',
      cursorPosition: { line: 0, ch: 5 },
      somethingSelected: true,
      selections: [{
        anchor: { line: 0, ch: 5 },
        head: { line: 0, ch: 0 }
      }]
    };
    const expectedState = {
      text: '*Hello*',
      cursorPosition: { line: 0, ch: 5 },
      somethingSelected: true,
      selections: [{
        anchor: { line: 0, ch: 5 },
        head: { line: 0, ch: 0 }
      }]
    };
    expect(menuBar(initialState, MenuBarActions.setAsItalic())).to.deep.equal(expectedState);
  });
});
