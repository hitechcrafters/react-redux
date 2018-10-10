import React, { Component } from 'react';

import CounterContainer from './CounterContainer';
import UserListContainer from './UserListContainer';
import FormContainer from './FormContainer';

class AppContainer extends Component {
  submit = values => {
    console.log(values);
    this.props.history.push('/test');
  }

  render() {
    return (
      <div>
        <CounterContainer />
        <UserListContainer />
        <FormContainer onSubmit={this.submit} />
      </div>
    )
  }
}

export default AppContainer;