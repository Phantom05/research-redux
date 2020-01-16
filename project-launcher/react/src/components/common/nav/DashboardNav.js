import React,{useRef} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {DashboardNavProfile} from 'components/common/nav';
import {device} from 'styles/__utils';



function DashboardNav(props) {
  return (
    <Styled.DashboardNav>
      <DashboardNavProfile />
      <Link to="/home">Home</Link> <br/><br/>
      <Link to="/case">Case</Link> <br/><br/>
      <Link to="/work">Work</Link> <br/><br/>
      <Link to="/mypage">My PAGE</Link> <br/><br/>
      <Link to="/auth/signout">Logout</Link> <br/><br/>
    </Styled.DashboardNav>
  );
}

const Styled ={
  DashboardNav:styled.nav`
    width:220px;
    border:1px solid red;
    padding-top:50px;
    /* background:white; */
    @media screen and (max-width:${device.pc}){
      /* width:100vh; */
    }
  `
}

export default DashboardNav;