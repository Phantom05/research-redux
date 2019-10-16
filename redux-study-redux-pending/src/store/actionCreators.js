import {bindActionCreators} from 'redux';
import * as postActions from './modules/post';


import store from 'store/index';
const {dispatch} = store;
export const PostActions = bindActionCreators(postActions,dispatch);