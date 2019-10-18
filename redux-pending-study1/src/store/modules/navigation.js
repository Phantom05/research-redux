
import {createAction,handleActions} from 'redux-actions';
import produce from 'immer';
import _ from 'lodash';

export const MAIN_EXPORT      = 'main/EXPORT'
export const MAIN_NAVIGATION  = "main/NAVIGATION";
export const MAIN_COODINATION = 'main/COODINATION';
export const MAIN_SETTING     = 'main/SETTING';

export const MainExport           = createAction(MAIN_EXPORT);
export const MainNavigationViewer = createAction(MAIN_NAVIGATION);
export const MainCoordinationBtn  = createAction(MAIN_COODINATION);
export const MainSetting          = createAction(MAIN_SETTING);


const initialState = {
  mode:'scan',
  scan: {
    disable: false,
    active: true,
  },
  model: {
    disable: false,
    active: false,
  },
  export: {
    one: {
      disable: false,
    },
    all: {
      disable: false,
    }
  },
  coordination: {
    disable: false,
  },
  save:{
    disable:false,
    view:false,
    status:false,
  },
  import:{
    disable:false,
  },
  setting:{
    disable:false,
    page:false
  },
}


export default  handleActions({
  [MAIN_EXPORT]: (state, {payload: diff}) => {
    return produce(state, draft => {

    })
  },
  [MAIN_NAVIGATION]: (state, {payload: diff}) => {
    return produce(state, draft => {
      if (diff === 'scan') {
        if (state.navigation.scan.disable !== true) {
          draft.navigation.mode = 'scan';
          draft.navigation.scan.active = true;
          draft.navigation.model.active = false;

          draft.panel.play.view = true;
          draft.panel.viewbox.view = false;
          _.forOwn(draft.viewbox,(box,key)=>{
            box.disable = true;
          });
        }
      } else if (diff === 'model') {
        if (state.navigation.model.disable !== true) {
          if (draft.stage.checkedList.length > 0) {
            draft.navigation.mode = 'model';
            draft.navigation.scan.active = false;
            draft.navigation.model.active = true;

            draft.panel.play.view = false;
            draft.panel.viewbox.view = true;
            _.forOwn(draft.viewbox,(box,key)=>{
              box.disable = false;
            });
          }
        }
      }
    })
  },
  [MAIN_COODINATION]: (state, {payload: diff}) => {
    return produce(state, draft => {

    })
  },
  [MAIN_SETTING]:(state,{payload:diff})=>{
    return produce(state,draft=>{
      if (draft.controller.play.status !== true) {
        draft.navigation.setting = true;
      }
    })
  },
},initialState)