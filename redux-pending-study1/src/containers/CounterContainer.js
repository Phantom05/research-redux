import React, { Component } from 'react';
import Counter from 'components/Counter';
import {connect} from 'react-redux';
import {ReducerActions} from 'store/actionCreators';
// import {ReducerActions} from 'store/actins';

class CounterContainer extends Component {
  handleIncrement = ()=>{
    ReducerActions.increment();
  }
  handleDecrement = () =>{
    ReducerActions.decrement();
  }

  UNSAFE_componentWillReceiveProps (nextProps){
    const {number}= this.props;
    if(number !== nextProps.number){
      ReducerActions.getPostApi(nextProps.number);
    }
  }
  render() {
    const {number,pending,post} = this.props;
    return (
      <div>
        <Counter 
          number={number}
          pending = {pending}
          post = {post}
          increment = {this.handleIncrement}
          decrement = {this.handleDecrement}
          getPost = {this.handleGetPost}
        />
      </div>
    );
  }
}

export default connect(
  ({counter})=>({
    number:counter.number,
    pending:counter.pending,
    post:counter.post,
  })
)(CounterContainer);