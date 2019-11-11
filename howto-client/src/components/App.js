import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import 'reset-css';

import {
  Home,
  Cook,
  Interior,
  Holiday,
} from 'pages';
class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cook" component={Cook} />
        <Route exact path="/interior" component={Interior} />
        <Route exact path="/holiday" component={Holiday} />
      </Switch>
    );
  }
}

export default App;