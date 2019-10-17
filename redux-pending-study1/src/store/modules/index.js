import { combineReducers } from 'redux';
import counter from './counter';
import {penderReducer as pender}  from 'redux-pender';

export default combineReducers({
  counter,
  pender
})