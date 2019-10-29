import React, { Component } from 'react';
import {connect} from 'react-redux';

// import Dashboard from 'components/Dashboard';
class DashboardContainer extends Component {
  render() {
    // const {title} = this.props;
    return (
      <>
      {/* <Dashboard /> */}
      Dashboard Container
      </>
    );
  }
}

export default connect(
  ({dashboard})=>({
    title:dashboard.title
  })
)(DashboardContainer);