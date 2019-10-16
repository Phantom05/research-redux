
import {createStore, applyMiddleware} from 'redux';
import module from './modules';
import {createLogger} from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import penderMiddleware from 'redux-pender';

const configure = () =>{
  
  const logger = createLogger()
  const store = createStore(
    module,
    applyMiddleware(
      logger,
      ReduxThunk,
      penderMiddleware()
    )
  )

  return store
}
export default  configure;