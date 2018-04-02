import reducer from './counter';
import * as types from '../actions/counterTypes';

describe('counter reducer', () => {
  it('should return initial state', () => {
    const testAction = {};
    const expectedState = {
      counter: 0,
    };

    expect(reducer(undefined, testAction)).toEqual(expectedState);
  });

  it('should handle INCREASE_COUNTER', () => {
    const testAction = {
      type: types.INCREASE_COUNTER,
    };
    const expextedState = {
      counter: 1,
    };

    expect(reducer(undefined, testAction)).toEqual(expextedState);
  });

  it('should handle DECREASE_COUNTER', () => {
    const testAction = {
      type: types.DECREASE_COUNTER,
    };
    const expextedState = {
      counter: -1,
    };

    expect(reducer(undefined, testAction)).toEqual(expextedState);
  });
});