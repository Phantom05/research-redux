import { fork, all } from 'redux-saga/effects';
import usersSaga from './users';
import counterSaga from './counter';

console.log('sagas');
export default function* rootSaga() {
  yield all([
    fork(counterSaga),
    fork(usersSaga)
  ])
}
