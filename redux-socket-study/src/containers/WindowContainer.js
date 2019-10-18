import React, { Component } from 'react';
import Window from 'components/Window';
import { connect } from 'react-redux';
import { WindowActions,SocketActions } from 'store/actionCreators';

class WindowContainer extends Component {
  handleClick = (type) => {
    SocketActions.ws_send(type)
    WindowActions.title(type);
  }
  render() {
    const { props, handleClick } = this;
    const { value } = props;
    return (
      <Window
        onClick={handleClick}
        value={value}
      />
    );
  }
}

export default connect(
  ({ window }) => ({
    value: window.value
  })
)(WindowContainer);