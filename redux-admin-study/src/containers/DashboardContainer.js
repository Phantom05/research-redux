import React, { Component } from 'react';
import {connect} from 'react-redux';
import WithLogged from 'lib/hoc/WithLogged';
import Dashboard from 'components/Dashboard';

class DashboardContainer extends Component {
  render() {
    const {title} = this.props;
    console.log('dashboard',title);
    return (
      <div>
        <WithLogged url="/login" isNotLogged/>
        <Dashboard />
      </div>
    );
  }
}

export default connect(
  ({dashboard})=>({
    title:dashboard.title
  })
)(DashboardContainer);