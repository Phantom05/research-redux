import {combineReducers} from 'redux';
import home from './home';
import dashboard from './dashboard';
import auth from './auth';
import base from './base';

export default combineReducers({
  base,
  auth,
  home,
  dashboard
})