import React, { Component } from 'react';
import { connect } from 'react-redux';

import { increaseCounter, decreaseCounter } from '../actions/action';
import App from '../components/app';


const mapStateToProps = (state) => ({
  counter: state.counter.counter,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch(increaseCounter),
    onDecrement: () => dispatch(decreaseCounter),
  };
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;