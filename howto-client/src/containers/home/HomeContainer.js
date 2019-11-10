import React, { Component } from 'react';
import {connect} from 'react-redux';
class HomeContainer extends Component {
  render() {
    const {homeReducer} = this.props;
    const {count} = homeReducer;
    console.log(count,'count');
    return (
      <div>
        Admin Home
      </div>
    );
  }
}

export default connect(
  ({home})=>({
    homeReducer:home
  })
)(HomeContainer);