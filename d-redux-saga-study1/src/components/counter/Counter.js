import React, { Component } from 'react';
import styled from 'styled-components';

const Styled = {
  Button: styled.button`
  display:inline-block;
    border:0;
    margin:5px;
    padding:5px 20px;
    cursor: pointer;
  `
}

class Counter extends Component {
  render() {
    const {
      number,
      data,
      error,
      increment,
      decrement,
      getPost
    } = this.props;
    return (
      <div>
        {error
          ? 'Error'
          : (
            <div>
              <div>{number}</div>
              <div>
                <Styled.Button onClick={increment}>+</Styled.Button>
                <Styled.Button onClick={decrement}>-</Styled.Button>
                <div>
                </div>
                <div>
                  <Styled.Button onClick={() => getPost(number)}>getPost</Styled.Button>
                </div>
                {data ? data : 'none'}
              </div>
            </div>
          )}


      </div>
    );
  }
}

export default Counter;