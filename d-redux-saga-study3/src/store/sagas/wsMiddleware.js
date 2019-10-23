import {eventChannel} from 'redux-saga';
import {take,call,put} from 'redux-saga/effects';
import {wsAddress} from 'config/settings';
import * as actions from 'store/actions';
import {Actions} from 'store/actionCreators';



const websocketConnect = (ws) =>{
  return eventChannel(emitter =>{
    ws.onopen = e =>{
      console.log('open');
      emitter(Actions.saga_ws_connect(ws))
    }
    ws.onmessage=e=>{
      console.log('message');
      let msg = null;
      try{
        msg = JSON.parse(e.data);
      }catch(e){
        console.error(`Error parsing : ${e.data}`)
      }
      if(msg){
        console.log(msg);
      }
    }
    ws.onclose =e =>{
      console.log('close');
    }
    ws.onerror=e=>{
      console.log('onerror');
    }

    return()=> {

    }
  })
}

export default function* wsMiddleware(){
  const  ws = new WebSocket(wsAddress);
  const channel = yield call(websocketConnect,ws);

  while(true){
    const action = yield take(channel);
    yield put(action)
  }
}