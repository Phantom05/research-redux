import React, { Component } from 'react';
import styled from 'styled-components';

const Styled = {
  Button:styled.button`
    border-radius:5px;
    border:0;
    padding:5px 20px;
    cursor: pointer;
    margin:0 5px;
  `
}
class Counter extends Component {
  render() {
    const {number,increment,decrement} = this.props;
    return (
      <div>
          <h2>{number}</h2>
          <Styled.Button onClick={increment}>+</Styled.Button>
          <Styled.Button onClick={decrement}>-</Styled.Button>
      </div>
    );
  }
}

export default Counter;