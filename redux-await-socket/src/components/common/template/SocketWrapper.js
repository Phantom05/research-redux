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
      &:after{
        position:absolute;
        content:'';
        animation: dots 3s infinite;
      }
      @keyframes dots {
        0%, 12.5% {
            content:'';
        }
        25% {
          content:'.';
        }
        50%{
          content:'..';
        }
        75%{
          content:'...';
        }
        90%, 100%{
          content:'';
        }
    }	
    }
  `
}
class SocketWrapper extends Component {
  componentDidMount() {
    const { host, port } = this.props;
    SocketActions.ws_connect(`ws://${host}:${port}`);
  }
  render() {
    const { children, connect } = this.props;
    return (
      <div>
        {!connect
          ? <Styled.Loading>
            <span>Loading</span>
          </Styled.Loading>
          : children }
      </div>
    );
  }
}

export default connect(
  ({ websocket }) => ({
    connect: websocket.connect
  })
)(SocketWrapper);