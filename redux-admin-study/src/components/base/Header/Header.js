import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Styled ={
  Header:styled.div`
  position:absolute;
  left:0;
  top:0;
  width:100%;
  height:100%;
  background: rgb(224, 224, 224);
  & > button{
    cursor: pointer;
  }
  `
}
class Header extends Component {
  render() {
    const {isAutheticated,handleLogout} = this.props;
    console.log(isAutheticated,'header isAutheticated');
    return (
      <Styled.Header>
        Header
        {isAutheticated 
          ? <button onClick={handleLogout}>Logout</button>
          :<Link to="/login">Login</Link>}
        
      </Styled.Header>
    );
  }
}

export default Header;