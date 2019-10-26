import React, { Component } from 'react';
import PlainTemplate from 'components/common/template/PlainTemplate';
import DashboardContainer from 'containers/DashboardContainer';
import HeaderContainer from 'containers/HeaderContainer';
import SideBarContainer from 'containers/SideBarContainer';

class Dashboard extends Component {
  render() {
    return (
      <>
      
        <PlainTemplate
          header={<HeaderContainer/>}
          sidebar={<SideBarContainer/>}
          main={<DashboardContainer />}
        />

      </>
    );
  }
}

export default Dashboard;