import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {DashboardNavProfile} from 'components/common/nav';

function DashboardNav(props) {
  return (
    <Styled.DashboardNav>
      <DashboardNavProfile />
      <Link to="/home">Home</Link> <br/>
      <Link to="/case">Case</Link> <br/>
      <Link to="/work">Work</Link> <br/>
      <Link to="/mypage">My PAGE</Link> <br/>
      
      <div>
        Nav
      </div>
    </Styled.DashboardNav>
  );
}

const Styled ={
  DashboardNav:styled.nav`
    width:220px;
    border:1px solid red;
    padding-top:50px;
  `
}

export default DashboardNav;