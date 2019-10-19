import {bindActionCreators} from 'redux';
import * as authActions from './modules/auth';
import * as homeActions from './modules/home';
import * as dashboardActions from './modules/dashboard';
import store from 'store';

const {dispatch} = store;

export const AuthActions = bindActionCreators(authActions,dispatch);
export const HomeActions = bindActionCreators(homeActions,dispatch);
export const DashboardActions = bindActionCreators(dashboardActions,dispatch);
