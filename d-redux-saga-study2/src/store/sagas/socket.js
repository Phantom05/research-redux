// import { buffers } from 'redux-saga'
import {all,fork,takeEvery,call,put,actionChannel,take} from 'redux-saga/effects';
import * as actions from 'store/actions';

function* handleRequest({payload}) {
  console.log('>>> handleRequest Saga');
  const ws = payload;
  while (true) {
    const {payload:valueOf} = yield take(actions.SAGA_SOCKET_REQUEST);
    ws.send(JSON.stringify(valueOf));
  }
}
function* handleConnect(payload){
  console.log('>>> handleConnect Saga');
  yield takeEvery(actions.SAGA_SOCKET_REQUEST,handleRequest,payload)
  // yield fork(handleRequest,payload);
}

function* handleResponse(payload){
  console.log('>>> handleResponse Saga');
  const {response} = payload;
  console.log(response);
}

function* watchSocket(){
  yield all([
    takeEvery(actions.SAGA_SOCKET_CONNECT,handleConnect),
    takeEvery(actions.SAGA_SOCKET_RESPONSE,handleResponse)
  ])
}
export default function* socketSaga(){
  yield all([
    fork(watchSocket)
  ])
}


// function* handleRequest(payload){
//   console.log('handleRequest');
// }
// function* onMessage(type){
//   // const channel = yield call()
// }

// function* watchRequests() {
//   // 1- Create a channel for request actions
//   const requestChan = yield actionChannel(actions.SAGA_SOCKET_REQUEST)
//   while (true) {
//     // 2- take from the channel
//     const {payload} = yield take(requestChan)
//     // 3- Note that we're using a blocking call
//     yield call(handleRequest, payload)
//   }
// }