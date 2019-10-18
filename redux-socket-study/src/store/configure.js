import {createStore,applyMiddleware} from 'redux';
import modules from './modules';
import {createLogger} from 'redux-logger';
import {websocketMiddleware} from 'store/middleware';

const configure =() =>{

  let logger = createLogger();
  let middleware = [
    logger,
    websocketMiddleware
  ];
  let store = createStore(
    modules,
    applyMiddleware(...middleware)
  );

  return store;
}
export default configure