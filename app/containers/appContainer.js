import React, { Component } from 'react';

import CounterContainer from './CounterContainer';
import UserListContainer from './UserListContainer';

const AppContainer = () => (
  <div>
    <CounterContainer />
    <UserListContainer />
  </div>
);

export default AppContainer;