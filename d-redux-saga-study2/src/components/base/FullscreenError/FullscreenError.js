import React, { Component } from 'react';
import styled from 'styled-components';

const Styled ={
  FullscreenError:styled.div`
    position:fixed;
    left:0;
    top:0;
    width:100%;
    height:100%;
    z-index:6000;
    background:#fff;
    & span{
      position:absolute;
      left:50%;
      top:50%;
      transform:translate(-50%,-50%);
    }
  `
}

class FullscreenError extends Component {
  render() {
    return (
      <Styled.FullscreenError>
        <span>Opps, Error..</span>
      </Styled.FullscreenError>
    );
  }
}

export default FullscreenError;