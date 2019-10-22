import {all,fork,takeEvery,call,put} from 'redux-saga/effects';
import * as actions from 'store/actions';


function* getUser({payload}){
  console.log('get User');
  const {data} = yield call(actions.saga_get_user_wapper.request,payload);
  if(data){
    yield put(actions.saga_get_user_wapper.success(data))
  }else{
    yield put(actions.saga_get_user_wapper.failure())
  }


}

function* watch(){
  yield takeEvery(actions.SAGA_GET_USER,getUser)
}

export default function* homeSaga(){
  yield all([
    fork(watch)
  ])
}