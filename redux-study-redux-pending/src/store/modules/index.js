import {combineReducers} from 'redux';
import post from './post';
import{ penderReducer} from 'redux-pender';
export default combineReducers({
  post,
  pender:penderReducer
})