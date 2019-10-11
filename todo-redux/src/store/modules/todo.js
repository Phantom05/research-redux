import { createAction , handleActions } from 'redux-actions';
import {Map, List} from 'immutable';

const CHANGE_INPUT = 'todo/CHANGE_INPUT';
const INSERT = 'todo/INSERT';
const TOGGLE = 'todo/TOGGLE';
const REMOVE = 'todo/REMOVE';

export const changeInput = createAction(CHANGE_INPUT,value=>value);
export const insert = createAction(INSERT, text => text);
export const toggle = createAction(TOGGLE, id=>id);
export const remove = createAction(REMOVE, id=>id);

// changeinput('새로운값');
// //{type:CHANGE_INPUT,payload:'새로운 값}
// const multi = createAction('MULTI');
// multi({foo:1,bar:2});
// const sample = createAction('SAMPLE',(value) => value +1,)

let id = 0; // todo 아이템에 들어갈 고유 값 입니다.
const initialState= Map({
  input:'',
  todos:List()
});
// switch에서 action.type이 바로 저렇게 들어가고 함수로 값이 들어오는구나..
export default handleActions({
  [CHANGE_INPUT]: (state,action) => state.set('input',action.payload),
  [INSERT]: (state, {payload:text}) =>{
    // 위 코드는 action 객체를 비구조화 할당 하고, payload 값을 text라고 부르겠다는 의미 입니다. **
    const item = Map({id:id++,checked:false, text});
    return state.update('todos', todos => todos.push(item));
  },
  [TOGGLE]: (state, {payload:id}) =>{
    // id 값을 가진 index를 찾아서 checked 값을 반전시킵니다.
    const index =state.get('todos').findIndex(item => item.get('id') === id);
    return state.updateIn(['todos', index, 'checked'], checked => !checked)
  },
  [REMOVE]: (state, {payload:id})=>{
    const index = state.get('todos').findIndex(item => item.get('id') === id);
    return state.deleteIn(['todos', index]);
  }
}, initialState)