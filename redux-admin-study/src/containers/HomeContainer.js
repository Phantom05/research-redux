import React, { Component } from 'react';
import {connect} from 'react-redux';
// import WithLogged from 'lib/hoc/WithLogged';


class HomeContainer extends Component {
  render() {
    return (
      <div>
        {/* <WithLogged isNotLogged/> */}
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