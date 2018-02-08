import React, { Component } from 'react';

import Button from '../components/button';

class App extends Component {
  handleOnClickIncrease() {
    console.log('haha+');
  }

  handleOnClickDecrease() {
    console.log('haha-');
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleOnClickIncrease} text="+" />
        <Button onClick={this.handleOnClickDecrease} text="-" />
      </div>
    );
  }
}

export default App;