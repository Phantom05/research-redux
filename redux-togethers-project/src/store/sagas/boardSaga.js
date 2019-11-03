import { all, takeEvery, call } from 'redux-saga/effects';
import * as actions from 'store/actions';
import { 
  BOARD_UPLOAD_SAGA
} from 'store/actionSagas';




function* handleGetBoardData(){
  console.log(`>>> handleBoardData`);
// BOARD_GET_DATA_PENDING,
// BOARD_GET_DATA_SUCCESS,
// BOARD_GET_DATA_FAILURE,
}

function* handleUploadBoard({payload:diff}){
  console.log(`>>> handleUploadBoard`);
  BOARD_UPLOAD_SAGA.pending();
  console.log(diff,'diffdiffdiffdiff');
  let {data,error} = yield call(BOARD_UPLOAD_SAGA.request,diff);
  if(data && !error){
    console.log(data,'datatadeta');
  }

}

export default function* () {
  yield all([
    takeEvery(actions.BOARD_GET_DATA_REQUEST,handleGetBoardData),
    takeEvery(actions.BOARD_UPLOAD_REQUEST,handleUploadBoard),
  ])
}