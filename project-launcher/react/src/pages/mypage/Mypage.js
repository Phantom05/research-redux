import React from 'react';
import {DashboardNav} from 'components/common/nav';
import {DashboardTemplate} from 'components/base/template';
import {MyPageContainer } from 'containers/mypage'

function Mypage(props) {
  return (
    <DashboardTemplate 
      nav={<DashboardNav/>} 
      title="My Page"
    >
      <MyPageContainer />
    </DashboardTemplate>
  );
}

export default Mypage;