import {eventChannel} from 'redux-saga';
import {call,put,take} from 'redux-saga/effects';
import {settings} from 'config';
import * as actions from 'store/actions';
import {QWebChannel} from 'qwebchannel';

const websocketInitChannel = ws=> {
  return  eventChannel( emitter => {
    ws.onopen= e => {

      if(settings.ProdMode){
        new QWebChannel(ws, function(channel){
          const handler = channel.objects.handler;
          console.log('Qwebchannel in !!');
          console.log(channel,' channel message!!!');

          handler.connectMessage.connect(function(message){
            console.log('Qwebchannel Connect handler message in ');
            emitter(actions.saga_socket_connect(handler));
          });

          handler.sendCommand.connect(function(message){
            console.log(message,'Qwebchannel Connect handler inininiiiin***');
            emitter(actions.saga_socket_response(message));
          });

          handler.executeCommand({'HELLO':'MAIN QWEBCHANNEL CONTACT'})

          // return emitter(actions.saga_socket_response(channel));
        });
      }else if (settings.DevMode){
        emitter(actions.saga_socket_connect(ws));
        // emitter(actions.saga_socket_connect(ws));
      }


    }
    ws.onmessage = e => {
      console.log('websocekt on message');
      let msg = null
      try { msg = JSON.parse(e.data);
      } catch(e) { console.error(`Error parsing : ${e.data}`)}

      if(msg){ console.log(msg); }
      // emitter 이함수를 실행해야지 channel의 take가 동작하고 아랫부분 while에서 take로 포착할 수가 있음. 반드시 emiiter를 써줘야함.
      // emit으로 actions이 들어가게 되면 아래 put으로 실행하고 다시 take상태로 돌아가게됨.
      return emitter(actions.saga_socket_response(msg))
    }
    ws.onerror= e =>{
      console.log('onerror');
    }
    ws.onclose = e =>{
      console.log('disconnect');
    }
    return () => {
      console.log('socket disconnect');
      // do whatever to interrupt the socket communication here
    }
  })
}

export default function* wsSaga() {
  // init the connection here
  const  ws = new WebSocket(settings.wsAddress);
  const channel = yield call(websocketInitChannel,ws);
  while (true) {
    // take는 기본적으로 pattern과 channel을 넣어서 사용할 수가 있음. 공식 도큐 보기
    const action = yield take(channel);
    yield put(action);
  }
}



















      // switch (channel) {
      //   case 'ADD_BOOK':
      //     return emitter({ type: ADD_BOOK, book })
      //   case 'REMOVE_BOOK':
      //     return emitter({ type: REMOVE_BOOK, book })
      //   default:
      //     // nothing to do
      // }