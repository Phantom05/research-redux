import React, { Component } from 'react';
import Window from 'components/Window';
import { connect } from 'react-redux';
import { WindowActions,SocketActions } from 'store/actionCreators';
const data = require('lib/config/protocol.json');

class WindowContainer extends Component {
  handleClick = (type) => {
    const obj ={
      home(){
        WindowActions.title('home')
      },
      hello(){
        SocketActions.ws_send(data.window_title);
      },
      minimize(){
        SocketActions.ws_send(data.window_minimize);
      },
      maxmize(){
        SocketActions.ws_send(data.window_maxmize);
      },
      exit(){
        SocketActions.ws_send(data.window_exit);
      },
    }
    obj[type]();
  }
  render() {
    const { props, handleClick } = this;
    const { value,subTitle } = props;
    return (
      <Window
        onClick={handleClick}
        value={value}
        subTitle={subTitle}
      />
    );
  }
}

export default connect(
  ({ window }) => ({
    value: window.value,
    subTitle:window.subTitle
  })
)(WindowContainer);