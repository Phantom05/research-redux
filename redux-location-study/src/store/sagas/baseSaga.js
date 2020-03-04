import {all, takeEvery} from 'redux-saga/effects';
import {createPromiseSaga} from 'lib/utils';
import {
  TEST_SAGAS,
} from 'store/actions';


/**
 * handleTest
 * @param {*} param0 
 */
const handleTest= createPromiseSaga(TEST_SAGAS,'handleTest');

export default function* baseSaga(){
  yield all([
    takeEvery(TEST_SAGAS.index,handleTest),
  ])
}


