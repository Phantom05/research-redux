import { fork, all } from 'redux-saga/effects';
import usersSaga from './users';
import counterSaga from './counter';
import homeSaga from './home';

export default function* rootSaga() {
  yield all([
    fork(counterSaga),
    fork(usersSaga),
    fork(homeSaga),
  ])
}
