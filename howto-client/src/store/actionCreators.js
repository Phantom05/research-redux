import {bindActionCreators} from 'redux';
// import * as actions from 'store/actions';
import * as actions from 'store/actions';
import store from 'store';

const {dispatch} = store;
export const Actions  = bindActionCreators(actions,dispatch);
// export const Actions = {}