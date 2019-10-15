import {createAction, handleActions} from 'redux-actions';
import produce from 'immer';
import axios from 'axios';



const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMNET';
const REQUEST = 'conter/REQUEST';

export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);
export const requestTest = createAction(REQUEST);

export const incrementAsync = () => dispatch =>{
  setTimeout(() => {
    dispatch(increment())
}, 1000);
}

export const decrementAsync = () => dispatch =>{
  setTimeout(() => {
    dispatch(decrement())
}, 1000);
}
export const requestText =() => async dispatch =>{
  const {data} =await axios.get("https://jsonplaceholder.typicode.com/posts/1");
}

// function incrementIfOdd(){
//   return (dispatch,getState) =>{
//     const {counter} = getState();
//     if(counter %2 === 0){
//       return;
//     }
//     dispatch(increment())
//   }
// }

// function createThunkMiddleware(extraArgument){
//   return ({dispatch,getState}) => next =>action => {
//     if(typeof action === 'function'){
//       return action(dispatch, getState, extraArgument);
//     }
//     return next(action)
//   }
// }

// const thunk = createThunkMiddleware();
// thunk.withExtraArgument = createThunkMiddleware;



let initialState={
  number:1,
  text:'Hello'
}



export default handleActions({
  [INCREMENT]:(state,{payload:diff}) =>{
    return produce(state,draft=>{
      draft.number++;
    })
  },
  [DECREMENT]:(state,{payload:diff}) =>{
    return produce(state,draft=>{
      draft.number--;
    })
  },
  [REQUEST]:(state,{payload:diff})=>{
    return produce(state,async draft =>{
      const {data} =await axios.get("https://jsonplaceholder.typicode.com/posts/1");
      // produce가 Promise객체로 바뀌어서 initialState전부가 망가져버림.. 대참사
      console.log(data.title);
      draft.text = data.title;
    })
  }
},initialState)