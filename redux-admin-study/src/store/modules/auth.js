import {createAction,handleActions} from 'redux-actions';
import produce from 'immer';

export const LOGGED = 'login/LOGGED';

export const logged = createAction(LOGGED);

let initialState ={
  logged:false,
  email:'test@test.com',
  password:'',
  remember:true,
}
export default handleActions({
  [LOGGED]:(state,{payload:diff})=>{
    return produce(state,draft=>{
      console.log('hello logged');
      draft.logged = diff;
    })
  }
},initialState )