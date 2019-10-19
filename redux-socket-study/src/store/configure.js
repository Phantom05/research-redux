import {createStore,applyMiddleware, compose} from 'redux';
import modules from './modules';
import {createLogger} from 'redux-logger';
import {websocketMiddleware} from 'store/middleware';

const configure =() =>{
  let logger = createLogger();
  let middleware = [
    logger,
    websocketMiddleware
  ];
  let devTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  const composeEnhancers = devTools || compose;
  let store = createStore(
    modules,
    composeEnhancers(
      applyMiddleware(...middleware)
    )
  );

  return store;
}
export default configure