import {bindActionCreators} from 'redux';
// import {store} from 'store';
import {store} from '../Root';
import * as actions from 'store/actions';

export const {dispatch} = store;
export const Actions = bindActionCreators(actions, dispatch);


