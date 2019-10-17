import React, { Component } from 'react';
import Counter from 'components/Counter';
import {connect} from 'react-redux';
import {CounterActions} from 'store/actionCreators';

class CounterContainer extends Component {
  handleIncrement = ()=>{
    CounterActions.increment();
  }
  handleDecrement = () =>{
    CounterActions.decrement();
  }
  handleGetPost = () =>{
   
  }

  componentWillReceiveProps(nextProps){
    const {number}= this.props;
    if(number !== nextProps.number){
      CounterActions.getPostApi(nextProps.number);
    }
  }
  render() {
    const {number} = this.props;
    return (
      <div>
        <Counter 
          number={number}
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
    number:counter.number
  })
)(CounterContainer);