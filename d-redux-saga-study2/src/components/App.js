import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
// import {Actions} from 'store/actionCreators';
import {settings} from 'config';
import {Home} from 'pages';

class App extends Component {
  componentDidMount(){
    settings.setValueOf();
    // Actions.ws_connect();
  }
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/:id" component={Home}/>
      </Switch>
    );
  }
}

export default App;