import {createAction,handleActions} from 'redux-actions';
import produce from 'immer';

export const MAIN_PLAY        = "main/PLAY";
export const MAIN_DELETE      = "main/DELETE";

export const MAIN_VIEWBOX     = 'main/VIEWBOX';
export const MAIN_EDIT        = 'main/EDIT';

export const MainPlay             = createAction(MAIN_PLAY);
export const MainDelete           = createAction(MAIN_DELETE);
export const MainClickViewbox     = createAction(MAIN_VIEWBOX);

export const MainEdit             = createAction(MAIN_EDIT);

const initialState = {
  play: {
    count: 0,
    disable: false,
    status: false,
    selected: false,
  },
  delete: {
    disable: false,
    status: false
  },
  viewbox: {
    left: {
      disable: true,
    },
    right: {
      disable: true,
    },
    top: {
      disable: true,
    },
    bottom: {
      disable: true,
    },
    front: {
      disable: true,
    },
    back: {
      disable: true,
    }
  },
  edit:{
    scissors:{
      active:false,
    },
    line:{
      active:false,
    },
    rect:{
      active:false,
    },
    ellipse:{
      active:false,
    },
    polyline:{
      active:false,
    },
    freeline:{
      active:false,
    },
  }
};

export default  handleActions({
    [MAIN_PLAY]: (state, {
      payload: diff
    }) => {
      return produce(state, draft => {
        const mode = draft.navigation.mode;
        // console.log(state.controller.play.status);
        if (state.controller.play.selected === true) {
          draft.controller.play.status = !state.controller.play.status;
  
          // 재생 상태
          if (draft.controller.play.status === true) {
            draft.controller.play.count++;
            draft.navigation.scan.disable = true;
            draft.navigation.model.disable = true;
            draft.navigation.export.all.disable = true;
            draft.navigation.export.one.disable = true;
            draft.navigation.setting.disable = true;
            draft.navigation.save.disable= true;
            draft.navigation.import.disable= true;
  
            draft.stage[mode].maxilla.disable = true;
            draft.stage[mode].mandibula.disable = true;
            draft.stage[mode].occlusal.disable = true;

            
            draft.controller.delete.disable = true;
  
          } else {
            // 정지 상태
            draft.navigation.scan.disable = false;
            draft.navigation.model.disable = false;
            draft.navigation.export.all.disable = false;
            draft.navigation.export.one.disable = false;
            draft.navigation.save.disable= false;
            draft.navigation.setting.disable = false;
            draft.navigation.import.disable= false;
  
            draft.stage[mode].maxilla.disable = false;
            draft.stage[mode].mandibula.disable = false;
            draft.stage[mode].occlusal.disable = false;

  
            draft.controller.delete.disable = false;
            // play가 한번이라도 됬을때.
            if (draft.controller.play.count > 0) {
              draft.stage[mode][draft.stage[mode].current].checked = true;
              draft.navigation.save.status = true;
              if (draft.stage.checkedList.indexOf(draft.stage[mode].current) == -1) {
                draft.stage.checkedList.push(draft.stage[mode].current);
              }
            }
          }
        }
  
      })
    },
    [MAIN_DELETE]: (state, {
      payload: diff
    }) => {
      return produce(state, draft => {
        const mode = draft.navigation.mode;
        if (draft.controller.play.status !== true) {

          draft.stage.checkedList = draft.stage.checkedList.filter(
            (list) => list !== draft.stage[mode].current
          );
          draft.stage[mode][draft.stage[mode].current].selected = false;
          draft.stage[mode][draft.stage[mode].current].checked = false;
          draft.stage[mode].current = null;
          draft.controller.play.selected = false;
  
          if(draft.stage.checkedList.length === 0){
            draft.navigation.scan.active = true;
            draft.navigation.save.status = false;
          }
        }
      })
    },
    [MAIN_VIEWBOX]: (state,{payload:diff})=>{
      console.log(diff);
      return produce(state,draft=>{
        
      })
    },
    [MAIN_EDIT]:(state,{payload:diff})=>{
      return produce(state,draft=>{
        console.log(diff);
      })
    }
  
  }, initialState  );







