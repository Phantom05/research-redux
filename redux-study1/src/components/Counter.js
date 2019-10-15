
import React, { Component } from 'react';

class Counter extends Component {
  render() {
    const {
      number,
      text,
      requestTest,
      increment,
      decrement,
      incrementAsync} = this.props;
    return (
      <div>
        <div>{text}</div>
        {/* <button onClick={requestTest}>TEST AXIOS</button> */}
        <h1>{number}</h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <hr/>
        {/* <button onClick={incrementAsync}>+ Async</button> */}
      </div>
    );
  }
}

export default Counter;