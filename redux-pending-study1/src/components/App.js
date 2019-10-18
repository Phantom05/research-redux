import React, { Component } from 'react';
import { Provider } from 'react-redux';
import CounterContainer from 'containers/CounterContainer';
import MainContainer from 'containers/MainContainer';
import SocketWrapper from 'containers/SocketWrapper';
import store from 'store';
import {ScanAppSocketConfig as wsConfig} from 'lib/config/settings';

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <SocketWrapper host={wsConfig.host} port={wsConfig.port}>
            <CounterContainer />
            <MainContainer />
          </SocketWrapper>
        </Provider>
      </div>
    );
  }
}

export default App;