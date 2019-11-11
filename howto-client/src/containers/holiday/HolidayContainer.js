import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlainTemplate from 'components/base/template/PlainTemplate';
import MainHeader from 'components/common/header/MainHeader';
import MainNavigation from 'components/common/navigation/MainNavigation';
import RecentPostCards from 'containers/list/RecentPostCards';


class HolidayContainer extends Component {
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
            type={`Holiday and Vacation` }
          />
      </PlainTemplate>
    );
  }
}

export default connect(
  ({ home }) => ({
    homeReducer: home
  })
)(HolidayContainer);