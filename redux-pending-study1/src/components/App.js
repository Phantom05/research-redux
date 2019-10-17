import React, { Component } from 'react';
import {Provider} from 'react-redux';
import CounterContainer from 'containers/CounterContainer';
import store from 'store';
import {QWebChannel} from 'qwebchannel';
import {ScapApp} from 'lib/api/ScapAppQWebchannel';

import {w3cwebsocket as W3CWebSocket} from 'websocket';


const testMode = true;
const serverHost = testMode ? 'ws://127.0.0.1:8082':'ws://127.0.0.1:5501';
const client = new W3CWebSocket(serverHost);

class App extends Component {
  componentDidMount(){
    client.onopen =() =>{
      console.log('WebSocket Client Connected');
      if(testMode){ 
        ScapApp(client);
      }else{  
        new QWebChannel(client, App); 
      }
    }
    client.onmessage = (message) =>{
      console.log(message.data);
    }
  }
  render() {
    return (
      <div>
        <Provider store={store}>
          <CounterContainer/>
        </Provider>
      </div>
    );
  }
}

export default App;