import {all,fork} from 'redux-saga/effects'
import homeSaga from './homeSaga';
import wsSaga from './wsSaga';
import wsMiddleware from './wsMiddleware';

export default function* rootSaga(){
  yield all([
    // fork(wsMiddleware),
    fork(homeSaga),
    fork(wsSaga)
  ])
}