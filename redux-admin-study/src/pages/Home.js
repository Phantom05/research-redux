import React, { Component } from 'react';
import PlainTemplate from 'components/base/template/PlainTemplate';
import HomeContainer from 'containers/home/HomeContainer';
import HeaderContainer from 'containers/header/HeaderContainer';


class Home extends Component {
  render() {
    return (
      <PlainTemplate 
        header={ <HeaderContainer />}
        main={<HomeContainer />} 
      />
    );
  }
}

export default Home;