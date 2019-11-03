import React, { Component } from 'react';
import styled from 'styled-components';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';
import { color, font, positionCenterCenter } from 'styles/utils';

const Styled = {
  PlainBoardCommonTemplate: styled.div`
    position: fixed;
    .notice__title{
      ${font};
      color:${color.white};
      font-size:17px;
      font-weight:bold;
      margin-bottom:10px;
    }
    .notice__content_box{

    }
    .notice__list{
      padding:5px;
      cursor: pointer;
      &:hover{
        text-decoration:underline;
      }
    }
    .write__box{
      position:fixed;
      right:40px;
      bottom:30px;
      width:50px;
      height:50px;
      border-radius:100%;
      background:${color.white};
      cursor: pointer;
      transition:.5s;
      font-size:20px;
      &:hover {
        box-shadow:8px 8px 8px rgba(0,0,0,1);
      }
      & > i{
        ${positionCenterCenter};
        color:${color.black};
      }
    }
  `
};
const noticeList = [
  {
    id: 0,
    body: `[안내] 11/4 임대인 전용 다매물 등록 서비스 오픈 및 게시판 개편 예정! [5]`
  },
  {
    id: 1,
    body: `[안내] 10/29 카페 이용정책 V3.0이 적용되었습니다. [8]`
  },
  {
    id: 2,
    body: `[안내] 커뮤니티 운영정책 V3.0 (2019.10.29) [13]`
  },
  {
    id: 3,
    body: `[이벤트마감] 설문조사 참여하고 스타벅스 기프티콘 받아가세요! [24]`
  },
  {
    id: 4,
    body: `[안내] 부동산 최초 블록체인 기반 전자계약! 이제 안전한 스마트직거래하세요! [8]`
  },
]
class PlainBoardCommonTemplate extends Component {
  render() {
    return (
      <Styled.PlainBoardCommonTemplate>
        <div>
          <h2 className={cx('notice__title')}>공지사항</h2>
          <div className={cx('notice__content_box')}>
            {noticeList.map(list => (
              <div className={cx('notice__list')} key={list.id}>{list.body}</div>
            ))}
          </div>

          <Link to="/study/write">
            <span className={cx('write__box')} >
              <Icon type="edit" />
            </span>
          </Link>
          < Link to="/study/list">리스트 보기</Link>
        </div>

      </Styled.PlainBoardCommonTemplate>
    );
  }
}

export default PlainBoardCommonTemplate;