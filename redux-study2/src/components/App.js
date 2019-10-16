import React, { Component } from 'react';
import CounterContainer from 'containers/CounterContainer';
import PostContainer from 'containers/PostContainer';

class App extends Component {
  render() {
    return (
      <div>
        <CounterContainer/>
        <PostContainer/>
      </div>
    );
  }
}

export default App;