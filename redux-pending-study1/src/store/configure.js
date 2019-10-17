

import modules from './modules';
import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';


const configure = () =>{

  const logger = createLogger();
  const store = createStore(
    modules,
    applyMiddleware(logger)
  );

  return store
}
export default configure;