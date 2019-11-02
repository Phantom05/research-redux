import React, { Component } from 'react';
import PlainTemplate from 'components/base/template/PlainTemplate';
import HeaderContainer from 'containers/header/HeaderContainer';

class Exercise extends Component {
  render() {
    return (
      <PlainTemplate 
        header={ <HeaderContainer />}
        // main={<HomeContainer />} 
      />
    );
  }
}

export default Exercise;