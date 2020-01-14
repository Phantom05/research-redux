import {all,fork} from 'redux-saga/effects';
import authSaga from './authSaga';
// import homeSaga from './homeSaga';
// import wsSetSaga from './wsSetSaga'; 
// import wsSaga from './wsSaga'; 

export default function* rootSaga(){
  yield all([
    fork(authSaga),
    // fork(wsSetSaga),
    // fork(wsSaga),
    // fork(homeSaga),
  ])
}