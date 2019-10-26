import React, { Component } from 'react';
import styled from 'styled-components';

const Styled ={
  Header:styled.div`
  position:absolute;
  left:0;
  top:0;
  width:100%;
  height:100%;
  background: rgb(224, 224, 224);
  `
}
class Header extends Component {
  render() {
    const {handleLogout} = this.props;
    return (
      <Styled.Header>
        Header

        <button onClick={handleLogout}>Logout</button>
      </Styled.Header>
    );
  }
}

export default Header;