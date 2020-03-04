import {createStore,applyMiddleware,compose} from 'redux';
import modules from 'store/modules';
import createSagaMiddleware from 'redux-saga';
import rootSaga from 'store/sagas';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {createLogger} from 'redux-logger';

const persistConfig = {
  key: 'root',
  storage
};
const enhancedReducer = persistReducer(persistConfig, modules);
const configure = () =>{
  const sagaMiddleware = createSagaMiddleware();
  // const logger = createLogger();
  const middleware =[ sagaMiddleware];
  const REDUX_DEVTOOLS = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ;
  const composeEnhancers =
    typeof window === 'object' && REDUX_DEVTOOLS 
    ? REDUX_DEVTOOLS({trace:true, traceLimit:25}) 
    : compose;
  const store = createStore(
    enhancedReducer,
    composeEnhancers(
      applyMiddleware(...middleware)
    )
  );
  const persistor = persistStore(store);
  sagaMiddleware.run(rootSaga);
  return {store, persistor};
}
export default configure;

