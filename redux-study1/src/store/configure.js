import {createStore , applyMiddleware} from 'redux';
import module from './modules';
// import loggerMiddleware from 'lib/loggerMiddleware';
import {createLogger} from 'redux-logger';
import ReduxThunk from 'redux-thunk';

const configure = () =>{
  // const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
  const logger = createLogger();
  const store = createStore(
    module,
    applyMiddleware(logger,ReduxThunk)

  )
  return store
}
export default configure;
