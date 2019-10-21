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
    return (
      <Styled.Header>
        Header
      </Styled.Header>
    );
  }
}

export default Header;