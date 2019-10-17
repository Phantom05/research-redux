import React, { Component } from 'react';
import { Provider } from 'react-redux';
import CounterContainer from 'containers/CounterContainer';
import MainContainer from 'containers/MainContainer';
import SocketWrapper from 'containers/SocketWrapper';
import store from 'store';

class App extends Component {

  render() {
    return (
      <div>
        <Provider store={store}>
          <SocketWrapper>
            <CounterContainer />
            <MainContainer />
          </SocketWrapper>
        </Provider>
      </div>
    );
  }
}

export default App
// export default App