import { combineReducers } from 'redux'

import { INCREASE_COUNTER, DECREASE_COUNTER } from "../actions/action";

const initialState = {
  counter: 0,
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_COUNTER:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREASE_COUNTER:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
}

const counterApp = combineReducers({
  counter,
});

export default counterApp;