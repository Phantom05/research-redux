import React, { Component } from 'react';
import './App.css';
import App from 'components/App';

class Root extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <App />
      </header>
    </div>
    );
  }
}

export default Root;