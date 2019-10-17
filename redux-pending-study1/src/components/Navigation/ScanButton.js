import React, { Component } from 'react';
import styled from 'styled-components';

const Styled = {
  Button:styled.button`
    border:0;
    padding:5px 15px;
    border-radius:5px;
    margin:5px;
    cursor: pointer;
  `
}
class ScanButton extends Component {
  render() {
    const {onClick} = this.props;
    return (
      <div>
        <Styled.Button onClick={onClick}>SCAN</Styled.Button>
      </div>
    );
  }
}

export default ScanButton;