import {combineReducers} from 'redux';
import counter from 'store/modules/counter';
import users from 'store/modules/users';

export default combineReducers({
  counter,users
})