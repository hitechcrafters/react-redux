import Enzyme, { shallow } from 'enzyme';
import React from 'react';
import CounterContainer from './CounterContainer';
import configureStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';
import { increaseCounter, decreaseCounter } from '../actions/counterActions';
import { INCREASE_COUNTER, DECREASE_COUNTER } from '../actions/counterTypes';

const mockStore = configureStore();
Enzyme.configure({ adapter: new Adapter() });

describe('Counter Container', () => {
  let wrapper, store;

  beforeEach(() => {
    store = mockStore({
      counter: 1,
    });
    wrapper = shallow(<CounterContainer store={store} />);

    store.dispatch = jest.fn();
  });

  it('Map state and dispatch to props', () => {
    expect(wrapper.props()).toEqual(expect.objectContaining({
      onIncrement: expect.any(Function),
      onDecrement: expect.any(Function),
    }));
    expect(store.getState().counter).toBe(1);
  });

  it('maps onIncrement to dispatch increment action', () => {
    store.dispatch(increaseCounter);
    expect(store.dispatch).toHaveBeenCalledWith({ type: INCREASE_COUNTER });
  });

  it('maps onDecrement to dispatch decrement action', () => {
    store.dispatch(decreaseCounter);
    expect(store.dispatch).toHaveBeenCalledWith({ type: DECREASE_COUNTER });
  });
});
