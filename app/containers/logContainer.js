import React, { Component } from 'react';

import LoginContainer from './LoginContainer';

class LogContainer extends Component {
  submit = values => {
    console.log(values);
    this.props.history.push('/dashboard');
  }

  render() {
    return (
      <div>
        <LoginContainer onSubmit={this.submit} />
      </div>
    )
  }
}

export default LogContainer;