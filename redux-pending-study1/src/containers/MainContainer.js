import React, { Component } from 'react';
import {connect} from 'react-redux';
import ScanButton from 'components/Navigation/ScanButton';
import { SocketActions } from 'store/actionCreators';

class MainContainer extends Component {

  handleClick = () =>{
    SocketActions.socketConnect();
    SocketActions.TestSocketMiddleware()
  }
  render() {
    return (
      <div>
        <ScanButton 
          onClick = {this.handleClick}
        />
      </div>
    );
  }
}

export default connect(
  (state)=>({
    response:state.websocket.response
  })
)(MainContainer);