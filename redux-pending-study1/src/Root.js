import React, { Component } from 'react';
import App from 'components/App';
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from 'store';

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter >
          <App />
        </BrowserRouter>
      </Provider>

    );
  }
}

export default Root;