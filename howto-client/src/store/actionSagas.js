import * as API from 'lib/api';
import { Actions } from 'store/actionCreators';
import store from 'store';

export function makeActionCreator(actionType,payload) {
  return store.dispatch({ type: actionType, payload:payload })
}
export function makeAsyncCreateActions(actions){
  const ActionsFunction = (payload)=>makeActionCreator(actions.INDEX,payload);
  return (api)=>{
    if(typeof api !== 'function') new Error('api must be Function');
    ActionsFunction.request = (data)=>  api(data);
    ActionsFunction.pending = (payload)=>makeActionCreator(actions.PENDING,payload);
    ActionsFunction.success = (payload)=>makeActionCreator(actions.SUCCESS,payload);
    ActionsFunction.failure = (payload)=>makeActionCreator(actions.FAILURE,payload);
    return ActionsFunction
  }
}

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


