import React from 'react';
import {DashboardTemplate} from 'components/base/template';
import {WorkContainer} from 'containers/works';
import {NavContainer} from 'containers/nav';

function Works(props) {
  return (
    <DashboardTemplate 
      nav={<NavContainer type="dashboard" />}
      title="Works"
      rightSpace={<NavContainer type="executor"/>}
    >
      
      <WorkContainer />
    </DashboardTemplate>
  );
}

export default Works;