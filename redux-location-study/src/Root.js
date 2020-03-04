import React, { Component } from 'react';
import App from 'components/App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'store';
const { store, persistor } = configureStore;


class Root extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      </Router>
    );
  }
}

export default Root;