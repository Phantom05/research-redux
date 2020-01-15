import React from 'react';
import styled from 'styled-components';

function DashboardNavProfile(props) {
  return (
    <Styled.DashboardNavProfile>
      <div className="profile__info row">
        <div className="profile__info img_con">
          <img src="https://www.pinclipart.com/picdir/middle/52-528506_open-person-icon-png-clipart.png" alt="profile imgage" className="profile__info img"/>
        </div>
      </div>
      <div className="profile__info row">
        <div className="profile__info text_box">
          김선호
        </div>
        <address className="profile__info text_box">
          shkk@gmail.com
        </address>
        <div className="profile__info text_box">
          wifi 0 0 0
      </div>
      </div>
    </Styled.DashboardNavProfile>
  );
}

const Styled={
  DashboardNavProfile:styled.div`
    .profile__info{
      &.row:last-child{
        margin-top:20px;
        text-align:center;
      }
      &.text_box{
        margin-top:5px;
      }
      &.img_con{
        width:100px;
        height:100px;
        overflow:hidden;
        border-radius:100%;
        border:1px solid orange;
        margin:auto;
      }
      &.img{
        width:100%;
      }
      
    }
  `
}
export default DashboardNavProfile;