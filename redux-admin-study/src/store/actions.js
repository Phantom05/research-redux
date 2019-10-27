import {createAction} from 'redux-actions';

// type
export const BASE_LANDING_VIEW ='base/BASE_LANDING_VIEW';

export const AUTH_LOGIN_REQUEST = 'auth/AUTH_LOGIN_REQUEST';
export const AUTH_LOGIN_PENDING = 'auth/AUTH_LOGIN_PENDING';
export const AUTH_LOGIN_SUCCESS = 'auth/AUTH_LOGIN_SUCCESS';
export const AUTH_LOGIN_FAILURE = 'auth/AUTH_LOGIN_FAILURE';
export const AUTH_LOGIN_ALERT   = 'auth/AUTH_LOGIN_ALERT';

export const AUTH_LOGOUT_REQUEST = 'auth/AUTH_LOGOUT_REQUEST';
export const AUTH_LOGOUT_PENDING = 'auth/AUTH_LOGOUT_PENDING';
export const AUTH_LOGOUT_SUCCESS = 'auth/AUTH_LOGOUT_SUCCESS';
export const AUTH_LOGOUT_FAILURE = 'auth/AUTH_LOGOUT_FAILURE';

export const AUTH_TOKEN_REQUEST = 'auth/AUTH_TOKEN_REQUEST';
export const AUTH_TOKEN_PENDING = 'auth/AUTH_TOKEN_PENDING';
export const AUTH_TOKEN_SUCCESS = 'auth/AUTH_TOKEN_SUCCESS';
export const AUTH_TOKEN_FAILURE = 'auth/AUTH_TOKEN_FAILURE';

// TEST
export const SET_LOGGED_INFO = 'logged/SET_LOGGED_INFO';
export const CHECK_STATUS = 'status/CHECK_STATUS';


export const WINDOW_PAGE = 'window/PAGE';

export const DASHBOARD_TITLE = 'dashboard/TITLE';


// actions
export const base_landing_view = createAction(BASE_LANDING_VIEW);

export const auth_login_request = createAction(AUTH_LOGIN_REQUEST);
export const auth_login_pending = createAction(AUTH_LOGIN_PENDING);
export const auth_login_success = createAction(AUTH_LOGIN_SUCCESS);
export const auth_login_failure = createAction(AUTH_LOGIN_FAILURE);
export const auth_login_alert   = createAction(AUTH_LOGIN_ALERT);

export const auth_logout_request = createAction(AUTH_LOGOUT_REQUEST);
export const auth_logout_pending = createAction(AUTH_LOGOUT_PENDING);
export const auth_logout_success = createAction(AUTH_LOGOUT_SUCCESS);
export const auth_logout_failure = createAction(AUTH_LOGOUT_FAILURE);

export const auth_token_request = createAction(AUTH_TOKEN_REQUEST);
export const auth_token_pending = createAction(AUTH_TOKEN_PENDING);
export const auth_token_success = createAction(AUTH_TOKEN_SUCCESS);
export const auth_token_failure = createAction(AUTH_TOKEN_FAILURE);


export const window_page = createAction(WINDOW_PAGE);

export const dashboard_title = createAction(DASHBOARD_TITLE);

export const set_logged_info = createAction(SET_LOGGED_INFO);
export const check_status = createAction(CHECK_STATUS);