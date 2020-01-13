import {createStore,applyMiddleware,compose} from 'redux';
import modules from 'store/modules';
import createSagaMiddleware from 'redux-saga';
import rootSaga from 'store/sagas';
import {createLogger} from 'redux-logger';

const configure = () =>{
  const logger = createLogger();
  const sagaMiddleware = createSagaMiddleware();
  const middleware =[logger,sagaMiddleware];
  const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    trace:true,
    traceLimit:25
  }) 
  : compose;
  const store = createStore(
    modules,
    composeEnhancers(
      applyMiddleware(...middleware)
    )
  );
  sagaMiddleware.run(rootSaga);
  return store;
}
export default configure;


// const middleware =[sagaMiddleware];
// applyMiddleware(...middleware)