// // import {createAction , handleActions} from 'redux-actions';
// // import produce from 'immer';

// // export const wsConnect= host =>({type:'WS_CONNECT',host});
// // export const wsConnecting= host =>({type:'WS_CONNECTING',host});
// // export const wsConnected= host =>({type:'WS_CONNECTED',host});
// // export const wsDisconnect= host =>({type:'WS_DISCONNECT',host});
// // export const wsDisconnected= host =>({type:'WS_DISCONNECTED',host});


// // // const websocket;

// // /**
// //  * An example middleware to handle WebSocket connections.
// //  * NB: There is no exception handling!
// //  */
// // // const middleware = store => next => action => {
// // //   switch (action.type) {
// // //     // User request to connect
// // //     case 'WEBSOCKET:CONNECT':
// // //       // Configure the object
// // //       websocket = new WebSocket(action.payload.url);

// // //       // Attach the callbacks
// // //       websocket.onopen = () => dispatch({ type: 'WEBSOCKET:OPEN' });
// // //       websocket.onclose = (event) => dispatch({ type: 'WEBSOCKET:CLOSE', payload: event });
// // //       websocket.onmessage = (event) => dispatch({ type: 'WEBSOCKET:MESSAGE', payload: event });

// // //       break;

// // //     // User request to send a message
// // //     case 'WEBSOCKET:SEND':
// // //       websocket.send(JSON.stringify(action.payload));
// // //       break;

// // //     // User request to disconnect
// // //     case 'WEBSOCKET:DISCONNECT':
// // //       websocket.close();
// // //       break;

// // //     default: // We don't really need the default but ...
// // //       break;
// // //   };

// // //   return next(action);
// // // };



// // // import { connect } from '@giantmachines/redux-websocket';

// // // store.dispatch(connect('ws://127.0.0.1:5501'));

// // // // You can also provide protocols if needed.
// // // // See: https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/WebSocket
// // // //
// // // // Note that this function only allows passing an array of protocols, even though
// // // // the spec allows passing a string or an array of strings. This is to support
// // // // the prefix argument, in the case that you've prefixed your action names.
// // // store.dispatch(connect('wss://my-server.com', ['v1.stream.example.com']));

// // // // ...other ways to call this function:
// // // store.dispatch(connect('wss://my-server.com', ['v1.stream.example.com'], 'MY_PREFIX'));
// // // store.dispatch(connect('wss://my-server.com', 'MY_PREFIX'));


// // const SOCKET_OPEN = 'REDUX_WEBSOCKET::OPEN';
// // const SOCKET_CONNECT = 'REDUX_WEBSOCKET::CONNECT';

// // const SOCKET_CLOSED = 'REDUX_WEBSOCKET::CLOSED'
// // const SOCKET_MESSAGE = 'REDUX_WEBSOCKET::MESSAGE'
// // const SOCKET_ERROR = 'REDUX_WEBSOCKET::ERROR'

// // let initialState={

// // }
// // export default handleActions({
// //   [SOCKET_OPEN]:(state,action)=>{
// //     return produce(state,draft=>{
// //       console.log('OPEN');
// //     })
// //   },
// //   [SOCKET_CONNECT]:(state,action)=>{
// //     return produce(state,draft=>{
// //       console.log('CONNECT');
// //     })
// //   },
// //   [SOCKET_MESSAGE]:(state,action)=>{
// //     return produce(state,draft=>{
// //       console.log('SOCKET_MESSAGE');
// //     })
// //   },
// //   [SOCKET_CLOSED]:(state,action)=>{
// //     return produce(state,draft=>{
// //       console.log('SOCKET_CLOSED');
// //     })
// //   },
// //   [SOCKET_ERROR]:(state,action)=>{
// //     return produce(state,draft=>{
// //       console.log('SOCKET_ERROR');
// //     })
// //   },

  


// // },initialState)



// const SOCKET_OPEN = 'socket/OPEN';

// const socket_open = createAction(SOCKET_OPEN);

// import * as socketActions from 'store/modules/websocket';
import {createAction,handleActions} from 'redux-actions';
import produce from 'immer';


// const socketMiddleware  = () =>{
//   let socket = null;

//   const onOpen = store => (event) =>{
//     console.log(`websocket open`, event.target.url);
//     store.dispatch(socket_open);
//   }

//   // const onClose = store =>() =>{
//   //   store.dispatch(socketActions.wsDisconnected())
//   // }

//   // const onMessage =store => (event) =>{
//   //   const payload = JSON.parse(event.data);
//   //   console.log('reciving server message');
//   // }

//   return ({getState,dispatch}) => next => action => {
//     console.log('start---');
//     console.log(action);


//     console.log('end*---');


//     const result = next(action);

//     // switch (action.type) {
//     //   case 'WS_CONNECT':
//     //     if (socket !== null) {
//     //       socket.close();
//     //     }
//     //     // connect to the remote host
//     //     socket = new WebSocket(action.host);
//     //     // websocket handlers
//     //     socket.onmessage = onMessage(store);
//     //     socket.onclose = onClose(store);
//     //     socket.onopen = onOpen(store);

//     //     break;
//     //   case 'WS_DISCONNECT':
//     //     if (socket !== null) {
//     //       socket.close();
//     //     }
//     //     socket = null;
//     //     console.log('websocket closed');
//     //     break;
//     //   case 'NEW_MESSAGE':
//     //     console.log('sending a message', action.msg);
//     //     socket.send(JSON.stringify({ command: 'NEW_MESSAGE', message: action.msg }));
//     //     break;
//     //   default:
//     //     console.log('the next action:', action);
//     //     return next(action);
//     // }
//   };
// }
// export default socketMiddleware();


let initialState = {
  response:null
}

const SOCKET_CONNECT = 'socket/CONNECT';
export const socketConnect = createAction(SOCKET_CONNECT);

const SOCKET_TEST = 'socket/TEST';
export const TestSocketMiddleware = createAction(SOCKET_TEST);


export const websocketMiddleware = ({getState,dispatch}) => next => action => {
  console.log(getState);
  console.log(dispatch);
  console.log(action);
  // dispatch({type:'socket/CONNECT'})
  console.log('f');
  return next(action)
}

export default handleActions({
  [SOCKET_CONNECT]:(state,action) =>{
    return produce(state,draft=>{
      console.log('hello world');
    })
  }
},initialState)