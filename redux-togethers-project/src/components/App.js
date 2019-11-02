import React, { Component } from 'react';
// import PrivateRoute from 'components/base/PrivateRoute';
import {Switch,Route} from 'react-router-dom';
import {
  Home,
  Login,
  Dashboard,
  Register,
  Study,
  Exercise,
  StoryTalk,
  NotFound,
} from 'pages';
import 'antd/dist/antd.css';
import Core from 'containers/base/Core';
class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route  path="/login" component={Login}/>
          <Route  path="/register" component={Register}/>
          <Route  path="/dashboard" component={Dashboard}/>
          <Route  path="/exercise" component={Exercise}/>
          <Route  path="/storyTalk" component={StoryTalk}/>
          <Route  path="/study" component={Study}/>
          <Route component={NotFound}/>
        </Switch>
        <Core/>
      </div>
    );
  }
}

export default App;

// http://localhost:3000/login