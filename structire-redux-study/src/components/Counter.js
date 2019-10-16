import React, { Component } from 'react';

class Counter extends Component {
  render() {
    const {number, increment, decrement} = this.props;
    return (
      <div>
        <h1>{number}</h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    );
  }
}

export default Counter;