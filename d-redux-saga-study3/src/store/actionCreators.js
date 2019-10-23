import {bindActionCreators} from 'redux';
import store from 'store';
import * as actions from 'store/actions';

const {dispatch} = store;
export const Actions  = bindActionCreators(actions,dispatch);