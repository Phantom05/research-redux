import React, { Component } from 'react';
import PlainTemplate from 'components/common/template/PlainTemplate';
import Header from 'components/base/Header';
import HomeContainer from 'containers/HomeContainer';

class Home extends Component {
  render() {
    return (
      <PlainTemplate header={<Header />}>
        <HomeContainer />
      </PlainTemplate>
    );
  }
}

export default Home;