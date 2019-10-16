  
import { createStore, applyMiddleware } from 'redux';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga'
import modules, {rootSaga} from './modules';
const logger = createLogger();

// import mySaga from './sagas';

//saga 미들웨어 생성
const sagaMiddleware = createSagaMiddleware();
// 스토어에 mount 합니다.

const configure = () => {
  const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  const store = createStore(
    modules, 
    devTools,
    applyMiddleware(logger,sagaMiddleware)
  );

  return store;
};

sagaMiddleware.run(rootSaga)

export default configure;