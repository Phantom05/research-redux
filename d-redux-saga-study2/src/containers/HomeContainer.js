import React, { Component } from 'react';
import Home from 'components/Home';
import {connect} from 'react-redux';
import {Actions} from 'store/actionCreators';

class HomeContainer extends Component {
  handleGetUser = (type) =>{
    console.log('handleGetUser');
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
    if(type === 'test'){
      console.log('>>> click TEST BUTTON');
      Actions.ws_send({"DOF_0001":[0,true]})
    }
  }
  render() {
    const {data,number,error} = this.props;
    return (
      <div>
        <Home
          data ={data}
          error={error}
          number= {number}
          onClick={this.handleGetUser}
        />
      </div>
    );
  }
}

export default connect(
  ({home,counter})=>({
    data:home.data,
    error:home.error,
    number:counter.number,
  })
)(HomeContainer);