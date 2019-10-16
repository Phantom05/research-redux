import React, { Component } from 'react';
import styled from '@emotion/styled';

const Styled ={
  Button:styled.button`
    border:0;
    margin:0 3px;
    padding:5px 15px;
    border-radius:5px;
    cursor: pointer;
    &:hover{
      background: rgba(255,255,255,0.9);
    }
  `
}
class Counter extends Component {
  render() {
    const {number,increment,decrement}= this.props;
    return (
      <div>
        <div>Counter</div>
        <div>{number}</div>
        <Styled.Button onClick={increment}>+</Styled.Button>
        <Styled.Button onClick={decrement}>-</Styled.Button>
      </div>
    );
  }
}

export default Counter;