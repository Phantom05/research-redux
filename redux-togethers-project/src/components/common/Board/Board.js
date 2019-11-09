import React, { Component } from 'react';
import styled from 'styled-components';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import { Pagination } from 'components/common/Pagination';
import _ from 'lodash';

const Styled = {
  Board: styled.div`
    /* width:700px; */
    border:1px solid red;
    margin-top:500px;
    padding:50px 0;
    .board__row{
      &:after{
        display:block;
        content:'';
        clear: both;
      }
      .board__item{
        float:left;
        ${props => `width:calc(100% / ${props.itemLength})`}
      }
      &.th{
        background:#ececec;
        font-weight:bold;
        padding:5px;
      }
    }
    .pagination__box{
      margin-top:20px;
      text-align:center;
      .pagination__item{
        border:1px solid #333;
        cursor: pointer;
        padding:5px;
      }
    }
    .list__row{
      &:after{
        display:block;
        content:'';
        clear: both;
      }
      padding:5px;
    }
    .pagination__item{
      &.active{
        font-weight:bold;
      }
    }
    .list__row{
      border-bottom:1px solid #ececec;
    }
  `,
  BoardList: styled.div`
    margin-top:30px;
    border:1px solid blue;
  `,
  Pagination: styled.div`
    text-align:center;
  `
}
class Board extends Component {
  render() {
    const {
      page,
      board: boardInfo,
      onClick,
      numbering,
      labelRowClassname,
      labelItemClassname,
      listRowClassName,
      listItemClassName
    } = this.props;

    let itemLength = boardInfo.list && boardInfo.list[0] && Object.keys(boardInfo.list[0]).length;
    if(numbering){
      itemLength++;
    }
    return (
      <Styled.Board itemLength={itemLength}>
        BOARD

        <Styled.BoardList>
          {boardInfo.label && boardInfo.label.length > 0 &&
            <div className={cx('board__row th', labelRowClassname)} >
              {numbering && <div className={cx('board__item', labelItemClassname)} key={'number'}>#</div>}

              {boardInfo.label.map((list, idx) => (
                <div className={cx('board__item', labelItemClassname)} key={idx}>{list}</div>
              ))}
            </div>
          }

          {boardInfo.list &&boardInfo.list.length >0 &&
            <div className={cx('board__row')}>
              {boardInfo.list.map((list, keyIdx) => {
                return <div key={keyIdx} className={cx('list__row', listRowClassName)}>
                  {/* numberting */}
                  {numbering && <div className={cx('board__item', listItemClassName)} key={'number'}>{(keyIdx+1) + (page.page-1 )* page.page_rows_size}</div>}

                  {Object.entries(list).map((valueInfo, idx) => {
                    let value = valueInfo[1];
                    if (_.isPlainObject(value)) {
                      if (_.hasIn(value, 'link')) {
                        return (
                          <div className={cx('board__item', listItemClassName)} key={idx}>
                            <Link to={value.link} >{value.value} </Link>
                          </div>
                        )
                      } else {
                        return <div className={cx('board__item', listItemClassName)} key={idx}> {value.value} </div>
                      }
                    }
                    return <div className={cx('board__item', listItemClassName)} key={idx}> {value} </div>
                  })}

                </div>
              })}
            </div>
          }

        </Styled.BoardList>

        <Styled.Pagination>
          <Pagination
            page={page}
            onClick={onClick}
          />
        </Styled.Pagination>

      </Styled.Board>
    );
  }
}

export default Board;

Board.defaultProps={
  board:{
    label:[],
    list:[]
  },
  
}