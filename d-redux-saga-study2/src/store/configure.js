import {createStore,applyMiddleware,compose} from 'redux';
import modules from 'store/modules';
// import { createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from 'store/sagas';

const configure = () =>{
  const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;
  // const logger = createLogger();
  const sagaMiddleware =createSagaMiddleware();
  const middleware =[sagaMiddleware];
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