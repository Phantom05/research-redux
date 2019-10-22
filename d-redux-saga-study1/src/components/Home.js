import React, { Component } from 'react';
import styled from 'styled-components';

const Stlyed = {
  Home:styled.div`
  button{
    padding:5px 15px;
    cursor: pointer;
    margin:5px;
    border-radius:5px;
    border:0;
    transition:.3s;
    &:hover{
      background:#333;
      color:#fff;
    }
  }
  `
}

class Home extends Component {
  render() {
    const {onClick,data} = this.props;
    return (
      <Stlyed.Home>
        <button onClick={onClick}>Get Home</button>
        <p>{data && JSON.stringify(data)}</p>
      </Stlyed.Home>
    );
  }
}

export default Home;