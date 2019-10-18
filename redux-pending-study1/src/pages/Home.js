import React, { Component } from 'react';
import ControllerContainer from 'containers/ControllerContainer';
import StageContainer from 'containers/StageContainer';
import NavigationContainer from 'containers/NavigationContainer';
import WindowContainer from 'containers/WindowContainer';
import MainPlainTemplate from 'components/common/Template/MainPlainTemplate';

class Home extends Component {
  render() {
    const {props} = this;
    return (
      <MainPlainTemplate 
        window ={<WindowContainer {...props}/>}
        stage={<StageContainer {...props}/>}
        navigation={<NavigationContainer {...props}/>}
        controller={ <ControllerContainer {...props}/>}
      />
    );
  }
}

export default Home;