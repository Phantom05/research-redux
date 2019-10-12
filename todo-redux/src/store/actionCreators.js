import { bindActionCreators  } from 'redux';
import * as counterActions from './modules/counter';
import * as todoActions from './modules/todo';
import * as crudActions from './modules/crud';

import store from './index';
const {dispatch} = store;
export const CounterActions = bindActionCreators(counterActions,dispatch);
export const TodoActions = bindActionCreators(todoActions,dispatch);
export const CrudActions = bindActionCreators(crudActions,dispatch);