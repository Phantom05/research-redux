import { combineReducers } from 'redux';
import counter from './counter';
import navigation from './navigation';
import stage from './stage';
import controller from './counter';

import websocket from './websocket';
import {penderReducer as pender}  from 'redux-pender';



export default combineReducers({
  websocket,
  counter,
  navigation,
  stage,
  controller,
  pender
})