import {createAction} from 'redux-actions';


// home
export const HOME_GET_RESULT = 'HOME_GET_RESULT';

export const home_get_result = createAction(HOME_GET_RESULT);



// saga
export const SAGA_GET_RESULT  = 'SAGA_GET_RESULT';
export const SAGA_WS_CONNECT  = 'SAGA_WS_CONNECT';
export const SAGA_WS_REQUEST  = 'SAGA_WS_REQUEST';
export const SAGA_WS_RESPONSE = 'SAGA_WS_RESPONSE';
export const SAGA_WS_ERROR    = 'SAGA_WS_ERROR';

export const saga_get_result  = createAction(SAGA_GET_RESULT);
export const saga_ws_connect  = createAction(SAGA_WS_CONNECT);
export const saga_ws_request  = createAction(SAGA_WS_REQUEST);
export const saga_ws_response = createAction(SAGA_WS_RESPONSE);
export const saga_ws_error    = createAction(SAGA_WS_ERROR);