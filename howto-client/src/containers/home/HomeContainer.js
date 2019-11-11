import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlainTemplate from 'components/base/template/PlainTemplate';
import MainHeader from 'components/common/header/MainHeader';
import MainNavigation from 'components/common/navigation/MainNavigation';
import RecentPostCards from 'containers/list/RecentPostCards';
class HomeContainer extends Component {
  render() {
    // const {homeReducer} = this.props;
    // const {count} = homeReducer;

    return (
      <PlainTemplate
        header={<MainHeader />}
        navigation={<MainNavigation />}
      >
        
        <div style={{width:'1000px'}}>
          <RecentPostCards 
          
          />
        </div>
      </PlainTemplate>
    );
  }
}

export default connect(
  ({ home }) => ({
    homeReducer: home
  })
)(HomeContainer);