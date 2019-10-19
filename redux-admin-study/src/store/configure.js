import modules from './modules';
import {createStore, applyMiddleware, compose} from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import mySaga from './sagas'
const sagaMiddleware = createSagaMiddleware();

const configure =() =>{
  const logger = createLogger();
  let devTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  const composeEnhancers = devTools || compose;
  const middleware = [logger,sagaMiddleware];
  const store =  createStore(
    modules,
    composeEnhancers(
      applyMiddleware(...middleware)
    )
  );
  sagaMiddleware.run(mySaga)
  return store;
}

export default configure;