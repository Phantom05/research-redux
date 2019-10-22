import {all, takeEvery,fork,call,put,take} from 'redux-saga/effects';
import {getHome} from 'lib/api/home';
import {
  SAGA_GET_HOME,
  get_home
} from 'store/modules/home';


// 그냥 이렇게 되면 settimeout 걸렸을때, 여러번 시도했을때 1번만 답변이 오게됨,
// 이를 막기위해 takeEvery를 반드시 써줘야함.
function* handleRequestSuggests() {
  while (true) {
    const { payload } = yield take(SAGA_GET_HOME);
    const { data, error } = yield call(getHome, payload);
    yield put(get_home(data))
  }
}

function forkLater(task,...args){
  return fork(function* (){
    yield call(delay,1000);
    yield fork(task,...args);
  })
}


function *defaultHome({payload}){
  console.log('on');
  const {data,error} = yield call(getHome,payload);
  yield put(get_home(data))
}



function* taskGenerator(){
  yield takeEvery(SAGA_GET_HOME,defaultHome)
} 
export default function* homeSaga(){
  yield all([
    fork(taskGenerator),
    // fork(handleRequestSuggests)
  ])
}