import {createStore,applyMiddleware,compose} from 'redux';
import modules from 'store/modules';
import createSagaMiddleware from 'redux-saga';
import rootSaga from 'store/sagas';
import storage from 'redux-persist/lib/storage';
import createEncryptor from 'redux-persist-transform-encrypt'
import { persistStore, persistReducer, createMigrate  } from 'redux-persist';
import {createLogger} from 'redux-logger';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { autoRehydrate } from 'redux-phoenix';

const migrations = {
  0: (state) => {
    return {
      ...state,
      device: undefined   
    }
  },
  1: (state) => {
    return {
      ...state,
      device: state.device
    }
  }
}
const encryptor = createEncryptor({
  secretKey: 'DOF_front',
  onError: function(error) {}
})

const persistConfig = {
  key: 'root',
  storage,
  version:1,
  transforms: [encryptor],
  migrate: createMigrate(migrations, { debug: false }),
  stateReconciler: hardSet 
};


const enhancedReducer = persistReducer(persistConfig, modules);
const configure = () =>{
  
  const sagaMiddleware = createSagaMiddleware();
  const logger = createLogger();
  const middleware =[ logger,sagaMiddleware];
  const REDUX_DEVTOOLS = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ;
  const composeEnhancers =
    typeof window === 'object' && REDUX_DEVTOOLS 
    ? REDUX_DEVTOOLS({trace:true, traceLimit:25}) 
    : compose;
  const store = createStore(
    enhancedReducer,
    composeEnhancers(
      applyMiddleware(...middleware),
      autoRehydrate
    )
  );
  const persistor = persistStore(store);
  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    console.log('스투뤠스~');
    module.hot.accept('./modules', () => {
      const nextRootReducer = require('./modules').default
      store.replaceReducer(
        persistReducer(persistConfig, nextRootReducer)
      )
    })
  }

  return {store, persistor};
}

export default configure();

