import React, { Component } from 'react';
import styled from 'styled-components';
import cx from 'classnames';
import { floatClear, font, color } from 'styles/utils';

const Styled = {
  TopPost: styled.div`
  ${floatClear};
  padding-bottom:30px;

  .topPost__title{
    ${font};
    font-size:42px;
    font-weight:bold;
    margin-bottom:20px;
  }
  .topPost__author{
    ${font};
    font-weight:bold;
    font-size:16px;
    margin-bottom:15px;
    color:${color.blackSubtitle};
  }
  .topPost__box{
    float:left;
    cursor: pointer;
    &:first-child{
      width:70%;
      padding-right:30px;
      transition:.3s;
      &:hover{
        opacity:.6;
      }
    }
    &:last-child{
      width:30%;
    }
  }
    .image{
      width:100%;
    }
  `,
  MiniPost: styled.div`
  border-bottom:1px solid ${color.borderGray};
  margin-bottom:20px;
  padding-bottom:15px;
  cursor: pointer;
  transition:.3s;
  &:hover{
    opacity:.6;
  }
  &:last-child{
    border:0;
  }
    .MiniPost__title{
      ${font};
      font-size:20px;
      font-weight:bold;
      margin-bottom:15px;
    }
    .MiniPost__author{
      ${font};
      font-size:16px;
      font-weight:bold;
      color:${color.blackSubtitle};
    }
  `
}

class MiniPost extends Component {
  render() {
    const { author, title } = this.props;
    return (
      <Styled.MiniPost className={cx()}>
        <div className={cx('MiniPost__title')}>{title}</div>
        <div className={cx('MiniPost__author')}>{author}</div>
      </Styled.MiniPost>
    )
  }
}
class TopPost extends Component {
  render() {
    return (
      <Styled.TopPost>
        <div className={cx('topPost__box')}>
          <h3 className={cx('topPost__title')}>Week In Review: Airbnb is just the beginning</h3>
          <p className={cx('topPost__author')}>Lucas Matney</p>
          <div className={cx('image__box')}>
            <img src="https://techcrunch.com/wp-content/uploads/2016/10/993e0799c01f4e57a06ff9db4c8f54f2.jpeg?w=850&h=492&crop=1" alt="ff" className={cx('image')} />
          </div>
        </div>
        <div className={cx('topPost__box')}>
          <MiniPost
            title={`Original Content podcast: Apple’s star-studded ‘Morning Show’ gets off to a bumpy-but-promising start`}
            author={'Sarah Perez'}
          />
          <MiniPost
            title={`Original Content podcast: Apple’s star-studded ‘Morning Show’ gets off to a bumpy-but-promising start`}
            author={'Sarah Perez'}
          />
          <MiniPost
            title={`Original Content podcast: Apple’s star-studded ‘Morning Show’ gets off to a bumpy-but-promising start`}
            author={'Sarah Perez'}
          />
          <MiniPost
            title={`Original Content podcast: Apple’s star-studded ‘Morning Show’ gets off to a bumpy-but-promising start`}
            author={'Sarah Perez'}
          />
        </div>
      </Styled.TopPost>
    );
  }
}

export default TopPost;