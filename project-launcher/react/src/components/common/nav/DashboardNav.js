import React, { useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { DashboardNavProfile } from 'components/common/nav';
import { device } from 'styles/__utils';
import { color, font } from 'styles/__utils';
import {
  icon_case_teeth,
  icon_mypage_person,
  icon_works_box} 
from  'components/base/images';


function DashboardNav(props) {
  return (
    <Styled.DashboardNav>
      <DashboardNavProfile
        image={null}
        title={"새하얀 치과"}
        email={"shkk@gmail.com"}
        connectState={4}
        alert={true}
      />

      <div className="DashboardNav__link_con">
        {/* <div className="DashboardNav__link box">
          <NavLink to="/home" className="DashboardNav__link an">Home</NavLink>
        </div> */}
        <div className="DashboardNav__link box">
          <NavLink to="/case" className="DashboardNav__link an">
            <span className="DashboardNav_icon_box DashboardNav_item_box">
              <img src={icon_case_teeth} alt="nav icon" className="DashboardNav_icon"/>
            </span>
            <span className="DashboardNav__text DashboardNav_item_box">Case</span>
          </NavLink>
        </div>
        <div className="DashboardNav__link box">
          <NavLink to="/works" className="DashboardNav__link an">
            <span className="DashboardNav_icon_box DashboardNav_item_box">
              <img src={icon_mypage_person} alt="nav icon" className="DashboardNav_icon"/>
            </span>
            <span className="DashboardNav__text DashboardNav_item_box">Work</span>
          </NavLink>
        </div>
        <div className="DashboardNav__link box">
          <NavLink to="/mypage" className="DashboardNav__link an">
            <span className="DashboardNav_icon_box DashboardNav_item_box">
              <img src={icon_works_box} alt="nav icon" className="DashboardNav_icon"/>
            </span>
            <span className="DashboardNav__text DashboardNav_item_box">My Page</span>
          </NavLink>
        </div>
        <div className="DashboardNav__link box">
          <NavLink to="/auth/signout" className="DashboardNav__link an" >Logout</NavLink>
        </div>
      </div>
    </Styled.DashboardNav>
  );
}

const Styled = {
  DashboardNav: styled.nav`
    width:220px;
    height:100%;
    padding-top:50px;
    background:white;
    .DashboardNav__link{
      display:block;
      padding:0 10px;
    }
    .DashboardNav__link_con{
      margin-top:40px;
    }
    .DashboardNav__link.an{
      position: relative;
      padding:15px;
      overflow: hidden;
      &.active{
        &:after{
          position:absolute;
          content:"";
          display:block;
          clear: both;
          left:0;
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
      width:40px;
      height:36px;
      margin-right:15px;
    }
    .DashboardNav_icon{
      display:inline-block;
      width:100%;
      height:100%;
    }
    .DashboardNav__text{
      position:relative;
      ${font(20,color.black)};
      top:8px;
    }
    .DashboardNav_item_box{
      float:left;
    }
    
    
    @media screen and (max-width:${device.pc}){
      /* width:100vh; */
    }
  `
}

export default DashboardNav;