import * as actions from './counterActions';
import * as types from './counterTypes';

describe('actions', () => {
  it('should create an action increase counter', () => {
    const expectedAction = {
      type: types.INCREASE_COUNTER,
    };

    expect(actions.increaseCounter).toEqual(expectedAction);
  });

  it('should create an action decrement counter', () => {
    const expectedAction = {
      type: types.DECREASE_COUNTER,
    };

    expect(actions.decreaseCounter).toEqual(expectedAction);
  });
});
