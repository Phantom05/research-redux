import React, { Component } from 'react';
import styled from 'styled-components';
import cx from 'classnames';
import { floatClear,color,font } from 'styles/utils';

const Styled={
  PlainBoardTemplate:styled.div`
  
    .board__title{
      padding:40px 0;
      color:${color.redTitle};
      ${font};
      font-size:35px;
      font-weight:bold;
    }
  `
}
class PlainBoardTemplate extends Component {
  render() {
    const {title,main} = this.props;
    return (
      <Styled.PlainBoardTemplate>
        <h1 className={cx('board__title')}>{title}</h1>
        <div>{main}</div>
      </Styled.PlainBoardTemplate>
    );
  }
}

export default PlainBoardTemplate;