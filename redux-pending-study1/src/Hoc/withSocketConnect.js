import React, { Component } from 'react';
import { setupWebsocket } from 'lib/websocket';

const withSocketConnect = (url) => (WrappedComponent) => {
  return class extends Component {
    state = {
      connect:false,
      send: null,
      receive:null
    }

    async initialize() {
      try {
        await setupWebsocket (url)
        .then(({send,receive}) =>{
          console.log('Websocket Connect');
          this.setState({
            connect:true,
            send: send,
            receive:receive
          });
        })

      } catch (e) {
        console.log(e);
      }
    }

    componentDidMount() {
      this.initialize();
    }

    render() {
      const { connect, send, receive } = this.state;
      return (
        <WrappedComponent {...this.props} data={{connect,send,receive}}/>
      )
    }
  }
}
export default withSocketConnect;