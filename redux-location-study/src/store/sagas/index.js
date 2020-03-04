import {all,fork} from 'redux-saga/effects';
import baseSaga from './baseSaga';

export default function* rootSaga(){
  yield all([
    fork(baseSaga),
  ])
}