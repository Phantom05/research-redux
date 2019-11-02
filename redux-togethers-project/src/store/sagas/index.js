import {all,fork} from 'redux-saga/effects';
import authSaga from './authSaga';
import boardSaga from './boardSaga';


export default function* RootSaga(){
  yield all([
    fork(authSaga),
    fork(boardSaga),
    
  ])
}