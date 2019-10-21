import React, { Component } from 'react';
import styled from 'styled-components';

const Styled = {
  Counter:styled.div`
  .title{
    font-weight:bold;
  }
  `,
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
      getPost,
      getUser
    } = this.props;

    let resultData = data && JSON.parse(data).map(
      list=>(
      <div key={list.id}>
        {list.name && list.name}
        <div className="title">{list.title}</div>
        <div>{list.body}</div>
      </div>
      ));
    return (
      <Styled.Counter>
        {error? 'Error'
          : (
            <div>
              <div>{number}</div>
              <div>
                <Styled.Button onClick={increment}>+</Styled.Button>
                <Styled.Button onClick={decrement}>-</Styled.Button> <br/>
                <Styled.Button onClick={() => getUser(number)}>getUser</Styled.Button>
                <Styled.Button onClick={() => getPost(number)}>getPost</Styled.Button>
                <div>{data && data.length >0 ? resultData : 'No Data'}</div>
              </div> 
            </div>
          )}
      </Styled.Counter>
    );
  }
}

export default Counter;