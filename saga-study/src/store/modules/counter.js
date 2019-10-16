// AREA: Store 관리
import {delay} from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';
import {createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';
const INCREMENT_ASYNC = 'counter/INCREMENT_ASYNC';
const DECREMENT_ASYNC = 'counter/DECREMENT_ASYNC';

// export const increment = () => ({type:INCREMENT});
// export const decrement = () => ({type:DECREMENT});

export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);
export const incrementAsync = createAction(INCREMENT_ASYNC);
export const decrementAsync = createAction(DECREMENT_ASYNC);

const initialState ={
  number:0
};

function* incrementAsyncSaga(){
  yield delay(1000);
  yield put(increment());
}

function* decrementAsyncSaga(){
  yield delay(1000);
  yield put(decrement());
}

export function* counterSaga(){
  yield takeEvery(INCREMENT_ASYNC, incrementAsyncSaga);
  yield takeEvery(DECREMENT_ASYNC, decrementAsyncSaga);
}

// handleActions의 첫번째 파라미터는 액션을 처리하는 함수들로 이뤄진 객체이고
// 두번째 ㄱ파라미터는 초기 상태입니다.
export default handleActions({
  [INCREMENT]: (state, action) =>{
    return produce(state,draft=>{
      draft.number++
    })
  },
  // actions 객체르 참조하지 않으니까 이렇게 생략도 가능
  // state 부분에서 비구조화 할당도 해주어서 코드를 더욱 간소화.
  [DECREMENT]: (state,action)=>{
    return produce(state,draft=>{
      draft.number--
    })
  }
}, initialState) 