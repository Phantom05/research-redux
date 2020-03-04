import {all, takeEvery,call} from 'redux-saga/effects';
import { AlertFn } from 'lib/library';
import {
  TEST_SAGAS,
} from 'store/actions';

/**
 * get country list
 * @param {*} param0 
 */
function* handleTest({payload}){
  AlertFn(handleTest.name);
  TEST_SAGAS.pending();
  const {data,error} =yield call(TEST_SAGAS.request,payload);
  console.log(data,'data');
  if(data && !error){
    TEST_SAGAS.success(data);
  }else{
    TEST_SAGAS.failure(data);
  }
}


export default function* baseSaga(){
  yield all([
    takeEvery(TEST_SAGAS.index,handleTest),
  ])
}


