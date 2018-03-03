import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import AppContainer from './app/containers/AppContainer';
import reducer from './app/reducers/reducer';

const middleware = applyMiddleware(createLogger());
const store = createStore(reducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('app')
);
