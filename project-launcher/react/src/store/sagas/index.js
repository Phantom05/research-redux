import {all,fork} from 'redux-saga/effects';
// import homeSaga from './homeSaga';
// import wsSetSaga from './wsSetSaga'; 
// import wsSaga from './wsSaga'; 
// import authSaga from './authSaga';

export default function* rootSaga(){
  yield all([
    // fork(wsSetSaga),
    // fork(wsSaga),
    // fork(homeSaga),
    // fork(authSaga),
  ])
}