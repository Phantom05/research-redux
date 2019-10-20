import {} from 'store/actionsCreators';
import {successUser,failureUser} from 'lib/api/auth'
import {take, call, put, takeEvery, takeLatest,all } from 'redux-saga/effects'

export function* helloSaga() {
  console.log('Hello Sagas!')
}

export default function* rootSaga() {
  yield all([
    helloSaga(),
  ])
}

const REQUEST_USER = 'login/USER';
// function* handleRequestUser() {
//   while (true) {
//     const action = yield take(REQUEST_USER);
//     const { payload, error } = yield call(API.user, action.payload);
//     if (payload && !error) {
//       yield put(successUser(payload));
//     } else {
//       yield put(failureUser(error));
//     }
//   }
// }

// export default function* rootSaga() {
//   yield fork(handleRequestUser);
// }




// const delay = (ms) => new Promise(res => setTimeout(res, ms));

// // Our worker Saga: will perform the async increment task
// export function* incrementAsync() {
//   yield delay(1000)
//   yield put({ type: 'INCREMENT' })
// }

// // worker Saga: will be fired on USER_FETCH_REQUESTED actions
// // function* fetchUser(action) {
// //    try {
// //       const user = yield call(Api.fetchUser, action.payload.userId);
// //       yield put({type: "USER_FETCH_SUCCEEDED", user: user});
// //    } catch (e) {
// //       yield put({type: "USER_FETCH_FAILED", message: e.message});
// //    }
// // }

// /*
//   Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
//   Allows concurrent fetches of user.
// */
// // function* mySaga() {
// //   yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
// // }

// // Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
// export function* watchIncrementAsync() {
//   yield takeEvery('INCREMENT_ASYNC', incrementAsync)
// }


