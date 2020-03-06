
// NOTE: offline
import {createStore,applyMiddleware,compose} from 'redux';
import modules from 'store/modules';
import createSagaMiddleware from 'redux-saga';
import rootSaga from 'store/sagas';
import {createLogger} from 'redux-logger';
import { offline } from '@redux-offline/redux-offline';
import offlineConfig from '@redux-offline/redux-offline/lib/defaults';
import { autoRehydrate } from 'redux-phoenix';

const configure = () =>{
  const sagaMiddleware = createSagaMiddleware();
  const logger = createLogger();

  // const {
  //   middleware: offlineMiddleware,
  //   enhanceReducer,
  //   enhanceStore
  // } = createOffline(offlineConfig);


  const middleware =[ logger,sagaMiddleware];

  // const offMiddleware = applyMiddleware(...middleware, offlineMiddleware);

  const REDUX_DEVTOOLS = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ;
  const composeEnhancers =
    typeof window === 'object' && REDUX_DEVTOOLS 
    ? REDUX_DEVTOOLS({trace:true, traceLimit:25}) 
    : compose;
  let store = createStore(
    // enhanceReducer(modules),
    modules,
    compose(
      // enhanceStore,
      applyMiddleware(...middleware),
      // offMiddleware,
      autoRehydrate,
      offline(offlineConfig),
      // localIds({reducer: modules}),
    )
  );


  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./modules/index').default;
      console.log(nextRootReducer,'nextRootReducer');
      store.replaceReducer(nextRootReducer);
    })
  }
  
  sagaMiddleware.run(rootSaga);

  return { store };
}

// export default configure();





































// NOTE: offline

// // NOTE: persist
// import {createStore,applyMiddleware,compose} from 'redux';
// import modules from 'store/modules';
// import createSagaMiddleware from 'redux-saga';
// import rootSaga from 'store/sagas';
// import storage from 'redux-persist/lib/storage';
// import createEncryptor from 'redux-persist-transform-encrypt'
// import { persistStore, persistReducer, createMigrate  } from 'redux-persist';
// import {createLogger} from 'redux-logger';
// import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
// import { autoRehydrate } from 'redux-phoenix';
// import { storage as localStorage} from 'lib/library';
// import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

// const migrations = {
//   0: (state) => {
//     return {
//       ...state,
//       device: undefined   
//     }
//   },
//   1: (state) => {
//     return {
//       ...state,
//       device: state.device
//     }
//   }
// }
// const encryptor = createEncryptor({
//   secretKey: 'DOF_front',
//   onError: function(error) {}
// })

// const persistConfig = {
//   key: 'root',
//   storage,
//   version:1,
//   // transforms: [encryptor],
//   migrate: createMigrate(migrations, { debug: false }),
//   stateReconciler: hardSet 
// };


// const enhancedReducer = persistReducer(persistConfig, modules);
// const configure = () =>{
  
//   const sagaMiddleware = createSagaMiddleware();
//   const logger = createLogger();
//   const middleware =[ logger,sagaMiddleware];
//   const REDUX_DEVTOOLS = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ;
//   const composeEnhancers =
//     typeof window === 'object' && REDUX_DEVTOOLS 
//     ? REDUX_DEVTOOLS({trace:true, traceLimit:25}) 
//     : compose;
//   let store = createStore(
//     enhancedReducer,
//     composeEnhancers(
//       applyMiddleware(...middleware),
//       autoRehydrate
//     )
//   );

//   const persistor = persistStore(store);
  
//   sagaMiddleware.run(rootSaga);
//   return {store, persistor};
// }

// export default configure();



//   // store.subscribe(() =>{
//     // console.log('끙');
//     // const nextRootReducer = require('./modules').default
//     //   store.replaceReducer(
//     //     persistReducer(persistConfig, nextRootReducer)
//     //   )
//     // const rEnhancedReducer = persistReducer(persistConfig, modules);
//     // const rStore = createStore(
//     //   rEnhancedReducer,
//     //   composeEnhancers(
//     //     applyMiddleware(...middleware),
//     //     autoRehydrate
//     //   )
//     // );
//     // store = rStore;
//   // })

//   // if(localStorage.get('test')){
//     // console.log('스토어 체인쥐!!!');
//     // const rEnhancedReducer = persistReducer(persistConfig, modules);
//     // const rStore = createStore(
//     //   modules,
//     //   composeEnhancers(
//     //     applyMiddleware(...middleware),
//     //   )
//     // );
//     // store = rStore;
//   // }

//     // if (module.hot) {
//     // console.log('스투뤠스~');
//     // module.hot.accept('./modules', () => {
//     //   const nextRootReducer = require('./modules').default
//     //   store.replaceReducer(
//     //     persistReducer(persistConfig, nextRootReducer)
//     //   )
//     // })
//   // }

//     // store.subscribe(()=>{
//   //   localStorage.set('test',store.getState());
//   //   console.log(modules);
//   //   console.log(store,'store');
//   // });
//   // NOTE: persist