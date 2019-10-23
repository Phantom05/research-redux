import {all,fork,takeEvery,call} from 'redux-saga/effects';
import * as actions from 'store/actions';
import {Actions} from 'store/actionCreators';
import * as API from 'lib/api/home';


function* getResult(payload){
  console.log(payload);
  const {data,error} = yield call (API.getHomeResult);
  if(data && !error){
    Actions.home_get_result(data);
  }
}

export default function* homeSaga(){
  yield all([
    takeEvery(actions.SAGA_GET_RESULT,getResult)
  ])
}