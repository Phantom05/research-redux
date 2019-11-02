import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import { Icon } from 'antd';
import {
  font,
  color,
  smoothBottomLine
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
  `
}
class Header extends Component {
  render() {
    const { isAutheticated, handleLogout } = this.props;
    const menuList = [
      {
        title: "서울 - 코딩 스터디",
        list: [
          {
            link: '/',
            title: "강남 / 서초"
          },
          {
            link: '/',
            title: "강동 / 송파"
          },
          {
            link: '/',
            title: "관악 / 동작"
          },
          {
            link: '/',
            title: "영등포 / 구로 / 금천구"
          },
          {
            link: '/',
            title: "강서구 / 양천구"
          },
          {
            link: '/',
            title: "서대문 / 은평구"
          },
          {
            link: '/',
            title: "마포구 / 용산구"
          },
        ]
      },
      {
        title: "서울 - 영어 스터디",
        list: [
          {
            link: '/',
            title: "강남/서초"
          }
        ]
      }
    ]
    return (
      <Styled.Header>

        <h2 className={cx('logo')}>TOGETHERS</h2>

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

        <div>
          스터디, 모임, 운동
        </div>

        <div className={cx('menu__controll_box')}>

          {menuList.map((menuInfo, idx) => (
            <div key={idx}>
              <div className={cx('header__list_title')}>{menuInfo.title}</div>
              <div className={cx('header__list_box')}>
                {menuInfo.list.map((itemInfo,idx)=>(
                  <Link 
                    key={idx} 
                    to={itemInfo.link} 
                    className={cx('header__list_link')}
                  >
                    <span>{itemInfo.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}

        </div>
      </Styled.Header>
    );
  }
}

export default Header;