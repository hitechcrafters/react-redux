import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import counter from './counter';
import user from './user';

const reducer = combineReducers({
  counter,
  user,
  form: formReducer,
});

export default reducer;