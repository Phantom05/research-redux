import React, { Component } from 'react';
import styled from 'styled-components';

const Styled ={
  FullscreenLoader:styled.div`
    position:fixed;
    width:100%;
    height:100%;
    left:0;
    top:0;
    z-index:500000;
    background:white;
    & > span{
      position:absolute;
      left:50%;
      top:50%;
      transform:translate(-50%,-50%);
      &:after{
        position:absolute;
        content:'.';
        animation: dots 3s steps(5, end) infinite;
      }
    }
    @keyframes dots {
    0%, 20%{content: '.'}
    40%{content: '..'}
    60%{content: '...'}
    90%, 100%{content: ''}
    }
  `
}
class FullscreenLoader extends Component {
  render() {
    const {progress} = this.props;
    return (
      <Styled.FullscreenLoader>
        {progress}
        <span>
          Loading
        </span>
      </Styled.FullscreenLoader>
    );
  }
}

export default FullscreenLoader;