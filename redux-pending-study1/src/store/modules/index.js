import { combineReducers } from 'redux';
import counter from './counter';
import navigation from './navigation';
import stage from './stage';
import window from './window';
import controller from './counter';

import websocket from './websocket';
import {penderReducer as pender}  from 'redux-pender';



export default combineReducers({
  websocket,
  window,
  counter,
  navigation,
  stage,
  controller,
  pender
})