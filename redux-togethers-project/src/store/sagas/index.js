import {all,fork} from 'redux-saga/effects';
import authSaga from './authSaga';


export default function* RootSaga(){
  yield all([
    fork(authSaga)
  ])
}