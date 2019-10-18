import {combineReducers} from 'redux';
import window from './window';
import websocket from './websocket';

export default combineReducers({
  window,
  websocket
})