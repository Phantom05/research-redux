import {createStore,applyMiddleware,compose} from 'redux';
import modules from 'store/modules';
import createSagaMiddleware from 'redux-saga';
import rootSaga from 'store/sagas';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// import {createLogger} from 'redux-logger';

const reTryMiddleware = store => next => action => {
  // 현재 스토어 상태값 기록
  // console.log('현재 상태', store.getState());
  // console.log('Actions :', action);
  // 액션을 다음 미들웨어, 혹은 리듀서로 넘김
  const result = next(action);
  // 액션 처리 후의 스토어 상태 기록
  // console.log('다음 상태', store.getState(),'\n');

  return result;
}

const persistConfig = {
  key: 'root',
  storage
};
const enhancedReducer = persistReducer(persistConfig, modules);
const configure = () =>{
  const sagaMiddleware = createSagaMiddleware();
  const middleware =[reTryMiddleware, sagaMiddleware];
  const REDUX_DEVTOOLS = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ;
  const composeEnhancers =
    typeof window === 'object' && REDUX_DEVTOOLS ? REDUX_DEVTOOLS({trace:true, traceLimit:25}) : compose;
  const store = createStore(
    modules,
    // enhancedReducer,
    composeEnhancers(
      applyMiddleware(...middleware)
    )
  );
  const persistor = persistStore(store);
  sagaMiddleware.run(rootSaga);
  return store
  // return {store, persistor};
}
export default configure;


  // const logger = createLogger();
  // const middleware =[logger,sagaMiddleware];
// const middleware =[sagaMiddleware];
// applyMiddleware(...middleware)