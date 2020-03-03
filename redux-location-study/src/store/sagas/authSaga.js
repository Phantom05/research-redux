
import {all, takeEvery,call} from 'redux-saga/effects';
import {storage,keys,AlertFn} from 'lib/library';
import {Actions} from 'store/actionCreators';
import {
  AUTH_TOKEN_SAGAS,
  AUTO_LOGIN_SAGAS,
  AUTH_SIGNIN_SAGAS,
  AUTH_LOGOUT_SAGAS,
  AUTH_SIGNUP_SAGAS,
  AUTH_VERIFY_EMAIL_SAGAS,
  AUTH_VERIFY_CODE_SAGAS,
  AUTH_RESETPASS_SAGAS,
} from 'store/actions';


/**
 * 
 * @param {*} param0 
 */
function* handleSignIn({payload}){
  AlertFn(handleSignIn.name);

  console.log(payload,'!@$!%!@%');
  if(payload.email === 'customer'){ // 비회원 로그인
    const profileObj ={
      email:"customer",
      company:null,
      name:"비회원",
      type:3
    }
    AUTH_SIGNIN_SAGAS.success(profileObj);
  }else{ // 일반 로그인
    AUTH_SIGNIN_SAGAS.pending();
    const {data,error} =yield call(AUTH_SIGNIN_SAGAS.request,payload);
    
    if(data && !error){
      if(data.result === 1){
        console.log(payload,'$%$%');
        // token result에 없음.
        storage.set('email',payload.email);
        storage.set('password',payload.password);
        storage.set(keys.token,data.token);
        AUTH_SIGNIN_SAGAS.success(data);
      }else{
        AUTH_SIGNIN_SAGAS.failure();
      }
    }else{
      AUTH_SIGNIN_SAGAS.failure();
    }
  }
}



/**
 * 
 * @param {*} param0 
 */
function* handleToken({payload}){
  AlertFn(handleToken.name);
  // AUTH_TOKEN_SAGAS.pending();
  AUTH_SIGNIN_SAGAS.pending();
  // DEBUG: backend token 활성화시 삭제
  const tmpPaylod ={
    email:storage.get('email'),
    password:storage.get('password')
  }
  if(!tmpPaylod.email || !tmpPaylod.password){
    console.log('failure');
    Actions.auth_init('signIn');
    Actions.base_exit_landing();
    return;
  }
  const {data,error} =yield call(AUTH_SIGNIN_SAGAS.request,tmpPaylod);
  // // DEBUG: backend token 활성화시 삭제
  // const {data,error} =yield call(AUTH_TOKEN_SAGAS.request,payload);
  if(data && !error){
    if(data.result === 1){
      // AUTH_TOKEN_SAGAS.success(data);
      AUTH_SIGNIN_SAGAS.success(data);
      storage.set(keys.token,data.token);
      Actions.base_exit_landing();
    }else{
      // AUTH_TOKEN_SAGAS.failure();
      AUTH_SIGNIN_SAGAS.failure();
    }
  }else{
    // AUTH_TOKEN_SAGAS.failure();
    AUTH_SIGNIN_SAGAS.failure();
  }
}

/**
 * 
 * @param {*} param0 
 */
function* handleLogOut({payload}){
  AlertFn(handleLogOut.name);
  AUTH_LOGOUT_SAGAS.pending();
  const {data,error} =yield call(AUTH_LOGOUT_SAGAS.request);
  console.log("DDDDDD", data);
  console.log("DDDDDD", error);
  if(data && !error){
    if(data.result ===1){
      AUTH_LOGOUT_SAGAS.success();
    }else{
      AUTH_LOGOUT_SAGAS.failure();
    }
    console.log(data);
  }else{
    console.log(data);
  }
}

function* handleSignUp({payload}){
  AlertFn(handleSignUp.name);
  AUTH_SIGNUP_SAGAS.pending();
  const {data,error} =yield call(AUTH_SIGNUP_SAGAS.request,payload);
  if(data && !error){
    if(data.result ===1){
      AUTH_SIGNUP_SAGAS.success(data);
    }else{
      AUTH_SIGNUP_SAGAS.failure(data);
    }
    console.log(data);
  }else{
    console.log(data);
  }
}

function* handleVerifyEmail({payload}){
  AlertFn(handleVerifyEmail.name);
  console.log(payload,'payload');
  AUTH_VERIFY_EMAIL_SAGAS.pending();
  const {data,error} =yield call(AUTH_VERIFY_EMAIL_SAGAS.request,payload);
  if(data && !error){
    if(data.result ===1){
      AUTH_VERIFY_EMAIL_SAGAS.success();
    }else{
      AUTH_VERIFY_EMAIL_SAGAS.failure();
    }
    console.log(data);
  }else{
    console.log(data);
  }
}


/**
 * 
 * @param {*} payload  
 */
function* handleVerifyCode({payload}){
  AlertFn(handleVerifyCode.name);
  console.log(payload,'payload');
  AUTH_VERIFY_CODE_SAGAS.pending();
  const {data,error} =yield call(AUTH_VERIFY_CODE_SAGAS.request,payload);
  console.log(data,'!@$%!@%!@%!%% verify');
  if(data && !error){
    if(data.result ===1){
      AUTH_VERIFY_CODE_SAGAS.success(data);
    }else{
      AUTH_VERIFY_CODE_SAGAS.failure(data);
    }
  }else{
    console.log(data);
  }
}
/**
 * 
 * @param {*} payload object
 * 비밀번호 변경요청 
 */
function* handleResetPass({payload}){
  AUTH_RESETPASS_SAGAS.pending();
  const {data, error} = yield call(AUTH_RESETPASS_SAGAS.request, payload);
  console.log("FDFD", data);
  if(data && !error){
    if(data.result === 1){
      AUTH_RESETPASS_SAGAS.success();
    }else{
      AUTH_RESETPASS_SAGAS.failure(data);
    }
    console.log(data);
  }else{
    console.log(data);
  }
}

/**
 * 
 * @param {*} payload object
 * 자동 로그인 
 */
function* handleAutoLogin({payload}){
  AUTO_LOGIN_SAGAS.pending();
  const {data, error} = yield call(AUTO_LOGIN_SAGAS.request, payload);
  console.log("FDFD", data);
  if(data && !error){
    if(data.result === 1){
      AUTO_LOGIN_SAGAS.success(data);
    }else{
      AUTO_LOGIN_SAGAS.failure(data);
    }
    console.log(data);
  }else{
    console.log(data);
  }
}



export default function* AuthSaga(){
  yield all([
    takeEvery(AUTH_SIGNIN_SAGAS.index,handleSignIn),
    takeEvery(AUTH_TOKEN_SAGAS.index,handleToken),
    takeEvery(AUTO_LOGIN_SAGAS.index,handleAutoLogin),  
    takeEvery(AUTH_LOGOUT_SAGAS.index,handleLogOut),
    takeEvery(AUTH_SIGNUP_SAGAS.index,handleSignUp),
    takeEvery(AUTH_VERIFY_EMAIL_SAGAS.index,handleVerifyEmail),
    takeEvery(AUTH_VERIFY_CODE_SAGAS.index,handleVerifyCode),
    takeEvery(AUTH_RESETPASS_SAGAS.index,handleResetPass),
  ])
}