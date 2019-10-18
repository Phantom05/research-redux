import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SocketActions as ws } from 'store/actionCreators';


import Window from 'components/window';

class WindowContainer extends Component {
  handleClickLogo = () => {
    console.log('handleClickLogo');
  }
  handleClickMinimize = () => {
    ws.wsSend({hello:'world'})
    console.log('minimize');
  }
  handleClickMaximize = () => {
    console.log('handleClickMaximize');
  }
  handleClickExit = () => {
    console.log('handleClickExit');
  }
  render() {
    return (
      <div>
        <Window
          clickLogo={this.handleClickLogo}
          clickMinimize={this.handleClickMinimize}
          clickMaximize={this.handleClickMaximize}
          clickExit={this.handleClickExit}
        />
      </div>
    );
  }
}

export default connect(
  ({ window }) => ({

  })
)(WindowContainer);