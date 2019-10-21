import { call, put, fork, takeEvery,take,select,all , delay} from 'redux-saga/effects';
import {REQUEST_USER,successUser,failureUser} from 'store/modules/users';
import {DECREMENT_ASYNC,INCREMENT_ASYNC,DECREMENT,decrement} from 'store/modules/counter';
import {GET_USER,get_user} from 'store/modules/users';
import API from 'lib/api/users';


function* handleRequestUser(){
  const action  = yield take(REQUEST_USER);
  const {payload, error} = yield call(API.getUsers,action.payload);
  if (payload && !error) {
   yield put(successUser(payload));
 } else {
   yield put(failureUser(error));
 }
}
function* incrementAsync() {
 yield delay(1000)
 yield put({ type: 'counter/INCREMENT' })
}
function* decrementAsync(){
 while(true){
   const action = yield take(DECREMENT_ASYNC);
   yield delay(1000);
   yield put(decrement())
 }
}
function* getUser(){
 while(true){
   const action = yield take(GET_USER);
   const {data} = yield call(API.getUsers,action.payload); 
   if(data){
     yield put(successUser(data.name))
   }
   console.log(data);
 }
}

export default function* counter(){
  yield all([
    fork(handleRequestUser),
    fork(decrementAsync),
    // fork(getUser),
    takeEvery(INCREMENT_ASYNC, incrementAsync),
  ])
}