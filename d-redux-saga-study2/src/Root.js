import React, { Component } from 'react';
import App from 'components/App';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import store from 'store';
import {path,settings,protocol} from 'config';
import malt_image from 'static/images/malt.svg';


console.log('protocol json',protocol);
console.log('path json',path);
console.log('image url in path.json',path.malt_image);
console.log('apiAddress in settings',settings.socketAddress);

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <img src={malt_image} alt=""/>
        <Router>
          <App />
        </Router>  
      </Provider>
    );
  }
}

export default Root;