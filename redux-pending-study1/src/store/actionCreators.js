import { bindActionCreators} from 'redux';
import * as counterActions from 'store/modules/counter';
import * as socketActions from 'store/modules/websocket';
import store from 'store';
const {dispatch} = store;

export const CounterActions =  bindActionCreators(counterActions,dispatch);
export const SocketActions =  bindActionCreators(socketActions,dispatch);