import React, { Component } from 'react';
import App from 'components/App';
import {Provider} from 'react-redux';
import store from 'store';
import {HashRouter as Router  } from 'react-router-dom';
// import {his } from 'react-router';

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