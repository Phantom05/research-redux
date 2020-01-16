import {createAction} from 'redux-actions';
import {makeAsyncCreateActions,makeAsyncActions} from 'lib/utils';
import * as API from 'lib/api';

export const BASE_EXIT_LANDING  = 'base/BASE_EXIT_LANDING';
export const BASE_ENTER_LANDING = 'base/BASE_ENTER_LANDING';
export const base_exit_landing  = createAction(BASE_EXIT_LANDING);
export const base_enter_landing = createAction(BASE_ENTER_LANDING);



export const AUTH_TOKEN       = makeAsyncActions('signin/AUTH_TOKEN');
export const AUTH_TOKEN_SAGAS = makeAsyncCreateActions(AUTH_TOKEN)(API.postToken);

export const AUTH_SIGNIN       = makeAsyncActions('signin/AUTH_SIGNIN');
export const AUTH_SIGNIN_SAGAS = makeAsyncCreateActions(AUTH_SIGNIN)(API.postSignin);

export const AUTH_SIGNOUT       = makeAsyncActions('signout/AUTH_SIGNOUT');
export const AUTH_SIGNOUT_SAGAS = makeAsyncCreateActions(AUTH_SIGNOUT)(API.postSignOut);