import React, { Component } from 'react';
import styled from 'styled-components';

import exitImage from 'static/images/window/exit_default.svg';
import logoImage from 'static/images/window/logo.svg';
import maximizeImage from 'static/images/window/maximize_default.svg';
import minimizeImage from 'static/images/window/minimize_default.svg';

const Styled = {
  Logo: styled.span`
    position:absolute;
    top:50%;
    transform:translateY(-50%);
    left:20px;
    & > span{
      padding:10px;
    }
  `,
  ConBox: styled.div`
      position:absolute;
    top:50%;
    transform:translateY(-50%);
    right:0px;
    & > span{
      padding:10px;
      float:left;
      cursor: pointer;
      &:hover{
        background:rgba(255,255,255,.2);
      }
    }
  `,
  TestButton: styled.div`
    cursor: pointer;
    position:absolute;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    border:1px solid #ececec;
    border-radius:5px;
    padding:5px;
    &:hover{
      background:rgba(255,255,255,.4);
    }
  `
}

class Navigation extends Component {
  render() {
    const { 
      clickLogo,
      clickMinimize,
      clickMaximize,
      clickExit } = this.props;
    return (
      <div>
        <Styled.Logo>
          <span onClick={clickLogo}><img src={logoImage} alt="Logo"/></span>
        </Styled.Logo>
        <Styled.ConBox>
          <span onClick={clickMinimize}><img src={minimizeImage} alt="minimize"/></span>
          <span onClick={clickMaximize}><img src={maximizeImage} alt="maxmize"/></span>
          <span onClick={clickExit}><img src={exitImage} alt="exit"/></span>
        </Styled.ConBox>
      </div>
    );
  }
}

export default Navigation;