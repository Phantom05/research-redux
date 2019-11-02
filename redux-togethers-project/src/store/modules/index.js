import {combineReducers} from 'redux';
import home from './home';
import dashboard from './dashboard';
import auth from './auth';
import base from './base';
import board from './board';

export default combineReducers({
  base,
  auth,
  board,
  home,
  dashboard
})