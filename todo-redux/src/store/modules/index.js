import { combineReducers } from 'redux';
import counter from './counter';
import todo from './todo';
import crud from './crud'

export default combineReducers({
  counter,
  todo,
  crud
});