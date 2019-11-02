import React, { Component } from 'react';
import PlainTemplate from 'components/base/template/PlainTemplate';
import HeaderContainer from 'containers/header/HeaderContainer';

class StoryTalk extends Component {
  render() {
    return (
      <PlainTemplate 
        header={ <HeaderContainer />}
        // main={<HomeContainer />} 
      />
    );
  }
}

export default StoryTalk;