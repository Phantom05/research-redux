import { bindActionCreators } from 'redux';
import * as windowActions from './modules/window';
import * as socketActions from './modules/websocket';
import store from 'store';


const {dispatch} = store;
export const WindowActions = bindActionCreators(windowActions,dispatch);
export const SocketActions = bindActionCreators(socketActions,dispatch);