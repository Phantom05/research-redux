import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from 'components/Home';
import {Actions} from 'store/actionCreators';

class HomeContainer extends Component {
  handleGetResultSaga = () =>{
    Actions.saga_get_result(1)
  }
  handleSubmitSaga =(value) =>{
    // console.log(value);
    Actions.saga_ws_request(value)
  }
  render() {
    const {data} = this.props;
    return (
      <div>
        <Home 
          data={data}
          onClick={this.handleGetResultSaga}
          sagaSubmit={this.handleSubmitSaga}
        />
      </div>
    );
  }
}

export default connect(
  ({home})=>({
    data:home.data
  })
)(HomeContainer);