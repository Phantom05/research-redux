import React, { Component } from 'react';
import {Provider} from 'react-redux';
import CounterContainer from 'containers/CounterContainer';
import store from 'store';

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <CounterContainer/>
        </Provider>
      </div>
    );
  }
}

export default App;