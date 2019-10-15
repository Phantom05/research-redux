import {createStore} from 'redux';
import module from './modules';

const configure = () =>{
  const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
  const store = createStore(
    module,
    devTools

  )
  return store
}
export default configure