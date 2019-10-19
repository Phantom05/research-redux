import {createAction,handleActions} from 'redux-actions';
import produce from 'immer';

export const LOGGED = 'login/LOGGED';

export const logged = createAction(LOGGED);

let initialState ={
  logged:false,
  email:'',
  password:'',
  remember:'',
}
export default handleActions({
  [LOGGED]:(state,{payload:diff})=>{
    return produce(state,draft=>{
      console.log('hello logged');
    })
  }
},initialState )