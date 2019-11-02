import React, { Component } from 'react';
import styled from 'styled-components';
import cx from 'classnames';
import { floatClear,color } from 'styles/utils';

const Styled = {
  HalfTemplate: styled.div`
    ${floatClear};
    .hlaf__box{
      position:relative;
      float:left;
      height:100vh;
      padding: 20px;
      &.left{
        width:65%;
      }
      &.right{
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
    const { left, right } = this.props;
    return (
      <Styled.HalfTemplate>
        <div className={cx('hlaf__box left')} >{left} </div>
        <div className={cx('hlaf__box right')} >{right} </div>
      </Styled.HalfTemplate>
    );
  }
}

export default HalfTemplate;