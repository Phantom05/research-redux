import React, { Component } from 'react';
import { connect } from 'react-redux';
// import ScanButton from 'components/Navigation/ScanButton';
// import { SocketActions } from 'store/actionCreators';


class MainContainer extends Component {

  handleClick = () => {
    this.props.history.push("/setting")

  }
  render() {
    return (
      <div>
        <h3>MainContainer</h3>
        <button onClick={this.handleClick}>View Setting</button>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    // response:state.websocket.response
  })
)(MainContainer);