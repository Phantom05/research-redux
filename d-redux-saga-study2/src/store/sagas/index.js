import {all,fork} from 'redux-saga/effects';
import homeSaga from './homeSaga';
import socketSaga from './socket';
import wsSaga from './wsSaga';

export default function* rootSaga(){
  yield all([
    fork(wsSaga),
    fork(socketSaga),
    fork(homeSaga)
  ])
}