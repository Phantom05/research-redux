import React, { Component } from 'react';
import SocketWrapper from 'components/common/template/SocketWrapper';
import {scanPort,scanHost} from 'lib/config/settings';
import { Route, Switch } from 'react-router-dom';
import { Home } from 'pages';
import 'reset-css';

class App extends Component {
  render() {
    return (
      <SocketWrapper host={scanHost} port={scanPort}>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </SocketWrapper>
    );
  }
}

export default App;