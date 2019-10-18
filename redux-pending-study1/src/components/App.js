import React, { Component } from 'react';
import CounterContainer from 'containers/CounterContainer';
import MainContainer from 'containers/MainContainer';
import SettingContainer from 'containers/SettingContainer';
import SocketWrapper from 'containers/SocketWrapper';
import { ScanAppSocketConfig as wsConfig } from 'lib/config/settings';
import { Redirect,Switch, Route } from 'react-router-dom';
import 'reset-css';

class App extends Component {
  render() {
    return (
      <div>
        <SocketWrapper host={wsConfig.host} port={wsConfig.port}>
          <Switch>

            <Route exact  path='/' component={MainContainer} />
            <Route path='/setting' component={SettingContainer} />
            <Route path='/counter' component={CounterContainer} />
          </Switch>
        </SocketWrapper>
      </div>
    );
  }
}

export default App;