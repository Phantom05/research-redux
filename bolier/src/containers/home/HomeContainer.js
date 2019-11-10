import React, { Component } from 'react';
import {connect} from 'react-redux';
import PlainTemplate from 'components/base/template/PlainTemplate';
import MainHeader from 'components/common/header/MainHeader';
import MainNavigation from 'components/common/navigation/MainNavigation';
class HomeContainer extends Component {
  render() {
    const {homeReducer} = this.props;
    const {count} = homeReducer;
    console.log(count,'count');
    return (
      <PlainTemplate 
        header={<MainHeader />}
        navigation={<MainNavigation />}
      >
        Main
      </PlainTemplate>
    );
  }
}

export default connect(
  ({home})=>({
    homeReducer:home
  })
)(HomeContainer);