import {bindActionCreators} from 'redux';
import * as actions from 'store/actions';
import store from 'store';

console.log(store);
// export const {dispatch} = configureStore.store;
export const {dispatch} = store;
export const Actions = bindActionCreators(actions, dispatch);


