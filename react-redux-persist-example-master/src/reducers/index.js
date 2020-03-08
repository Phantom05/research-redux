

import { combineReducers } from 'redux';
import main from './main'
import counter from './counter'
// import 

const appReducer = combineReducers({
  main,
  counter
});

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGGED_OUT') {
    const { users, comment } = state;
    console.log(storage);
    // storage.removeItem('persist:root')
    state = { users, comment };
  }

  console.log(appReducer);
  return appReducer(state, action);
};

export default rootReducer;
