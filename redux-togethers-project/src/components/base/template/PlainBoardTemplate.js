import React, { Component } from 'react';
import styled from 'styled-components';
import cx from 'classnames';
import { color, font } from 'styles/utils';
const Styled = {
  PlainBoardTemplate: styled.div`
    .board__title{
      padding-top:40px;
      padding-bottom:15px;
      color:${color.redTitle};
      ${font};
      font-size:35px;
      font-weight:bold;
    }
    .board__subtitle{
      padding-bottom:40px;
      ${font};
      color:${color.graySubtitle};
      font-size:15px;
    }
  `
}
class PlainBoardTemplate extends Component {
  render() {
    const { title, children, type } = this.props;

    return (
      <Styled.PlainBoardTemplate>
        <h1 className={cx('board__title')}>{title}</h1>
        <h2 className={cx('board__subtitle')}>{title} {type} 게시판입니다.</h2>
        <div className={cx('board__main')}>{children}</div>
      </Styled.PlainBoardTemplate>
    );
  }
}

export default PlainBoardTemplate;