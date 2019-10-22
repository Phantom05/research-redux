import { call, put, fork, takeEvery, all, delay } from 'redux-saga/effects';
import { 
  GET_USER,
  GET_POST,
  getUser, 
  getPost } from 'store/modules/users';

/**
 * Get User Api 
 */
function* getUserResult({ payload }) {
  const { data, error } = yield call(getUser.request, payload);
  if (data && !error) {
    yield put(getUser.success(data))
  } else {
    yield put(getUser.failure())
  }
}
/**
 * Get Post Api
 * @param {*} param0 
 */
function* getPostResult({ payload }) {
  const { data, error } = yield call(getPost.request, payload);
  if (data && !error) {
    yield put(getPost.success(data))
  } else {
    yield put(getPost.failure())
  }
}


function* takeGenerator(){
  yield takeEvery(GET_USER, getUserResult);
  yield takeEvery(GET_POST, getPostResult);
}


// takeEvery는 yeild * 에 바로 넣어주면 안됨.
export default function* userSaga() {
  yield all([
    fork(takeGenerator),
  ])
}


