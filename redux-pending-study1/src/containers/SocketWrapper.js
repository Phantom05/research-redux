import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SocketActions } from 'store/actionCreators';

class SocketWrapper extends Component {
  componentDidMount() {
    SocketActions.wsConnect('ws://localhost:5501');
  }
  render() {
    const { children, connect } = this.props;
    console.log(connect);

    return (
      <div>
        {!connect
          ? <p>Loading...</p>
          : children}
      </div>
    );
  }
}

export default connect(
  ({ websocket }) => ({
    connect: websocket.connect
  })
)(SocketWrapper);