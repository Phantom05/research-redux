import {handleActions} from 'redux-actions';
import produce from 'immer';


export const SETTING_ACTIVE= 'setting/TEST';
export const SettingTest = createAction(SETTING_ACTIVE);

const initialState = {
  number:0
};

export default  handleActions({
  [SETTING_ACTIVE]:(state,{payload:diff})=>{
    return produce(state,draft=>{

    })
  }
  }, initialState  );



