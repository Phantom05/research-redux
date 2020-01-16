
import {all, takeEvery,call} from 'redux-saga/effects';
import {storage,keys} from 'lib/library';
import {Actions} from 'store/actionCreators';
import * as actions from 'store/actions';
import {
  AUTH_TOKEN_SAGAS,
  AUTH_SIGNIN_SAGAS,
  AUTH_SIGNOUT_SAGAS} from 'store/actions';



function* handleSignIn({payload}){
  console.log('>>> handle Signin');
  AUTH_SIGNIN_SAGAS.pending();
  const {data,error} =yield call(AUTH_SIGNIN_SAGAS.request,payload);
  if(data && !error){
    if(data.result === 1){
      AUTH_SIGNIN_SAGAS.success(data);
      storage.set(keys.token,data.token);
    }else{
      AUTH_SIGNIN_SAGAS.failure();
    }
  }else{
    AUTH_SIGNIN_SAGAS.failure();
  }
}

function* handleToken({payload}){
  console.log('>>> handleToken');
  AUTH_SIGNIN_SAGAS.pending();
  const {data,error} =yield call(AUTH_TOKEN_SAGAS.request,payload);
  if(data && !error){
    if(data.result === 1){
      AUTH_SIGNIN_SAGAS.success(data);
      storage.set(keys.token,data.token);
      Actions.base_exit_landing();
    }else{
      AUTH_SIGNIN_SAGAS.failure();
    }
  }else{
    AUTH_SIGNIN_SAGAS.failure();
  }
}

function* handleSignOut({payload}){
  console.log('>>> handleLogout');
  AUTH_SIGNOUT_SAGAS.pending();
  const {data,error} =yield call(AUTH_SIGNOUT_SAGAS.request);
  if(data && !error){
    if(data.result ===1){
      AUTH_SIGNOUT_SAGAS.success();
    }else{
      AUTH_SIGNOUT_SAGAS.failure();
    }
    console.log(data);
  }else{
    console.log(data);
  }

}


export default function* AuthSaga(){
  yield all([
    takeEvery(AUTH_TOKEN_SAGAS.index,handleToken),
    takeEvery(AUTH_SIGNIN_SAGAS.index,handleSignIn),
    takeEvery(AUTH_SIGNOUT_SAGAS.index,handleSignOut),
  ])
}