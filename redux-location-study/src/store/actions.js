import {createAction} from 'redux-actions';
// import {makeAsyncCreateActions,makeAsyncActions} from 'lib/utils';
// import * as API from 'lib/api';

// NOTE: Actions
export const BASE_EXIT_LANDING  = 'base/BASE_EXIT_LANDING';
export const base_exit_landing  = createAction(BASE_EXIT_LANDING);

export const BASE_ENTER_LANDING = 'base/BASE_ENTER_LANDING';
export const base_enter_landing = createAction(BASE_ENTER_LANDING);
 

// // NOTE: Sagas
// export const TEST       = makeAsyncActions('base/TEST');
// export const TEST_SAGAS = makeAsyncCreateActions(TEST)(API.Test.getTest);

// export const TEST_DETAIL       = makeAsyncActions('base/TEST_DETAIL');
// export const TEST_DETAIL_SAGAS = makeAsyncCreateActions(TEST_DETAIL)(API.Test.getTestDetail);


