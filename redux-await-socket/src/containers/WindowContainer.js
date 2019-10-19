import React, { Component } from 'react';
import Window from 'components/Window';
import { connect } from 'react-redux';
import { WindowActions, SocketActions } from 'store/actionCreators';
import {  withRouter } from 'react-router-dom';
import PageControl from 'components/common/PageControl';

const data = require('lib/config/protocol.json');
class WindowContainer extends Component {
  handleClick = (type) => {
    const { disable } = this.props;
    //if를 살리면 click이벤트자체를 넉다운.
    if (disable) return null
    const obj = {
      home() {
        WindowActions.title('home')
      },
      hello() {
        SocketActions.ws_send(data.window_title);
      },
      minimize() {
        SocketActions.ws_send(data.window_minimize);
      },
      maxmize() {
        SocketActions.ws_send(data.window_maxmize);
      },
      exit() {
        SocketActions.ws_send(data.window_exit);
      },
    }
    obj[type]();
  }

  render() {
    const { props, handleClick } = this;
    const { value, subTitle, disable, page } = props;
    return (
      <div>
        <PageControl page={page} />
        <Window
          onClick={handleClick}
          value={value}
          subTitle={subTitle}
        />
      </div>
    );
  }
}

export default connect(
  ({ window, websocket }) => ({
    page: window.page,
    value: window.value,
    subTitle: window.subTitle,
    disable: websocket.disable
  })
)(withRouter(WindowContainer));