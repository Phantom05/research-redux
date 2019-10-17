import React, { Component } from 'react';
import { Provider } from 'react-redux';
import withSocketConnect from 'Hoc/withSocketConnect';
import CounterContainer from 'containers/CounterContainer';
import MainContainer from 'containers/MainContainer';



import store from 'store';
// import {QWebChannel} from 'qwebchannel';
// import {ScapApp} from 'lib/api/ScapAppQWebchannel';
// ScapApp = (ws) =>{
//   ws.send(JSON.stringify({'hello':"world1"}))
// }
// import {setupWebsocket } from 'lib/websocket';
// const client = new W3CWebSocket(serverHost);
// import { connect,send  } from '@giantmachines/redux-websocket';
// const serverHost = testMode ? 'ws://127.0.0.1:5501':'ws://127.0.0.1:5501';
// import {w3cwebsocket as W3CWebSocket} from 'websocket';
// const testMode = true;


class App extends Component {

  render() {
    const { data } = this.props;
    console.log(data, 'props');
    // if (!data.connect) return null;
    return (
      <div>
        {!data.connect
          ? <p>Loading...</p>
          : (
            <Provider store={store}>
              {console.log('Container Render')}
              <CounterContainer />
              <MainContainer />
            </Provider>
          )}

      </div>
    );
  }
}

export default withSocketConnect({host:'127.0.0.1',port:5501})(App);