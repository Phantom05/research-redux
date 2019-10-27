import React, { Component } from 'react';
import PlainTemplate from 'components/common/template/PlainTemplate';
import HomeContainer from 'containers/HomeContainer';
import HeaderContainer from 'containers/HeaderContainer';


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