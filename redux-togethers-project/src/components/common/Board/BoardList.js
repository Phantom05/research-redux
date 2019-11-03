import React, { Component } from 'react';
import styled from 'styled-components';
import cx from 'classnames';
import {color,floatClear} from 'styles/utils';

const list =[];
Array(210).fill(true).map((x,idx)=>{
  list.push({
    id:idx,
    title:`Title ${idx}`,
    author:`Admin`,
    view:Math.ceil(Math.random()*100),
    create:"2019-11-03"
  })
});

const Styled ={
  BoardList:styled.div`
    .board__row{
      ${floatClear};
      border:1px solid ${color.borderGray};
      &.th{
        background:${color.bgGray};
        font-weight:bold;
      }
    }
    .board__item{
      float:left;
      padding:10px 5px;
      cursor: pointer;
      width:calc(100% / 5);
      &:hover{
        text-decoration:underline;
      }
    }
  `
}
class BoardList extends Component {
  render() {
    return (
      <Styled.BoardList>

          <div key={list.id} className={cx('board__row th')}>
            <div className={cx('board__item')}>#</div>
            <div className={cx('board__item')}>제목</div>
            <div className={cx('board__item')}>작성자</div>
            <div className={cx('board__item')}>작성일</div>
            <div className={cx('board__item')}>조회</div>
          </div>

        {list.map(list=>(
          <div key={list.id} className={cx('board__row')}>
            <div className={cx('board__item')}>{list.id}</div>
            <div className={cx('board__item')}>{list.title}</div>
            <div className={cx('board__item')}>{list.author}</div>
            <div className={cx('board__item')}>{list.create}</div>
            <div className={cx('board__item')}>{list.view}</div>
          </div>
        ))}

        
      </Styled.BoardList>
    );
  }
}

export default BoardList;