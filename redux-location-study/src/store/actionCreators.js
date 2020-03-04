import {bindActionCreators} from 'redux';
import configureStore from 'store';
import * as actions from 'store/actions';


export const {dispatch} = configureStore.store;
export const Actions = bindActionCreators(actions, dispatch);


