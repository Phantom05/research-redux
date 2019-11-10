import { all, takeEvery, call } from 'redux-saga/effects';
import * as actions from 'store/actions';
import { 
  HOME_TEST_SAGA
} from 'store/actionSagas';




function* handleTest({payload:diff}){
  console.log(`>>> handleGetListBoard !!!`);
  HOME_TEST_SAGA.pending();
  let {data,error} = yield call(HOME_TEST_SAGA.request,diff);
  if(data && !error){
    HOME_TEST_SAGA.success(data)
  }else{
    HOME_TEST_SAGA.failure();
  }
}


export default function* () {
  yield all([
    takeEvery(actions.HOME_TEST_SAGA,handleTest),
  ])
}