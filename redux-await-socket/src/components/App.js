import React, { Component } from 'react';
import SocketWrapper from 'components/common/template/SocketWrapper';
import {scanPort,scanHost} from 'lib/config/settings';
import { Route, Switch } from 'react-router-dom';
import { Home,Setting } from 'pages';
import 'reset-css';

class App extends Component {
  render() {

    return (
      <SocketWrapper host={scanHost} port={scanPort}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/setting' component={Setting} />
        </Switch>
      </SocketWrapper>
    );
  }
}

export default App;