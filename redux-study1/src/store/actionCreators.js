import {bindActionCreators} from 'redux';
import * as counteractions from 'store/modules/counter';

import store from './index';
const {dispatch} = store;
export const CounterActions = bindActionCreators(counteractions,dispatch)