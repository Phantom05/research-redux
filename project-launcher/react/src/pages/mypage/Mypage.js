import React from 'react';
import {DashboardTemplate} from 'components/base/template';
import {MyPageContainer } from 'containers/mypage'
import {NavContainer} from 'containers/nav';

function Mypage(props) {
  return (
    <DashboardTemplate 
      nav={<NavContainer type="dashboard"/>} 
      title="My Page"
      rightSpace={<NavContainer type="executor"/>}
    >
      <MyPageContainer />
    </DashboardTemplate>
  );
}

export default Mypage;