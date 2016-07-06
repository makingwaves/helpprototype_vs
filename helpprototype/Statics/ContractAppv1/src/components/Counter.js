import React, { Component, PropTypes } from 'react';
import { increment, decrement } from './../redux/modules/counter';

export default class Counter extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  static propTypes = {
    counter: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  handleIncrement() {
    this.props.dispatch(increment());
  }

  handleDecrement() {
    this.props.dispatch(decrement());
  }

  render() {
    const { dispatch } = this.props;
    console.log(dispatch);
    return (
      <div className="counter-container">
        <div className="counter-num-label">{this.props.counter}</div>
        {/* Below, the even or odd statement is simply used to demonstrate how one could
        easily use a ternary operator to conditionally show an 'even' or 'odd' string
        based on the counter's value on state. */}
        <div className="counter-even-label">{this.props.counter % 2 === 0 ? 'even' : 'odd'}</div>
        <br />
        <div className="counter-buttons">
          <button onClick={this.handleDecrement}>-</button>
          <button onClick={this.handleIncrement}>+</button>
        </div>
      </div>
    );
  }
}
