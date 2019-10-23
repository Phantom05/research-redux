import React, { Component } from 'react';
import App from 'components/App';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import store from 'store';

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    );
  }
}

export default Root;