import React, { Component } from 'react';
import styled from 'styled-components';
import { color, font, positionWidthCenter } from 'styles/utils';
import { NavLink } from 'react-router-dom';

import cx from 'classnames';

const Styled = {
  Navigation: styled.nav`
    background:white;
    width:200px;
    border-right:1px solid ${color.borderGray2};
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
      width:100%;
      text-align:center;
      a{
        ${font};
        font-weight:bold;
        font-size:20px;
        text-decoration:none;
        color:${color.black};
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
          <div>
            <div className={cx('nav__list')}><NavLink to="" >요리 / 레시피</NavLink></div>
            <div className={cx('nav__list')}><NavLink to="" >인테리어 / 수리</NavLink ></div>
            <div className={cx('nav__list')}><NavLink to="" >주말 / 휴가</NavLink></div>
            <div className={cx('nav__list')}><NavLink to="" >여행 / 일상</NavLink></div>
            <div className={cx('nav__list')}><NavLink to="" >패션 / 뷰티</NavLink></div>
            <div className={cx('nav__list')}><NavLink to="" >공구 / 작업</NavLink></div>
          </div>
        </div>
      </Styled.Navigation>
    );
  }
}

export default MainNavigation;