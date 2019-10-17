

import modules from './modules';
import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import ReduxThunk from 'redux-thunk'
import penderMiddleware from 'redux-pender';

const configure = () =>{

  const logger = createLogger();
  const store = createStore(
    modules,
    applyMiddleware(
      logger,
      ReduxThunk,
      penderMiddleware()
    )
  );

  return store
}
export default configure;