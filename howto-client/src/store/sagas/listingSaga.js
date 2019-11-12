import { all, takeEvery, call } from 'redux-saga/effects';
import * as actions from 'store/actions';
import { 
  LISTING_RECENT_POSTS
} from 'store/actionSagas';




function* handleRecentPosts({payload:diff}){
  console.log(`>>> handleGetListBoard !!!`);

  LISTING_RECENT_POSTS.pending();
  // let {data,error} = yield call(LISTING_RECENT_POSTS.request,diff);
  // if(data && !error){
  //   LISTING_RECENT_POSTS.success(data)
  // }else{
  //   LISTING_RECENT_POSTS.failure();
  // }
}


export default function* () {
  yield all([
    takeEvery(actions.LISTING_GET_RECENT_POSTS,handleRecentPosts),
  ])
}