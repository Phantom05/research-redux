import {bindActionCreators} from 'redux';
import * as counterActions from 'store/modules/counter';
import * as usersActions from 'store/modules/users';
import * as homeActions from 'store/modules/home';

import store from 'store';

const {dispatch} = store; 
export const CounterActions = bindActionCreators(counterActions,dispatch);
export const UsersActions = bindActionCreators(usersActions,dispatch);
export const HomeActions = bindActionCreators(homeActions,dispatch);
