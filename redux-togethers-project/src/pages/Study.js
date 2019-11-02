import React, { Component } from 'react';
import PlainTemplate from 'components/base/template/PlainTemplate';
import HeaderContainer from 'containers/header/HeaderContainer';
import StudyContainer from 'containers/study/StudyContainer';


class Study extends Component {
  render() {
    return (
      <PlainTemplate 
        header={ <HeaderContainer />}
        main={<StudyContainer />} 
      />
    );
  }
}

export default Study;