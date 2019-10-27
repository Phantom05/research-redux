import React, { Component } from 'react';
import DashboardTemplate from 'components/common/template/DashboardTemplate';
import DashboardContainer from 'containers/DashboardContainer';
import HeaderContainer from 'containers/HeaderContainer';
import SideBarContainer from 'containers/SideBarContainer';

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