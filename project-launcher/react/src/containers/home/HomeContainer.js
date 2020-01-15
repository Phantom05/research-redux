import React from 'react';
import {DashboardNav} from 'components/common/nav';
import {DashboardTemplate} from 'components/base/template';

function HomeContainer() {
  return (
    <DashboardTemplate
      nav={<DashboardNav />}
    >
    <h2>Home Page</h2>
    </DashboardTemplate>
  );
}

export default HomeContainer

