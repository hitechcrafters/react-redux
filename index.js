import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect'

import AppContainer from './app/containers/appContainer';
import LogContainer from './app/containers/logContainer';
import TestContainer from './app/containers/FormTestContainer';
import reducer from './app/reducers/reducer';
import FormTestContainer from './app/containers/FormTestContainer';

const middleware = applyMiddleware(createLogger());
const store = createStore(reducer, middleware);

const userIsAuthenticated = connectedRouterRedirect({
  redirectPath: '/',
  authenticatedSelector: state => state.form.login.values && state.form.login.values.login === state.user.credentials.login
    && state.form.login.values.pass === state.user.credentials.pass,
  wrapperDisplayName: 'UserIsAuthenticated'
})

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Fragment>
        <Route exact path="/" component={LogContainer} />
        <Route exact path="/dashboard" component={userIsAuthenticated(AppContainer)} />
        <Route exact path="/test" component={userIsAuthenticated(FormTestContainer)} />
      </Fragment>
    </Router>
  </Provider>,
  document.getElementById('app')
);
