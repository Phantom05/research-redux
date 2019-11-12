import {all,fork} from 'redux-saga/effects';
import homeSaga from './homeSaga';
import listingSaga from './listingSaga';
// import authSaga from './authSaga';
// import boardSaga from './boardSaga';
// import baseSaga from './baseSaga';


export default function* RootSaga(){
  yield all([
    fork(homeSaga),
    fork(listingSaga),
    // fork(authSaga),
    // fork(boardSaga),
    // fork(baseSaga),
    
  ])
}