import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SocketActions } from 'store/actionCreators';
import styled from 'styled-components';

const Styled = {
  Loading: styled.div`
    position:fixed;
    left:0;
    top:0;
    width:100%;
    height:100%;
    span{
      display:inline-block;
      position:absolute;
      top:50%;
      left:50%;
      transform:translate(-50%,-50%);
    }
  `
}
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
          ? <Styled.Loading>
              <span>Loading...</span>
            </Styled.Loading>
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