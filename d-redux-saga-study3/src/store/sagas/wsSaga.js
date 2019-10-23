import {all,fork,takeEvery} from 'redux-saga/effects';
import * as actions from 'store/actions';


function* handleConnect(payload){
  console.log('connect');
  console.log(payload,'payload');
  const {payload:ws} = payload;

  yield takeEvery(actions.SAGA_WS_REQUEST,handleRequest(ws))
}
const handleRequest = (ws) =>{
  return function* (payload){
    const {payload:value} = payload;
    console.log(value);

  }
}

function* handleResponse(){
  console.log('response');
}
function* handleError(){
  console.log('error');
  
}



export default function* wsSaga(){
  yield all([
    takeEvery(actions.SAGA_WS_CONNECT,handleConnect),
    takeEvery(actions.SAGA_WS_RESPONSE,handleResponse),
    takeEvery(actions.SAGA_WS_ERROR,handleError)
  ])
}