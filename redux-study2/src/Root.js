import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import App from 'components/App';
import store from 'store';

function Root() {
  return (
    <div className="App">
      <header className="App-header">
      <Provider store={store}>
        <App />
      </Provider>
      </header>
    </div>
  );
}

export default Root;
