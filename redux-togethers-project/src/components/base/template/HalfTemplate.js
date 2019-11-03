import React, { Component } from 'react';
import styled from 'styled-components';
import cx from 'classnames';
import { floatClear,color } from 'styles/utils';

const Styled = {
  HalfTemplate: styled.div`
  position:relative;
    ${floatClear};
    .hlaf__box{
      position:relative;
      float:left;
      min-height:100vh;
      height:100%;
      padding: 20px;
      &.left{
        width:65%;
      }
      &.right{
        position:absolute;
        right:0;
        height:100%;
        width:35%;
        background:${color.bgBrown};
        color:${color.white}
      }
    }
    .controll__wiper{
      position:absolute;
      right:0;
      width:4px;
      height:100%;
      top:0;
      background:red;
      cursor: col-resize;
    }

  `
}


class HalfTemplate extends Component {
  
  render() {
    const { left, right,header } = this.props;
    return (
      <Styled.HalfTemplate>
        {header}
        <div className={cx('hlaf__box left')} >{left} </div>
        <div className={cx('hlaf__box right')} >{right} </div>
      </Styled.HalfTemplate>
    );
  }
}

export default HalfTemplate;