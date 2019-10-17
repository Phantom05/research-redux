import { bindActionCreators} from 'redux';
import * as counterActions from 'store/modules/counter';

import store from 'store';
const {dispatch} = store;

export const CounterActions =  bindActionCreators(counterActions,dispatch)