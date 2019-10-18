

import {createAction,handleActions} from 'redux-actions';
import produce from 'immer';

export const MAIN_STAGE       = "main/STAGE";
export const MainClickStage       = createAction(MAIN_STAGE);

const initialState = {
  checkedList: [],
  scan:{
    current: null,
    maxilla: {
      disable: false,
      selected: false,
    },
    mandibula: {
      disable: false,
      selected: false,
    },
    occlusal: {
      disable: false,
      selected: false,
    }
  },
  model:{
    current: null,
    maxilla: {
      disable: false,
      selected: false,
    },
    mandibula: {
      disable: false,
      selected: false,
    },
    occlusal: {
      disable: false,
      selected: false,
    }
  },
}


export default handleActions({
  [MAIN_STAGE]: (state, {payload: diff}) => {
    return produce(state, draft => {
      const mode = draft.navigation.mode;
      // const isCheckecd = store.getState().mainStore.stage.checkedList.indexOf(targetId) !== -1;
      console.log(state.stage[mode][diff]);
      if (draft.controller.play.status !== true ) {
        if(draft.navigation.model.active === true ){
          console.log('return null');
        }else if(draft.navigation.scan.active === true ){
          draft.controller.play.selected = true;
        }
        draft.stage[mode].current = diff;
        draft.stage[mode].maxilla.selected = false;
        draft.stage[mode].mandibula.selected = false;
        draft.stage[mode].occlusal.selected = false;
        draft.stage[mode][diff].selected = true;
  
      }
  
    })
  },
},initialState)

