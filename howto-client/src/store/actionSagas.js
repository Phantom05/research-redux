import * as API from 'lib/api';
import {Actions} from 'store/actionCreators';

export const HOME_TEST_SAGA  ={
  request:(payload)=>API.postGetBoardMenu(payload),
  pending:()=>Actions.auth_login_pending(),
  success:(data)=>Actions.auth_login_success(data),
  failure:(data)=>Actions.auth_login_failure(data),
}
export const LISTING_RECENT_POSTS ={
  request:(payload)=>API.getRecentsPosts(payload),
  pending:()=>Actions.listing_get_recent_posts_pending(),
  success:(data)=>Actions.listing_get_recent_posts_success(data),
  failure:(data)=>Actions.listing_get_recent_posts_failure(data),
}