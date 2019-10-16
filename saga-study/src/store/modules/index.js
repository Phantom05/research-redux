import {combineReducers} from 'redux';
import counter, {counterSaga} from './counter';
import post from './post';
import {all} from 'redux-saga/effects';

export function* rootSaga(){
  yield all([counterSaga()]);
}

export default combineReducers({
  counter,
  post
})