import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlainTemplate from 'components/base/template/PlainTemplate';
import MainHeader from 'components/common/header/MainHeader';
import MainNavigation from 'components/common/navigation/MainNavigation';
import RecentPostCards from 'containers/list/RecentPostCards';

class InteriorContainer extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    // const {homeReducer} = this.props;
    // const {count} = homeReducer;
    
    return (
      <PlainTemplate
        header={<MainHeader />}
        navigation={<MainNavigation />}
      >
          <RecentPostCards 
            type={`Interior and Repair`}
          />
      </PlainTemplate>
    );
  }
}

export default connect(
  ({ home }) => ({
    homeReducer: home
  })
)(InteriorContainer);