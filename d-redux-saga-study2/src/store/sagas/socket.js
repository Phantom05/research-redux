// import { buffers } from 'redux-saga'
import {all,fork,takeEvery,select} from 'redux-saga/effects';
import * as actions from 'store/actions';
import {Actions} from 'store/actionCreators';

const getState= (name) => (state) => state[name];

export const handleRequest = (ws) => {
  return function* ({payload:valueOf}){
    console.log('>>> handleRequest Saga');
    const dataValues = Object.values(valueOf)[0];
    const socketState = yield select(getState('websocket'));
    if(socketState.blocking){
      console.log('blocking!');
      return
    }
    console.log('in');
    console.log(socketState);



    if(dataValues[0] === 1){
      console.log('disable');
      // Actions.ws_bloking();
    }else{
      console.log('inable');
    }

    ws.send(JSON.stringify(valueOf));
  }
}

function* handleConnect(payload){
  console.log('>>> handleConnect Saga');
  Actions.ws_connected();
}

function* handleResponse(response){
  console.log('>>> handleResponse Saga');
  const {payload} = response;
  console.log(payload);
  const dataValues = Object.values(response)[0];
  console.log(response);
  if(dataValues[0] === 1){
    
  }
}

function* watchSocket(){
  yield all([
    // takeEvery(actions.SAGA_SOCKET_REQUEST,handleRequest),
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