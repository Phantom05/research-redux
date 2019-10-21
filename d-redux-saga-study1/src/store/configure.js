import modules from './modules';
import {createStore,applyMiddleware} from 'redux';
import createSagaMiddleware  from 'redux-saga';
import rootSata from 'store/middleware/sagas';

const configure = ()=>{
  const sagaMiddleware = createSagaMiddleware ();
  const middleware = [sagaMiddleware];
  const store = createStore(
    modules,
    applyMiddleware(...middleware)
  );
  //store의 초기화가 되기전에 saga가 시작되는 경우가있어서 아래와 같이 store가 완료 된 다음 run으로 실행 시켜 줍니다.
  sagaMiddleware.run(rootSata)
  return store;
}

export default configure;