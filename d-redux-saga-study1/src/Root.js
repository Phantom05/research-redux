import React from 'react';
import App from 'components/App';
import { Provider } from 'react-redux';
import store from 'store';
import { BrowserRouter as Router } from 'react-router-dom';

function Root() {
  return (
    <Provider store={store} className="App">
      <Router>
        <App />
      </Router>
    </Provider>
  );
}

export default Root;
