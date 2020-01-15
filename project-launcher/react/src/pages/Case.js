import React from 'react';
import {DashboardNav} from 'components/common/nav';
import {DashboardTemplate} from 'components/base/template';
import {CaseContainer} from 'containers/case';

function Case(props) {
  return (
    <DashboardTemplate
      nav={<DashboardNav />}
    >
      <CaseContainer />
    </DashboardTemplate>
  );
}

export default Case;