import { all, takeEvery, call } from 'redux-saga/effects';
import * as actions from 'store/actions';
import { Actions } from 'store/actionCreators';
import { cookie, keys, alertLogin, alertRegister } from 'utils'
// import {

// } from 'store/actionSagas';




function* handleBoardData(){
  console.log(`>>> handleBoardData`);
  
//   BOARD_GET_DATA_PENDING,
// BOARD_GET_DATA_SUCCESS,
// BOARD_GET_DATA_FAILURE,
}

export default function* () {
  yield all([
    takeEvery(actions.BOARD_GET_DATA_REQUEST,handleBoardData)
  ])
}