import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import {Home,Login,Dashboard} from 'pages';
import 'antd/dist/antd.css';
class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/dashboard" component={Dashboard}/>
        </Switch>
      </div>
    );
  }
}

export default App;