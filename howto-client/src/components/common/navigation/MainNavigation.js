import React, { Component } from 'react';
import styled from 'styled-components';
import { color, font } from 'styles/utils';
import { NavLink ,Link} from 'react-router-dom';

import cx from 'classnames';

const Styled = {
  Navigation: styled.nav`
    position:relative;
    background:white;
    width:240px;
    /* border-right:1px solid ${color.borderGray2}; */
    height:100%;
    .navigation{
      position:absolute;
      left:0;
      top:0;
      width:100%;
      height:100%;
    }
    .navigation__title{
      ${font};
      padding:50px 0;
      margin-bottom:70px;
      width:100%;
      text-align:center;
      a{
        ${font};
        font-weight:bold;
        font-size:30px;
        text-decoration:none;
        color:${color.black};
      }
    }
    .nav__list_an{
      display:block;
      ${font};
      font-weight:bold;
      font-size:18px;
      text-decoration:none;
      color:${color.black};
      margin-bottom:10px;
      color:${color.graySubtitle};
      &.active{
        color:green
      }
    }
    .nav__list_box{
      padding:0 30px;
    }
    .nav__info_box{
      position:absolute;
      width:100%;
      padding:0 30px;
      bottom:50px;
      left:0;
    }
    .nav__info_list_an{
      display:block;
      ${font};
      color:${color.greenText};
      font-weight:bold;
      margin-bottom:5px;
      text-decoration:none;
      &:hover{
        text-decoration:underline;
      }
    }

  `
}
class MainNavigation extends Component {
  render() {
    return (
      <Styled.Navigation>
        <div className={cx('navigation')}>
          <h1 className={cx('navigation__title')}>
            <NavLink to="/">MOYA</NavLink>
          </h1>
          <div className={cx('nav__list_box')}>
            <div className={cx('nav__list')}>
              <NavLink exact to="/" className={cx('nav__list_an')}>홈 2020</NavLink>
            </div>
            <div className={cx('nav__list')}>
              <NavLink to="/cook" className={cx('nav__list_an')}>요리 / 레시피</NavLink>
            </div>
            <div className={cx('nav__list')}>
              <NavLink to="/interior" className={cx('nav__list_an')}>인테리어 / 수리</NavLink >
            </div>
            <div className={cx('nav__list')}>
              <NavLink to="/holiday" className={cx('nav__list_an')}>주말 / 휴가</NavLink>
            </div>
            {/* <div className={cx('nav__list')}>
              <NavLink to="/in" className={cx('nav__list_an')}>여행 / 일상</NavLink>
            </div>
            <div className={cx('nav__list')}>
              <NavLink to="/in" className={cx('nav__list_an')}>패션 / 뷰티</NavLink>
            </div>
            <div className={cx('nav__list')}>
              <NavLink to="/in" className={cx('nav__list_an')}>공구 / 작업</NavLink>
            </div> */}
          </div>
          <div className={cx('nav__info_box')}>
            <p className={cx('nav__info_list')}>
              <Link to="/" className={cx('nav__info_list_an')} >Facebook</Link>
            </p>
            <p className={cx('nav__info_list')}>
              <Link to="/" className={cx('nav__info_list_an')} >Instagram</Link>
            </p>
            <p className={cx('nav__info_list')}>
              <Link to="/" className={cx('nav__info_list_an')} >Address</Link>
            </p>
            <p className={cx('nav__info_list')}>
              <Link to="/" className={cx('nav__info_list_an')} >Contact</Link>
            </p>
            <p className={cx('nav__info_list')}>
              <Link to="/" className={cx('nav__info_list_an')} >Privacy</Link>
            </p>
          </div>
        </div>
      </Styled.Navigation>
    );
  }
}

export default MainNavigation;