import React, { Component } from 'react';
import Counter from 'components/counter';
import { connect } from 'react-redux';
import {CounterActions,UsersActions} from 'store/actionCreators';

class CounterContainer extends Component {
  handleIncrement = () =>{
    const {number} = this.props;
    CounterActions.increment();
   
  }
  handleDecrement = () =>{
    CounterActions.decrement()
  }
  handleGetUser= (text) =>{
    console.log('get user');
    UsersActions.get_user(text);
  }
  handleAsyncIncrement = () =>{
    CounterActions.asyncIncrement();
  }
  handleAsyncDecrement = () =>{
    CounterActions.asyncDecrement();
  }
  handleGetPost=(number) =>{
    console.log('get Post');
    UsersActions.get_post(number)
  }
  render() {
    const {number,error,data} = this.props;

    return (
      <div>
        <Counter 
          error={error}
          data={data}
          number={number}
          onIncrementAsync={this.handleAsyncIncrement}
          onDecrementAsync = {this.handleAsyncDecrement}
          increment={this.handleIncrement}
          decrement={this.handleDecrement}
          getUser={this.handleGetUser}
          getPost ={this.handleGetPost}
        />
      </div>
    );
  }
}

export default connect(
  ({counter,users})=>({
    number:counter.number,
    error:users.error,
    data:users.data
  })
)(CounterContainer);