import { all, takeEvery, call } from 'redux-saga/effects';
import * as actions from 'store/actions';
import { 
  BOARD_UPLOAD_SAGA,
  BOARD_GET_LIST_SAGA
} from 'store/actionSagas';




function* handleGetListBoard(){
  console.log(`>>> handleGetListBoard !!!`);
  BOARD_GET_LIST_SAGA.pending();
  let {data,error} = yield call(BOARD_GET_LIST_SAGA.request,diff);
  if(data && !error){
    BOARD_GET_LIST_SAGA.success(data)
  }else{
    BOARD_GET_LIST_SAGA.failure();
  }

}

function* handleUploadBoard({payload:diff}){
  console.log(`>>> handleUploadBoard`);
  BOARD_UPLOAD_SAGA.pending();
  let {data,error} = yield call(BOARD_UPLOAD_SAGA.request,diff);
  if(data && !error){
    BOARD_UPLOAD_SAGA.success(data)
  }else{
    BOARD_UPLOAD_SAGA.failure();
  }

}

export default function* () {
  yield all([
    takeEvery(actions.BOARD_GET_LIST_REQUEST,handleGetListBoard),
    takeEvery(actions.BOARD_UPLOAD_REQUEST,handleUploadBoard),
  ])
}