import React, { Component } from 'react';
import styled from 'styled-components';

const Styled ={
  Button:styled.div`
    border:0;
    border-radius:5px;
    padding:5px 15px;
    background:${props => props.theme };
    
    color:#fff;
  `
}
class TestButton extends Component {
  render() {
    const {theme,text} = this.props;
    console.log(theme);
    return (
      <div>
        <Styled.Button theme={theme}>{text}</Styled.Button>
          
      </div>
    );
  }
}

export default TestButton;