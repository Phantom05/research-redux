

import modules from './modules';
import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import ReduxThunk from 'redux-thunk'
import penderMiddleware from 'redux-pender';
// import socketMiddleware from 'lib/middleware/socketMiddleware';
import {websocketMiddleware} from 'store/modules/websocket';

import thunkMiddleware from "redux-thunk";


import { setupWebsocket } from 'lib/websocket';


const socketSettings = async () => {
  try {
    return await setupWebsocket ({host:'127.0.0.1',port:5501})
    .then(({send,receive}) =>{
      console.log('Websocket Connect');
      resolve({send,receive});
    })

  } catch (e) {
    console.log(e);
  }
}




const  configure = (callback) =>{
  callback().then()
  return () =>{

    const logger = createLogger();
    const store =  createStore(
      modules,
      applyMiddleware(
        // logger,
        ReduxThunk,
        websocketMiddleware,
        penderMiddleware()
      )
    );
    return store
  }

}
export default configure(socketSettings);