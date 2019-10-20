import React, { Component } from 'react';
import styled from 'styled-components';
const Styled ={
  ProgressBar:styled.div`
    height:4px;
    background:red;
    width:${props=> props.width}%;
  `
}
class ProgressBar extends Component {
  state={
    percentage:10
  }

  render() {
    return (
      <Styled.ProgressBar width={this.state.percentage}>
        
      </Styled.ProgressBar>
    );
  }
}

export default ProgressBar;