import React, { Component } from 'react';
import DashboardTemplate from 'components/base/template/DashboardTemplate';
import DashboardContainer from 'containers/dashboard/DashboardContainer';
import HeaderContainer from 'containers/header/HeaderContainer';
import SideBarContainer from 'containers/sidebar/SideBarContainer';

class Dashboard extends Component {
  render() {
    return (
      <>
        <DashboardTemplate
          header={<HeaderContainer/>}
          sidebar={<SideBarContainer/>}
          main={<DashboardContainer />}
        />

      </>
    );
  }
}

export default Dashboard;