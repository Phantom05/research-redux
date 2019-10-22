import {combineReducers} from 'redux';
import counter from 'store/modules/counter';
import users from 'store/modules/users';
import home from 'store/modules/home';

export default combineReducers({
  counter,users,home
})