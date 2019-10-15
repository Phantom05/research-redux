import {bindActionCreators} from 'redux';
import * as counterActions from 'store/modules/counter';
import * as postActions from 'store/modules/post';

import store from './index';
const {dispatch} = store;
export const CounterActions = bindActionCreators(counterActions,dispatch);
export const PostActions  = bindActionCreators(postActions,dispatch);