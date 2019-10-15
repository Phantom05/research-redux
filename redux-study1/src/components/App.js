import React, { Component } from 'react';
import CounterContainer from 'containers/CounterContainer';
import HocContainer from 'containers/HocContainer';

class App extends Component {
  render() {
    return (
      <div>
        <CounterContainer />
        <HocContainer/>
      </div>
    );
  }
}

export default App