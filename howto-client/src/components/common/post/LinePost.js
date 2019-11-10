import React, { Component } from 'react';
import styled from 'styled-components';
import cx from 'classnames';
import { floatClear, font, color } from 'styles/utils';

const imageWidthSize = '300px';
const Styled = {
  LinePost: styled.div`
  border-top:2px solid ${color.borderGray2};
  padding:15px 0;
  ${floatClear};
  cursor: pointer;
  &:hover{
    transition:.3s;
    opacity:.6;
  }

  &:last-child{
    border-bottom:2px solid ${color.borderGray2};
  }
  .post__box{
    float:left;
    &.img{
      width:${imageWidthSize};
    }
    width:calc(100% - ${imageWidthSize});
  }
  .post__image_box{
    & img{
      width:100%;
      height:100%;
    }
  }
  .post__title{
    ${font};
    font-size:26px;
    font-weight:bold;
    margin-bottom:15px;
  }
  .post__subtitle{
    ${font};
    color:${color.graySubtitle};
    font-size:16px;
    margin-bottom:20px;
  }
  .post__author{
    ${font};
    color:${color.blackSubtitle};
    font-weight:600;
    margin-bottom:10px;
  }
  .post__date{
    ${font};
    color:${color.titleBlack};
    margin-bottom:10px;
  }
  .post__views_box{
    ${font};
    text-align:right;
  }
  `
}
class LinePost extends Component {
  render() {
    console.log(this.props);
    const {
      id,
      image,
      title,
      subTitle,
      date,
      author,
      views
    } = this.props;

    return (
      <Styled.LinePost>
        <div className={cx('post__box img')}>
          <div className={cx('post__image_box')}>{image}</div>
        </div>
        <div className={cx('post__box')}>
          <h3 className={cx('post__title')}>{title}</h3>
          <h4 className={cx('post__author')}>{author}</h4>
          <p className={cx('post__date')}>{date}</p>
          <h4 className={cx('post__subtitle')}>{subTitle}</h4>
          <div className={cx('post__views_box')}>
            views : <span>{views}</span>
          </div>
        </div>
      </Styled.LinePost>
    );
  }
}

export default LinePost;