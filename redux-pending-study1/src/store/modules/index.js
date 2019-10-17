import { combineReducers } from 'redux';
import counter from './counter';

import websocket from './websocket';
import {penderReducer as pender}  from 'redux-pender';



export default combineReducers({
  counter,
  websocket,
  pender
})