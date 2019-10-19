import {createStore,applyMiddleware, compose} from 'redux';
import modules from './modules';
import {createLogger} from 'redux-logger';
import {websocketMiddleware} from 'store/middleware';
import { createDynamicMiddlewares } from 'redux-dynamic-middlewares'
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
    ),
    
  );

  return store;
}
export default configure


// import {createStore,applyMiddleware, compose} from 'redux';
// import modules from './modules';
// import {createLogger} from 'redux-logger';
// import {websocketMiddleware} from 'store/middleware';
// import dynamicMiddlewares,{addMiddleware} from 'redux-dynamic-middlewares';

// const configure =() =>{
//   let logger = createLogger();
//   let middleware = [
//     logger,
//     dynamicMiddlewares
//   ];
//   // const composeEnhancers = devTools || compose;
//   // let devTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
//   let store = createStore(
//     modules,
//     applyMiddleware(...middleware)
//   );
//   addMiddleware(websocketMiddleware)

//   return store;
// }
// export default configure