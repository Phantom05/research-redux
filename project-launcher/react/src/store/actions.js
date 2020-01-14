import {createAction} from 'redux-actions';

export const BASE_EXIT_LANDING       = 'base/BASE_EXIT_LANDING';
export const BASE_ENTER_LANDING      = 'base/BASE_ENTER_LANDING';

export const base_exit_landing   = createAction(BASE_EXIT_LANDING);
export const base_enter_landing  = createAction(BASE_ENTER_LANDING);

export const AUTH_TOKEN_REQUEST = 'signin/AUTH_TOKEN_REQUEST';
export const auth_token_request = createAction(AUTH_TOKEN_REQUEST);

export const AUTH_SIGNIN_REQUEST = 'signin/AUTH_SIGNIN_REQUEST';
export const AUTH_SIGNIN_PENDING = 'signin/AUTH_SIGNIN_PENDING';
export const AUTH_SIGNIN_SUCCESS = 'signin/AUTH_SIGNIN_SUCCESS';
export const AUTH_SIGNIN_FAILURE = 'signin/AUTH_SIGNIN_FAILURE';

export const auth_signin_request       = createAction(AUTH_SIGNIN_REQUEST);
export const auth_signin_pending       = createAction(AUTH_SIGNIN_PENDING);
export const auth_signin_success       = createAction(AUTH_SIGNIN_SUCCESS);
export const auth_signin_failure       = createAction(AUTH_SIGNIN_FAILURE);


export const AUTH_SIGNOUT_REQUEST = 'signin/AUTH_SIGNOUT_REQUEST';
export const AUTH_SIGNOUT_PENDING = 'signin/AUTH_SIGNOUT_PENDING';
export const AUTH_SIGNOUT_SUCCESS = 'signin/AUTH_SIGNOUT_SUCCESS';
export const AUTH_SIGNOUT_FAILURE = 'signin/AUTH_SIGNOUT_FAILURE';

export const auth_signout_request       = createAction(AUTH_SIGNOUT_REQUEST);
export const auth_signout_pending       = createAction(AUTH_SIGNOUT_PENDING);
export const auth_signout_success       = createAction(AUTH_SIGNOUT_SUCCESS);
export const auth_signout_failure       = createAction(AUTH_SIGNOUT_FAILURE);




