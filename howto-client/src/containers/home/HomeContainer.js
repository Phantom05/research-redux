import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlainTemplate from 'components/base/template/PlainTemplate';
import MainHeader from 'components/common/header/MainHeader';
import MainNavigation from 'components/common/navigation/MainNavigation';
import MainRecentPostCards from 'containers/list/MainRecentPostCards';
class HomeContainer extends Component {
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
        <MainRecentPostCards

        />
      </PlainTemplate>
    );
  }
}

export default connect(
  ({ home }) => ({
    homeReducer: home
  })
)(HomeContainer);