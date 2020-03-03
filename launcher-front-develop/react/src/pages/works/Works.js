import React from 'react';
import {DashboardTemplate} from 'components/base/template';
import {WorkContainer} from 'containers/works';
import {NavContainer} from 'containers/nav';
import {PatientSearchContainer} from 'containers/search';

function Works(props) {
  return (
    <DashboardTemplate 
      nav={<NavContainer type="dashboard" />}
      title="Works"
      rightSpace={<NavContainer type="executor"/>}
    >
      <PatientSearchContainer />
      <WorkContainer />
    </DashboardTemplate>
  );
}

export default Works;