import React, { Component } from 'react';
import {connect} from 'react-redux';
import WithLogged from 'lib/hoc/withLogged';


class HomeContainer extends Component {
  render() {
    const {logged} = this.props;
    return (
      <div>
        <WithLogged />
        Home Container
      </div>
    );
  }
}

export default connect(
  ({auth})=>({
    logged:auth.logged
  })
)(HomeContainer);