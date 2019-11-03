import {createAction} from 'redux-actions';

// type
export const BASE_LANDING_VIEW ='base/BASE_LANDING_VIEW';

export const BASE_BOARD_GET_MENU_REQUEST ='common/COMMON_BOARD_GET_MENU_REQUEST'; 
export const BASE_BOARD_GET_MENU_PENDING ='common/COMMON_BOARD_GET_MENU_PENDING'; 
export const BASE_BOARD_GET_MENU_SUCCESS ='common/COMMON_BOARD_GET_MENU_SUCCESS'; 
export const BASE_BOARD_GET_MENU_FAILURE ='common/COMMON_BOARD_GET_MENU_FAILURE'; 

export const AUTH_LOGIN_REQUEST = 'auth/AUTH_LOGIN_REQUEST';
export const AUTH_LOGIN_PENDING = 'auth/AUTH_LOGIN_PENDING';
export const AUTH_LOGIN_SUCCESS = 'auth/AUTH_LOGIN_SUCCESS';
export const AUTH_LOGIN_FAILURE = 'auth/AUTH_LOGIN_FAILURE';
export const AUTH_LOGIN_ALERT   = 'auth/AUTH_LOGIN_ALERT';

export const AUTH_REGISTER_REQUEST = 'auth/AUTH_REGISTER_REQUEST';
export const AUTH_REGISTER_PENDING = 'auth/AUTH_REGISTER_PENDING';
export const AUTH_REGISTER_SUCCESS = 'auth/AUTH_REGISTER_SUCCESS';
export const AUTH_REGISTER_FAILURE = 'auth/AUTH_REGISTER_FAILURE';

export const AUTH_LOGOUT_REQUEST = 'auth/AUTH_LOGOUT_REQUEST';
export const AUTH_LOGOUT_PENDING = 'auth/AUTH_LOGOUT_PENDING';
export const AUTH_LOGOUT_SUCCESS = 'auth/AUTH_LOGOUT_SUCCESS';
export const AUTH_LOGOUT_FAILURE = 'auth/AUTH_LOGOUT_FAILURE';

export const AUTH_TOKEN_REQUEST = 'auth/AUTH_TOKEN_REQUEST';
export const AUTH_TOKEN_PENDING = 'auth/AUTH_TOKEN_PENDING';
export const AUTH_TOKEN_SUCCESS = 'auth/AUTH_TOKEN_SUCCESS';
export const AUTH_TOKEN_FAILURE = 'auth/AUTH_TOKEN_FAILURE';



export const BOARD_GET_DATA_REQUEST = 'board/BOARD_GET_DATA_REQUEST';
export const BOARD_GET_DATA_PENDING = 'board/BOARD_GET_DATA_PENDING';
export const BOARD_GET_DATA_SUCCESS = 'board/BOARD_GET_DATA_SUCCESS';
export const BOARD_GET_DATA_FAILURE = 'board/BOARD_GET_DATA_FAILURE';

export const BOARD_VIEW_MODE_CHANGE = 'board/BOARD_VIEW_MODE_CHANGE';

export const BOARD_UPLOAD_REQUEST = 'board/BOARD_UPLOAD_REQUEST';
export const BOARD_UPLOAD_PENDING = 'board/BOARD_UPLOAD_PENDING';
export const BOARD_UPLOAD_SUCCESS = 'board/BOARD_UPLOAD_SUCCESS';
export const BOARD_UPLOAD_FAILURE = 'board/BOARD_UPLOAD_FAILURE';

export const WINDOW_PAGE = 'window/PAGE';

export const DASHBOARD_TITLE = 'dashboard/TITLE';


// actions
export const base_landing_view = createAction(BASE_LANDING_VIEW);

export const auth_login_request = createAction(AUTH_LOGIN_REQUEST);
export const auth_login_pending = createAction(AUTH_LOGIN_PENDING);
export const auth_login_success = createAction(AUTH_LOGIN_SUCCESS);
export const auth_login_failure = createAction(AUTH_LOGIN_FAILURE);
export const auth_login_alert   = createAction(AUTH_LOGIN_ALERT);

export const auth_register_request = createAction(AUTH_REGISTER_REQUEST);
export const auth_register_pending = createAction(AUTH_REGISTER_PENDING);
export const auth_register_success = createAction(AUTH_REGISTER_SUCCESS);
export const auth_register_failure = createAction(AUTH_REGISTER_FAILURE);


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

export const board_get_date_request = createAction(BOARD_GET_DATA_REQUEST);
export const board_get_date_pending = createAction(BOARD_GET_DATA_PENDING);
export const board_get_date_success = createAction(BOARD_GET_DATA_SUCCESS);
export const board_get_date_failure = createAction(BOARD_GET_DATA_FAILURE);

export const board_view_mode_change = createAction(BOARD_VIEW_MODE_CHANGE);


export const board_upload_request = createAction(BOARD_UPLOAD_REQUEST); 
export const board_upload_pending = createAction(BOARD_UPLOAD_PENDING); 
export const board_upload_success = createAction(BOARD_UPLOAD_SUCCESS); 
export const board_upload_failure = createAction(BOARD_UPLOAD_FAILURE); 


export const base_board_get_menu_request =createAction(BASE_BOARD_GET_MENU_REQUEST); 
export const base_board_get_menu_pending =createAction(BASE_BOARD_GET_MENU_PENDING);
export const base_board_get_menu_success =createAction(BASE_BOARD_GET_MENU_SUCCESS);
export const base_board_get_menu_failure =createAction(BASE_BOARD_GET_MENU_FAILURE);



