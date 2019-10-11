

import {createAction, handleActions} from 'redux-actions';
import {List,Map} from 'immutable';

const CHANGE_INPUT = 'crud/CHANGE_INPUT';
const WRITE = 'crud/WRITE';
const LIST = 'crud/LIST';
const PAGE = 'crud/PAGE';
const DELETEITEM = 'crud/DELETE'

export const write = createAction(WRITE,value=>value)
export const changeInput = createAction(CHANGE_INPUT,text=>text);
export const list = createAction(LIST);
export const page = createAction(PAGE, page =>page);
export const deleteItem = createAction(DELETEITEM,id=>id);

let id = 0;
let initialState= Map({
  page:'list',
  input:'',
  list:List()
});

export default handleActions({
  [CHANGE_INPUT]: (state,{payload:text}) =>state.set('input',text),
  [WRITE]:(state,{payload:value})=>{
    const item = Map({id:id++,title:value})
    return state.update('list',list => list.push(item));
  },
  [LIST]: (state) =>{

    return
  },
  [PAGE]: (state,{payload:pageName}) =>state.set('page',pageName),
  [DELETEITEM]:(state,{payload:id})=>{
    const index = state.get('list').findIndex(item => item.get('id') === id);
    return state.deleteIn(['list',index])
  }
},initialState);