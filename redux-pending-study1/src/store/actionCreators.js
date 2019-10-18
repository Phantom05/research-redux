import { bindActionCreators} from 'redux';
import * as reducerActions from 'store/actions';
import store from 'store';
const {dispatch} = store;

export const ReducerActions =  bindActionCreators(reducerActions,dispatch);
