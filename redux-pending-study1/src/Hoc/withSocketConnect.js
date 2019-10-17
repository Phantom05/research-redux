import React, { Component } from 'react';
import {connect} from 'react-redux';
import {SocketActions} from 'store/actionCreators';


const withSocketConnect = (url) => (WrappedComponent) => {
  return class extends Component {
    componentDidMount(){
      SocketActions.wsConnect('ws://localhost:5501');
    }

    render() {
      const { connect, send, receive } = this.state;
      return (
        <WrappedComponent {...this.props} data={{connect,send,receive}}/>
      )
    }
  }
}
export default connect(
  ({websocket})=>({
    connect:websocket.connect
  })
)(withSocketConnect);