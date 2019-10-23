import modules from 'store/modules';
import {createStore,applyMiddleware,compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from 'store/sagas';

const configure = () =>{
  const sagaMiddleware = createSagaMiddleware();
  const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;
  const middleware =[sagaMiddleware];
  const store = createStore(
    modules,
    composeEnhancers(
      applyMiddleware(...middleware)
    )
    
  );
  sagaMiddleware.run(rootSaga)
  return store;
}
export default configure