import {createStore,applyMiddleware} from 'redux';
import modules from 'store/modules';
import { createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from 'store/sagas';
import {socket as socketMiddleware} from 'store/socket';

const configure = () =>{
  const logger = createLogger();
  const sagaMiddleware =createSagaMiddleware();
  const middleware =[logger,sagaMiddleware,socketMiddleware];
  const store = createStore(
    modules,
    applyMiddleware(...middleware)
  );
  sagaMiddleware.run(rootSaga)
  return store;
}
export default configure;