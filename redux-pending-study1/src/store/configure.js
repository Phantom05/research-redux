

import modules from './modules';
import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import ReduxThunk from 'redux-thunk'
import penderMiddleware from 'redux-pender';
import {socketMiddleware} from 'store/modules/websocket';


const  configure = (callback) =>{
  const logger = createLogger();
  const middleware = [
    logger,
    ReduxThunk,
    socketMiddleware(),
    penderMiddleware()
  ];
  const store =  createStore(
    modules,
    applyMiddleware( ...middleware)
  );
  return store

}
export default configure;