import React, { Component } from 'react';
import {connect} from 'react-redux';
// import WithLogged from 'lib/hoc/WithLogged';


class HomeContainer extends Component {
  render() {
    const {landing} = this.props;
    if (landing) return null;
    return (
      <div>
        {/* <WithLogged isNotLogged/> */}
        Home Container
      </div>
    );
  }
}

export default connect(
  ({auth,base})=>({
    logged:auth.logged,
    landing:base.landing
  })
)(HomeContainer);