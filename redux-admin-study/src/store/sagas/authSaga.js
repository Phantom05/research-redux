import { all,  takeEvery, call } from 'redux-saga/effects';
import * as actions from 'store/actions';
import {cookie,keys,alertLogin} from 'utils'
import {
  AUTH_LOGIN_SAGA,
  AUTH_LOGOUT_SAGA,
  AUTH_TOKEN_SAGA
} from 'store/actionSagas';


function* handleLogin({ payload: diff }) {
  console.log('>>> handleLogin');
  AUTH_LOGIN_SAGA.pending();
  const {email,remember} = diff;

  if(remember === true){
    cookie.set(`${keys.user}email`,email);
    cookie.set(`${keys.user}remember`,remember);
  }else{
    cookie.remove(`${keys.user}email`);
    cookie.remove(`${keys.user}remember`);
  }

  const { data, error } = yield call(AUTH_LOGIN_SAGA.request, diff);
  if (data && !error && data.result === 1) {
    AUTH_LOGIN_SAGA.success(data);
    cookie.set(keys.user,data.token,1);;
  } else {
    AUTH_LOGIN_SAGA.failure();
    alertLogin(data.result)
  }
}

function* handleToken({payload:token}){
  console.log('>>> handleToken');
  const { data, error } = yield call(AUTH_TOKEN_SAGA.request, token);
  console.log('#2');
  if (data && !error && data.result === 1) {
    AUTH_LOGIN_SAGA.success(data);
    console.log('#login  success');
    AUTH_TOKEN_SAGA.success(data);
    console.log('#token success');
  } else {
    AUTH_TOKEN_SAGA.failure();
  }
}

function* handleLogout(){
  console.log('>>> handleLogout');
  const {data, error} = yield call (AUTH_LOGOUT_SAGA.request);
  if(data && !error){
    AUTH_LOGOUT_SAGA.success();
    cookie.remove(`${keys.user}`);
  }else{
    AUTH_LOGOUT_SAGA.failure();
  }
}

export default function* RootSaga() {
  yield all([
    takeEvery(actions.AUTH_LOGIN_REQUEST, handleLogin),
    takeEvery(actions.AUTH_LOGOUT_REQUEST, handleLogout),
    takeEvery(actions.AUTH_TOKEN_REQUEST, handleToken),
  ])
}


// export function* loginFlow() {
//   while (true) {
//     const {user, password} = yield take('LOGIN_REQUEST')
//     const task = yield fork(authorize, user, password)
//     const action = yield take(['LOGOUT', 'LOGIN_ERROR'])
//     if (action.type === 'LOGOUT') {
//       yield cancel(task)
//       yield put({type: 'DELETE_TOKEN'})
//     }
//   }
// }
