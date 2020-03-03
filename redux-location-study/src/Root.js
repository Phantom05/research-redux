import React, { Component } from 'react';
import App from 'components/App';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {HashRouter as Router  } from 'react-router-dom';
import configureStore from 'store';
// const { store, persistor } = configureStore;
const store = configureStore;


class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
        <Router>
          <App />
        </Router>
        {/* </PersistGate> */}
      </Provider>
    );
  }
}

export default Root;