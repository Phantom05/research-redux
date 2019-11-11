import React, { PureComponent } from 'react';
import styled,{css} from 'styled-components';
import cx from 'classnames';
import { floatClear, font, color } from 'styles/utils';

const imageWidthSize = '300px';
const priceImageWidthSIze = '600px';
const Styled = {
  LinePost: styled.div`
  border-top:2px solid ${color.borderGray2};
  padding:30px 0;
  ${floatClear};
  cursor: pointer;
  &:hover{
    transition:.3s;
    opacity:.6;
  }

  &:last-child{
    /* border-bottom:2px solid ${color.borderGray2}; */
    border-bottom:0;
  }
  .post__box{
    float:left;
    &:last-child{
      padding-left:30px;
    }
    &.img{
      width:${imageWidthSize};
    }
    width:calc(100% - ${imageWidthSize});
    ${props=>props.price && css`
      width:calc(100% - ${priceImageWidthSIze});
      &.img{
        width:${priceImageWidthSIze};
      }
    `}
  }
  .post__image_box{
    & img{
      width:100%;
      height:180px;
    }
    ${props=> props.price && css`
      img{
        height:350px;
      }
    `}
  }
  .post__title{
    ${font};
    font-size:26px;
    font-weight:bold;
    margin-bottom:30px;
  }
  .post__subtitle{
    ${font};
    color:${color.graySubtitle};
    font-size:15px;
    margin-bottom:20px;
    line-height:18px;
  }
  .post__author{
    ${font};
    color:${color.blackSubtitle};
    font-weight:600;
    margin-bottom:10px;
    font-size:16px;
  }
  .post__date{
    ${font};
    color:${color.titleBlack};
    margin-bottom:10px;
    margin-left:10px;
  }
  .post__views_box{
    ${font};
    text-align:right;
  }
  `
}
class LinePost extends PureComponent {
  render() {
    const {
      // id,
      image,
      title,
      subTitle,
      date,
      author,
      views,
      price
    } = this.props;
    return (
      <Styled.LinePost {...this.props}>

        <div className={cx('post__box')}>
          <h3 className={cx('post__title')}>{title} </h3>
          <h4 className={cx('post__author')}>{author} <span className="post__date">{date}</span></h4>
          <h4 className={cx('post__subtitle')}>{subTitle}</h4>
          <div className={cx('post__views_box')}>
            views : <span>{views}</span> 
          </div>
        </div>
        <div className={cx('post__box img')}>
          <div className={cx('post__image_box')}>{image}</div>
        </div>
      </Styled.LinePost>
    );
  }
}

export default LinePost;