import React, { Component } from 'react';

import Button from '../components/button';

class App extends Component {
  handleOnClick() {
    console.log('haha');
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleOnClick} text="+" />
        <Button onClick={this.handleOnClick} text="-" />
      </div>
    );
  }
}

export default App;