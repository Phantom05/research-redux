import React, { Component } from 'react';
import Home from 'components/Home';
import {connect} from 'react-redux';
import {Actions} from 'store/actionCreators';
import {Link} from 'react-router-dom';

class HomeContainer extends Component {
  handleGetUser = (type) =>{
    const {number} = this.props;
    if(type === 'increment'){
      Actions.counter_increment()
    }
    if(type === 'decrement'){
      Actions.counter_decrement()
    }
    if(type === 'getUser'){
      Actions.saga_get_user(number)
    }
    if(type ==='wsSend'){
      Actions.saga_socket_request({"DOF_0011":[1,true]})
    }
    if(type === 'blocking'){
      Actions.ws_blocking()
    }
    if(type === 'unblocking'){
      Actions.ws_unblock()
    }
  }
  render() {
    const {data,number,error,wsConnect} = this.props;
    console.log(wsConnect,'wsConnect');
    return (
      <div>
        Hello Home Containers
        <Home
          data ={data}
          error={error}
          number= {number}
          onClick={this.handleGetUser}
          wsConnect={wsConnect}
        />
         <Link to="/setting">Setting page Link</Link>
      </div>
    );
  }
}

export default connect(
  ({home,counter,websocket})=>({
    data:home.data,
    error:home.error,
    number:counter.number,
    wsConnect:websocket.connect
  })
)(HomeContainer);