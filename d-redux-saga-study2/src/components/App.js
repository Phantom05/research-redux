import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import {Actions} from 'store/actionCreators';
import {Home} from 'pages';

class App extends Component {
  componentDidMount(){
    Actions.ws_connect()
  }
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
    );
  }
}

export default App;