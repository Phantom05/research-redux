import {combineReducers} from 'redux';
import home from './home';
import counter from './counter';
import websocket from './websocket';

export default combineReducers({
  home,counter,websocket
})