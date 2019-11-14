import * as API from 'lib/api';
import { Actions } from 'store/actionCreators';
import store from 'store';

export const HOME_TEST_SAGA = {
  request: (payload) => API.postGetBoardMenu(payload),
  pending: () => Actions.auth_login_pending(),
  success: (data) => Actions.auth_login_success(data),
  failure: (data) => Actions.auth_login_failure(data),
}
export const LISTING_RECENT_POSTS = {
  request: (payload) => API.getRecentsPosts(payload),
  pending: () => Actions.listing_get_recent_posts_pending(),
  success: (data) => Actions.listing_get_recent_posts_success(data),
  failure: (data) => Actions.listing_get_recent_posts_failure(data),
}


function reduxHelper(actionName, fn) {
  if (typeof actionName !== 'string') {
    throw new Error('actionName must be a string')
  }
  if (typeof fn !== 'function') {
    throw new Error('fn must be a function')
  }
  const actionNameUpper = actionName.toUpperCase()
  const actionPending = actionNameUpper + '_PENDING';
  const actionRequest = actionNameUpper + '_REQUEST';
  const actionSuccess = actionNameUpper + '_SUCCESS';
  const actionFailure = actionNameUpper + '_FAILURE';


  store.dispatch({type:actionPending})

  return {
    actionPending,
    actionRequest,
    actionSuccess,
    actionFailure
  }
}

console.log(
  reduxHelper('LISTING_RECENT_POSTS',()=>{

  })
);