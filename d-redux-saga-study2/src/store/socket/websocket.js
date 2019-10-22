import {eventChannel} from 'redux-saga';
import {all, takeEvery,fork,call,put,take, delay} from 'redux-saga/effects';
import {settings} from 'config';
import * as actions from 'store/actions';

const websocketInitChannel = ws=> {
  return eventChannel( emitter => {
    // init the connection here
    ws.onopen= e =>{
      return emitter(actions.saga_socket_connect(ws))
    }
    ws.onmessage = e => {
      let msg = null
      try { msg = JSON.parse(e.data)
      } catch(e) { console.error(`Error parsing : ${e.data}`)}

      if(msg){ console.log(msg); }

      // switch (channel) {
      //   case 'ADD_BOOK':
      //     return emitter({ type: ADD_BOOK, book })
      //   case 'REMOVE_BOOK':
      //     return emitter({ type: REMOVE_BOOK, book })
      //   default:
      //     // nothing to do
      // }

      return emitter(actions.saga_socket_response(msg))
    }
    return () => {
      console.log('socket disconnect');
      // do whatever to interrupt the socket communication here
    }
  })
}

export default function* websocketSaga() {
  const ws = new WebSocket(settings.socketAddress);
  const channel = yield call(websocketInitChannel,ws);
  while (true) {
    const action = yield take(channel)
    yield put(action)
  }
}