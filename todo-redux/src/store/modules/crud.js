

import {createAction, handleActions} from 'redux-actions';
import {List,Map} from 'immutable';

const CHANGE_INPUT    = 'crud/CHANGE_INPUT';
const CHANGE_TEXTAREA = 'crud/TEXTAREA';
const WRITE           = 'crud/WRITE';
const LIST            = 'crud/LIST';
const PAGE            = 'crud/PAGE';
const DELETEITEM      = 'crud/DELETE'
const DETAIL          = 'crud/DETAIL';


export const write = createAction(WRITE,value=>value)
export const changeInput = createAction(CHANGE_INPUT,text=>text);
export const changeTextarea = createAction(CHANGE_TEXTAREA,text=>text)
export const list = createAction(LIST);
export const page = createAction(PAGE, page =>page);
export const deleteItem = createAction(DELETEITEM,id=>id);
export const detail = createAction(DETAIL,id => id);


let id = 0;
let initialState= Map({
  page:'list',
  input:'',
  textarea:'',
  list:List(),
  detail:{
    title:'',
    content:''
  }
});

export default handleActions({
  [CHANGE_TEXTAREA]: (state,{payload:text}) =>state.set('textarea',text),
  [CHANGE_INPUT]: (state,{payload:text}) =>state.set('input',text),
  [WRITE]:(state,{payload:obj})=>{
    const item = Map({id:id++,title:obj.input,content:obj.textarea})
    return state.update('list',list => list.push(item));
  },
  [PAGE]: (state,{payload:pageName}) =>state.set('page',pageName),
  [DELETEITEM]:(state,{payload:id})=>{
    const index = state.get('list').findIndex(item => item.get('id') === id);
    return state.deleteIn(['list',index])
  },
  [DETAIL]:(state,{payload:id})=>{
    console.log(id,'ididid');
    const info = state.get('list').find(item => item.get('id') === id).toJS();
    return state.setIn(['detail','title'],info.title).setIn(['detail','content'],info.content);
  }
},initialState);