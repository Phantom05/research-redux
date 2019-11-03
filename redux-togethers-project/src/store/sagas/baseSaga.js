import { all,  takeEvery, call } from 'redux-saga/effects';
import * as actions from 'store/actions';
// import {Actions} from 'store/actionCreators';
// import {cookie,keys} from 'utils'
import {
  BASE_GET_BOARD_MENU_SAGA
} from 'store/actionSagas';

function* handleGetBoardMenu({payload:diff}){
  console.log(`>>> handleGetBoardMenu`);
  BASE_GET_BOARD_MENU_SAGA.pending();
  let {data,error} = yield call(BASE_GET_BOARD_MENU_SAGA.request,diff);
  if(data && !error){
    console.log(data);
    BASE_GET_BOARD_MENU_SAGA.success(data);
  }else{
    BASE_GET_BOARD_MENU_SAGA.failure();
  }

}

export default function* RootSaga() {
  yield all([
    takeEvery(actions.BASE_BOARD_GET_MENU_REQUEST, handleGetBoardMenu),

  ])
}


// export function* loginFlow() {
//   while (true) {
//     const {user, password} = yield take('LOGIN_REQUEST')
//     const task = yield fork(authorize, user, password)
//     const action = yield take(['LOGOUT', 'LOGIN_ERROR'])
//     if (action.type === 'LOGOUT') {
//       yield cancel(task)
//       yield put({type: 'DELETE_TOKEN'})
//     }
//   }
// }
