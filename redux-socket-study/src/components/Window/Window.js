import React, { Component } from 'react';
import styled from 'styled-components';

import exitImage from 'static/images/window/exit.svg';
import miniImage from 'static/images/window/mini.svg';
import maxImage from 'static/images/window/max.svg';
import logoImage from 'static/images/window/logo.jpg';

const Styled = {
  Window: styled.div`
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height: 40px;
    background:black;
    color:#fff;
    & .center__value{
      position:absolute;
      left:50%;
      top:50%;
      transform:translate(-50%,-50%);
      font-size:14px;
    }
    & img{
      width:100%;
    }
    & .logo__box{
      position: absolute;
      top:0;
      left:20px;
      & > span{
        display:inline-block;
        padding-top:2px;
        width:35px;
        height: 40px;
      }
    }
    & .controll__box{
        position: absolute;
        top:0;
        right:0;
        & > span{
        cursor: pointer;
        display:inline-block;
        padding:8px 8px;
      }
    }

  `
}
class Window extends Component {
  render() {
    const { onClick,value } = this.props;
    return (
      <Styled.Window>
        <span className="logo__box">
          <span><img src={logoImage} alt="logo" /></span>
        </span>
        <span className="center__value">
          {value}
        </span>
        <span className="controll__box">
          <span onClick={() => onClick('minimize')}><img src={miniImage} alt="miniImage" /></span>
          <span onClick={() => onClick('maxmize')}><img src={maxImage} alt="maxImage" /></span>
          <span onClick={() => onClick('exit')}><img src={exitImage} alt="exitImage" /></span>
        </span>
      </Styled.Window>
    );
  }
}

export default Window;