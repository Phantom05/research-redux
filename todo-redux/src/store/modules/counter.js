// AREA: Store 관리
import {createAction, handleActions } from 'redux-actions';
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

// export const increment = () => ({type:INCREMENT});
// export const decrement = () => ({type:DECREMENT});

export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);

const initialState ={
  number:0
};
// handleActions의 첫번째 파라미터는 액션을 처리하는 함수들로 이뤄진 객체이고
// 두번째 ㄱ파라미터는 초기 상태입니다.
export default handleActions({
  [INCREMENT]: (state, action) =>{
    return {number: state.number +1};
  },
  // actions 객체르 참조하지 않으니까 이렇게 생략도 가능
  // state 부분에서 비구조화 할당도 해주어서 코드를 더욱 간소화.
  [DECREMENT]: ({number}) =>({number: number -1})
}, initialState) 