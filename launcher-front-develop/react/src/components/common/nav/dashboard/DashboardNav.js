import React from 'react';
import {  NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { DashboardNavProfile } from 'components/common/nav';
import { device } from 'styles/__utils';
import { color, font } from 'styles/__utils';
import cx from 'classnames';
import {useImmer} from 'use-immer';
import {
  icon_case_teeth,
  icon_mypage_person,
  icon_works_box,
  icon_alert_big} 
from  'components/base/images';
import { withRouter } from 'react-router-dom';
import {
  LISTING_WORKS_SEARCH_SAGAS,
} from 'store/actions';
const menuList = [
  {
    id:0,
    title:'Home',
    icon:icon_case_teeth,
    link:'/home',
    hidden:true
  },
  {
    id:1,
    title:'Case',
    icon:icon_case_teeth,
    link:'/case',
    hidden:false
  },
  {
    id:2,
    title:'Works',
    icon:icon_works_box,
    link:'/works',
    hidden:false
  },
  {
    id:3,
    title:'Message',
    icon:icon_alert_big,
    link:'/alert/list',
    hidden:false
  },
  {
    id:4,
    title:'My Page',
    icon:icon_mypage_person,
    link:'/mypage',
    hidden:false
  },
];

function DashboardNav(props) {
  const [navList] = useImmer(menuList);
  const {profile,info,auth} =props;
  const isGhostCustomer = auth.signIn.grade === 3;
  const userCode =auth.signIn.profile.userCode;

  const handleClick = config=>{
    const {type} = config;
    if(props.match.path !== type){
      LISTING_WORKS_SEARCH_SAGAS.init()
    }

    if(props.match.path === '/works'){
      const searchConfig ={
        userCode : userCode,
        page:1,
        sort: 1, 
        search :"",
        type :"",
        first:true,
      };
      LISTING_WORKS_SEARCH_SAGAS(searchConfig);
    }

  }

  return (
    <Styled.DashboardNav>
    
      <DashboardNavProfile
        image={profile.profile}
        title={profile.company?profile.company:profile.name}
        email={profile.email}
        connectState={4}
        isConnect={info.isNetworkConnect}
        alert={true}
        message={info.error.message}
      />

      <div className="DashboardNav__link_con">
        {navList.map(item=>{
          if(isGhostCustomer && [3,4].indexOf(item.id) !== -1){
            return null;
          }
          return <div className={cx('DashboardNav__link box',{hidden:item.hidden})} key={item.id}>
          <NavLink to={item.link} className="DashboardNav__link an" onClick={()=>handleClick({type:item.link})}>
            <span className="DashboardNav_icon_box DashboardNav_item_box">
              <img src={item.icon} alt="nav icon" className="DashboardNav_icon"/>
            </span>
          <span className="DashboardNav__text DashboardNav_item_box">{item.title}</span>
          </NavLink>
          </div>
        })}
      </div>

      <div className="DashboardNav__link box logout">
        <NavLink to="/auth/logout" className="DashboardNav__link an" >Logout</NavLink>    
      </div>
      
    </Styled.DashboardNav>
  );
}

const Styled = {
  DashboardNav: styled.nav`
    position:relative;
    width:180px;
    min-height:100vh;
    padding-top:50px;
    background:white;
    .DashboardNav__link{
      display:block;
      padding:0;
      &.hidden{
        display:none;
      }
      &.logout{
        position:absolute;
        bottom:30px;
        left:50%;
        transform:translateX(-50%);
        width:100px;
        border-radius:30px;
        border:2px solid ${color.blue};
        & a{
          padding:7px 15px;
          ${font(14,color.black)};
          font-weight:500;
          text-align: center;
          
        }
      }
    }
    .DashboardNav__link_con{
      margin-top:40px;
    }
    .DashboardNav__link.an{
      position: relative;
      padding:22px 20px;
      overflow: hidden;
      &.active{
        &:after{
          position:absolute;
          content:"";
          display:block;
          clear: both;
          right:0;
          top:0;
          width:5px;
          height:100%;
          background:${color.blue_week};
        }
        background:${color.blue_week_hover}
      }
    }
    .DashboardNav_icon_box{
      display:inline-block;
      width:32px;
      height:28px;
      margin-right:20px;
    }
    .DashboardNav_icon{
      display:inline-block;
      width:100%;
      height:100%;
    }
    .DashboardNav__text{
      position:relative;
      ${font(18,color.black_font)};
      top:4px;
    }
    .DashboardNav_item_box{
      float:left;
    }
    
    
    @media screen and (max-width:${device.pc}){
      /* width:100vh; */
    }
  `
}

export default withRouter(DashboardNav);