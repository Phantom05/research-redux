import React, { Component } from 'react';
import PostContaier from 'containers/PostContaier';
import { Provider} from 'react-redux';
import store from 'store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PostContaier/>
      </Provider>
    );
  }
}

export default App;