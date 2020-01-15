
import {all, takeEvery,call} from 'redux-saga/effects';
import * as actions from 'store/actions';
import {storage,keys} from 'lib/library';
import {Actions} from 'store/actionCreators';
import * as api from 'lib/api';


// import {
//   STATE_LOGIN,
//   STATE_LOGOUT,
//   STATE_TOKEN,
//   SAGA_FETCH_TEST
// } from 'store/actionSagas';
// import {Actions} from 'store/actionCreators';
// import * as API from 'lib/api';



function* handleSignIn({payload}){
  console.log('>>> handle Signin');
  Actions.auth_signin_pending()
  const {data,error} =yield call(api.postSignin,payload);
  if(data && !error){
    if(data.result === 1){
      Actions.auth_signin_success(data);
      storage.set(keys.token,data.token);
    }else{
      Actions.auth_signin_failure();
    }
  }else{
    Actions.auth_signin_failure();
  }


  // STATE_LOGIN.pending();
  // const {data,error} =yield call(STATE_LOGIN.request,payload);
  // if(data && !error){
  //   STATE_LOGIN.success(data);
  //   storage.set(keys.user,data.token);
  // }else{
  //   STATE_LOGIN.failure();
  // }
}

function* handleToken({payload}){
  console.log('>>> handleToken');

  Actions.auth_signin_pending();
  const {data,error} =yield call(api.postToken,payload);
  if(data && !error){
    if(data.result === 1){
      Actions.auth_signin_success(data);
      storage.set(keys.token,data.token);
      Actions.base_exit_landing();
    }else{
      Actions.auth_signin_failure();
    }
  }else{
    Actions.auth_signin_failure();
  }
  // STATE_TOKEN.pending();
  // const {data,error} = yield call(STATE_TOKEN.request,payload);
  // if(data && !error){
  //   console.log(data);
  //   STATE_TOKEN.success(data);
  // }else{
  //   STATE_TOKEN.failure();
  // }
}

function* handleSignOut({payload}){
  console.log('>>> handleLogout');
  const {data,error} =yield call(api.postSignOut);
  Actions.auth_signout_pending();
  if(data && !error){
    if(data.result ===1){
      Actions.auth_signout_success();
    }else{
      Actions.auth_signout_failure();
    }
    console.log(data);
  }else{
    console.log(data);
  }

}




export default function* AuthSaga(){
  yield all([
    takeEvery(actions.AUTH_SIGNIN_REQUEST,handleSignIn),
    takeEvery(actions.AUTH_SIGNOUT_REQUEST,handleSignOut),
    takeEvery(actions.AUTH_TOKEN_REQUEST,handleToken),
  ])
}