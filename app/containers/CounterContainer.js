import React, { Component } from 'react';
import { connect } from 'react-redux';

import { increaseCounter, decreaseCounter } from '../actions/counterActions';
import Counter from '../components/counter';


const mapStateToProps = (state) => ({
  counter: state.counter.counter,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch(increaseCounter),
    onDecrement: () => dispatch(decreaseCounter),
  };
};

const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default CounterContainer;