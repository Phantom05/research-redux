import React, { Component } from 'react';
import Counter from 'components/Counter';
import {connect} from 'react-redux';
import {CounterActions} from 'store/actionCreators';
// import {ReducerActions} from 'store/actins';

class CounterContainer extends Component {
  handleIncrement = ()=>{
    CounterActions.increment();
  }
  handleDecrement = () =>{
    CounterActions.decrement();
  }

  UNSAFE_componentWillReceiveProps (nextProps){
    const {number}= this.props;
    if(number !== nextProps.number){
      CounterActions.getPostApi(nextProps.number);
    }
  }
  handleClick = () =>{
    this.props.history.push("/")
  }
  render() {
    const {number,pending,post} = this.props;
    return (
      <div>
            
      <button onClick={this.handleClick}>View Main</button>
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