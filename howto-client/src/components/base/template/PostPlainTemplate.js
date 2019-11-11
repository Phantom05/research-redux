import React, { Component } from 'react';
import styled from 'styled-components';
import cx from 'classnames';
import {  font, color } from 'styles/utils';

const Styled={
  PostPlainTemplate:styled.div`
    .post__main_title{
      ${font};
      font-size:80px;
      font-weight:bold;
      padding:40px 0;
      margin-bottom:5px;
      font-family: 'Patua One', cursive;
      letter-spacing:5px;
    }
  `
}
class PostPlainTemplate extends Component {
  render() {
    const {title,children} = this.props;
    return (
      <Styled.PostPlainTemplate>
        <h2 className={cx('post__main_title')}>{title}</h2>
        {children && <div>{children}</div>}
      </Styled.PostPlainTemplate>
    );
  }
}

export default PostPlainTemplate;