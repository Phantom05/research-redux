import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import cx from 'classnames';
import { Icon } from 'antd';
import _ from 'lodash';
import {
  font,
  color,
  smoothBottomLine,
  floatClear
} from 'styles/utils';


const Styled = {
  Header: styled.div`
  position:relative;
  height:100vh;
  background: ${color.bgGray};
  overflow:auto;
  padding:0 10px;
  padding-top:20px;
  & > button{
    cursor: pointer;
  }
  .logo{
    color:${color.titleBlack};
    text-align:center;
    margin-bottom:15px;
    font-weight:bold;
    & a{
      position:relative;
      color:${color.titleBlack};
      ${props => props.isHome && css`
      &:after{
        content:"";
        display:block;
        width:4px;
        height:4px;
        background:${color.orange};
        border-radius:100%;
        position:absolute;
        right:-5px;
        top:2px;
        animation: dot 4s infinite alternate;
        @keyframes dot {
          0%{
            opacity:0;
          }
          50%{
            opacity:1;
          }
          100%{
            opacity:1
          }
        }
      }
      `};

    }
  }
  .auth__box{
    ${font};
    text-align:center;
  }
  .login__icon{
    position:relative;
    display:inline-block;
    border:1px solid ${color.titleBlack};
    color:${color.titleBlack};
    ${font}
    border-radius:100%;
    padding:5px;
    cursor: pointer;
    font-size:15px;
    transition:.5s;
    ${smoothBottomLine()};

  }
  .header__list_title{
    ${font}
    font-size:16px;
    font-weight:bold;
    color:${color.titleBlack};
  }
  .menu__controll_box{
    margin-top:50px;
  }
  .header__list_content{
    
  }
  .header__list_box{
    padding-top:5px;
    padding-bottom:30px;
  }
  .header__list_link{
    display:block;
    padding-left:10px;
    padding-top:10px;
    color:${color.black};
    ${font};
    font-size:15px;
    &:hover span{
      text-decoration:underline;
    }
  }
  .header__category_box{
    ${floatClear};
    border:1px solid ${color.borderGray};
    background:${color.white};
    border-radius:5px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 1px;
    margin-top:20px;
    .category__box{
      ${props => `width:calc(100% /  ${props.categoryList.length})`};
      float:left;
      text-align:center;
      padding:8px 0;
      ${font};
      font-weight:bold;
      cursor: pointer;
      color:${color.titleBlack};
      &.active{
        background:${color.red};
        color:${color.white};
      }
    }
  }
  `
}
class Header extends Component {

  render() {
    const {
      isAutheticated,
      handleLogout,
      onClick,
      isHome,
      menuList
    } = this.props;
    const categoryList = [

      {
        id: 'study',
        name: "스터디"
      },
      {
        id: "exercise",
        name: "운동"
      },
      {
        id: "storyTalk",
        name: "토크"
      },
    ]

    let menuInfo = _.size(menuList) !== 0 && _.reduce(menuList, (result, values,keyName) => {
      return result.concat({[keyName]:values})
    },[]);

    return (
      <Styled.Header categoryList={categoryList} isHome={isHome}>
        <h2
          className={cx('logo')}
          onClick={() => onClick('home')}>
          <Link to="/">TOGETHERS</Link>
        </h2>

        <div className={cx('auth__box')}>
          {isAutheticated
            ? <button onClick={handleLogout}>Logout</button>
            : <div className={cx('auth')}>
              <Link to="/login" className={cx('login__icon')}>
                <Icon type="user" />
                <span className={cx('login__icon_line')}></span>
              </Link>
            </div>}
        </div>

        <div className={cx('header__category_box')}>
          {categoryList.map(info => (
            <NavLink
              to={info.id}
              key={info.id}
              className={cx('category__box')}
              onClick={() => onClick(info.id)}>{info.name}</NavLink>
          ))}
        </div>

        <div className={cx('menu__controll_box')}>
          {menuInfo && menuInfo.map((list,idx) => {
            const keyValue = Object.entries(list)[0];
            const [keyName, values] = [keyValue[0], keyValue[1]];
            return <div key={idx}>
              <div className={cx('header__list_title')}>{keyName}</div>
              <div className={cx('header__list_box')}>
                {values && values.map((itemInfo) => (
                  <Link
                    key={itemInfo.id}
                    to={`/${itemInfo.category_en}/list/${itemInfo.id}`}
                    className={cx('header__list_link')}
                  >
                    <span>{itemInfo.title}</span>
                    <span>{}</span>
                  </Link>
                ))}
              </div>
            </div>
          })}

        </div>
      </Styled.Header>
    );
  }
}

export default Header;