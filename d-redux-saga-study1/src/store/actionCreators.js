import {bindActionCreators} from 'redux';
import * as counterActions from 'store/modules/counter';
import * as usersActions from 'store/modules/users';
import store from 'store';

const {dispatch} = store; 
export const CounterActions = bindActionCreators(counterActions,dispatch);
export const UsersActions = bindActionCreators(usersActions,dispatch);