import React from 'react';
import {DashboardNav} from 'components/common/nav';
import {DashboardTemplate} from 'components/base/template';
import {WorkContainer} from 'containers/works';

function Works(props) {
  return (
    <DashboardTemplate 
      nav={<DashboardNav/>} 
      title="Works"
    >
      <WorkContainer />
    </DashboardTemplate>
  );
}

export default Works;