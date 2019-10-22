import {all,fork} from 'redux-saga/effects';
import homeSaga from './homeSaga';
import socketSaga from './socket';
import {websocket as wsSagaMiddleware} from 'store/socket';


export default function* rootSaga(){
  yield all([
    fork(wsSagaMiddleware),
    fork(socketSaga),
    fork(homeSaga)
  ])
}