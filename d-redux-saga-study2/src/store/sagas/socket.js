// import { buffers } from 'redux-saga'
import {all,fork,takeEvery,select} from 'redux-saga/effects';
import * as actions from 'store/actions';
import {Actions} from 'store/actionCreators';

const getState= (name) => (state) => state[name];

const consoleWrapper = (txt)=>{
  console.log(txt);
  return (fn)=>fn;
}

function* handleConnect(payload){
  const {payload:ws} = payload;
  Actions.ws_connected();
  console.log(ws,'payloadpayload');
  yield takeEvery(actions.SAGA_SOCKET_REQUEST,handleRequest(ws));
}


export const handleRequest = (ws) => {
  return function* ({payload:valueOf}){
    console.log('>>> handleRequest Saga');
    const socketState = yield select(getState('websocket'));
    const dataValues = Object.values(valueOf)[0];
    if(socketState.blocking) return ;
    
    console.log('in');
    console.log(socketState);

    if(dataValues[0] === 1){
      // console.log('disable');
      // Actions.ws_bloking();
    }else{
      // console.log('inable');
    }

    ws.send(JSON.stringify(valueOf));
  }
}


function* handleResponse(response){
  const {payload} = response;
  const dataValues = Object.values(response)[0];
  console.log(response);
  if(dataValues[0] === 1){
    
  }
}

function* watchSocket(){
  yield all([
    // takeEvery(actions.SAGA_SOCKET_REQUEST,handleRequest),
    takeEvery(actions.SAGA_SOCKET_CONNECT,consoleWrapper('>>> handleConnect Saga')(handleConnect)),
    takeEvery(actions.SAGA_SOCKET_RESPONSE,consoleWrapper('>>> handleResponse Saga')(handleResponse))
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