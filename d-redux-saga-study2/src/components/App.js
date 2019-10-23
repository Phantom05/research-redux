import React, { Component } from 'react';
import {Switch,Route,withRouter,Link,Redirect} from 'react-router-dom';
import {Actions} from 'store/actionCreators';
import {Home,Setting,Test} from 'pages';
import HomeContainer from 'containers/HomeContainer';

class App extends Component {
  state={
    redirect:false,
  }
  componentDidMount(){
    // settings.setValueOf();
    // Actions.ws_connect();
  }
  handleRedirect = () =>{
    this.setState({
      redirect:true
    })
  }

  handleTest =() =>{
    const data = {
      "DOF-REQ": [
        {
          "code": [
            ["0000"],
            ["0001"],
            ["0002"],
            ["0003"],
            ["0004"]
          ]
        }
      ]
    };

    Actions.saga_socket_request(data)
  }
  render() {
    // const {match,location} = this.props;
    // const {redirect} = this.state;
    // console.log(`match  ${JSON.stringify(match)}`);
    // console.log(`location  ${JSON.stringify(location)}`);
    return (
      <div>
        {/* <h4>Current Url: {match.url}</h4>
        <h4>Current Path: {match.path}</h4>
        <button onClick={this.handleTest}>DOF-REQ</button>
        <button onClick={this.handleRedirect}>Redirect Test</button>
        <Link to="/setting">Setting page Link</Link>
        {redirect &&  <Redirect to="/setting"/>}
        <hr/> */}
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/setting" component={Setting}/>
        <Route  component={Test}/>
      </Switch>
        {/* <HomeContainer/> */}
      </div>
      
    );
  }
}

export default withRouter(App);