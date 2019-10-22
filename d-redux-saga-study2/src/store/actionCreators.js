import {bindActionCreators} from 'redux';
import * as socketActions from 'store/modules/websocket';
import * as actions from 'store/actions';
import store from 'store';

const {dispatch} = store;
export const Actions = bindActionCreators(actions, dispatch);
export const SocketActions = bindActionCreators(socketActions, dispatch);