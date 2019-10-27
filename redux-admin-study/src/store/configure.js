import modules from './modules';
import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootSaga from 'store/sagas'
const sagaMiddleware = createSagaMiddleware();

const configure = () => {
  const logger = createLogger();
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      name: `Redux`,
      realtime: true, 
      trace: true, 
      traceLimit: 25
    }) || compose;
  const middleware = [ sagaMiddleware];
  // const middleware = [logger, sagaMiddleware];
  const store = createStore(
    modules,
    // applyMiddleware(...middleware)
    composeEnhancers(
      applyMiddleware(...middleware)
    )
  );
  sagaMiddleware.run(rootSaga);
  return store;
}


export default configure;