import {all,fork} from 'redux-saga/effects';
import homeSaga from './home';
import socketSaga from './socket';

export default function* rootSaga(){
  yield all([
    fork(homeSaga),
    fork(socketSaga)
  ])
}