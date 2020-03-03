import {bindActionCreators} from 'redux';
import * as actions from 'store/actions';
import configureStore from 'store';

// export const {dispatch} = configureStore.store;
export const {dispatch} = configureStore;
export const Actions = bindActionCreators(actions, dispatch);


