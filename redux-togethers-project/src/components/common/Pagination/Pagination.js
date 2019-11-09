import React, { Component } from 'react';
import styled from 'styled-components';
import cx from 'classnames';

const Styled = {
  Pagination: styled.div`
    margin-top:20px;
    .page__item{
      display:inline-block;
      padding:5px;
      border:1px solid #ececec;
      cursor: pointer;
      &.arrow{
        font-weight:bold;
          border:0;
        &:hover{
          background:transparent;
        }
      }
      &.active{
        font-weight:bold;
      }
      &:hover{
        background:#ececec;
      }
      &.disable{
        color:#ececec;
      }
    }
  `
}
class Pagination extends Component {
  render() {
    const { page, onClick } = this.props;
    let pagiNation = []
    {page && page.startPage &&
      pagiNation.push(
        <span
        className={cx('page__item arrow',{disable:page.startPage === 1})}
        key={page.startPage-1}
        onClick={()=>page.startPage !== 1 && onClick({page:page.startPage-1})}
        >
          &#60;	
        </span>
      )
    }


    for (let i = page.startPage; i <= page.endPage; i++) {
      pagiNation.push(
        <span
          className={cx('page__item', { active: page.page === i })}
          key={i}
          onClick={()=>onClick({page:i})}
        >
          {i}
        </span>
      )
    }
    if(page.endPage !== page.totalPage){
    }

    {page && page.startPage &&
      pagiNation.push(
        <span
        className={cx('page__item arrow',{disable:page.endPage === page.totalPage})}
        key={page.endPage+1}
        onClick={()=>page.endPage !== page.totalPage && onClick({page:page.endPage+1})}
        >
          &#62;
        </span>
      )}

    return (
      <Styled.Pagination>
        {pagiNation}
      </Styled.Pagination>
    );
  }
}

export default Pagination;