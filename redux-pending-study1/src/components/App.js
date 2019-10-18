import React, { Component } from 'react';
import {Home,Setting} from 'pages';
import SocketWrapper from 'containers/SocketWrapper';
import { ScanAppSocketConfig as wsConfig } from 'lib/config/settings';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import 'reset-css';


import CounterContainer from 'containers/CounterContainer';

const Styled = {
  App:styled.main`
  background:#F5F5F5;
  height: 100vh;
  `
}
class App extends Component {
  render() {
    return (
      <Styled.App>
        <SocketWrapper host={wsConfig.host} port={wsConfig.port}>
          <Switch>
            <Route exact  path='/' component={Home} />
            <Route path='/setting' component={Setting} />
            <Route path='/counter' component={CounterContainer} />
          </Switch>
        </SocketWrapper>
      </Styled.App>
    );
  }
}

export default App;