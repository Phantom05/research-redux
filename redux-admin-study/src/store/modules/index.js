import {combineReducers} from 'redux';
import login from './login';
import home from './home';
import dashboard from './dashboard';
import auth from './auth';

export default combineReducers({
  auth,
  home,
  login,
  dashboard
})