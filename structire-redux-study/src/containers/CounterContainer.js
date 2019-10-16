import React, { Component } from 'react';
import {connect} from 'react-redux';
import Counter from 'components/Counter';
import {CounterActions} from 'store/actionCreators';

class CounterContainer extends Component {
  handleIncrement= ()=>{
    CounterActions.increment()
  }
  handleDecrement= ()=>{
    CounterActions.decrement()
  }
  render() {
    const {number} = this.props;
    console.log(number);
    return (
      <div>
        <Counter
          number={number}
          increment={this.handleIncrement}
          decrement={this.handleDecrement}
        />
      </div>
    );
  }
}



export default connect(
  (state)=>({
    number:state.counter.number
  })
)(CounterContainer);