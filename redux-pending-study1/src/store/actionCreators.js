import { bindActionCreators} from 'redux';
import * as counterActions from 'store/modules/counter';
import * as socketActions from 'store/modules/websocket';
import * as navigationActions from 'store/modules/navigation';
import * as stageActions from 'store/modules/stage';
import * as controllerActions from 'store/modules/controller';
import * as windowsActions from 'store/modules/window';
import store from 'store';
const {dispatch} = store;

export const CounterActions =  bindActionCreators(counterActions,dispatch);
export const SocketActions =  bindActionCreators(socketActions,dispatch);
export const NavigationActions =  bindActionCreators(navigationActions,dispatch);
export const StageActions =  bindActionCreators(stageActions,dispatch);
export const ControllerActions =  bindActionCreators(controllerActions,dispatch);
export const WindowsActions =  bindActionCreators(windowsActions,dispatch);