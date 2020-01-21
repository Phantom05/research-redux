import {combineReducers} from 'redux';
import auth from './auth';
import base from './base';
import common from './common';
import alert from './alert';
// import home from './home';
// import user from './user';
// import stage from './stage';
// import window from './window';
// import ws from './ws';
// import navigation from './navigation';
// import controller from './controller';
// import board from './board';
// import project from './project';
// import listing from './listing';
// import setting from './setting';


export default combineReducers({
  base,
  common,
  auth,
  alert,
  // ws,
  // listing,
  // setting,
  // home,
  // window,
  // user,
  // controller,
  // navigation,
  // stage,
  // board,
  // project
});


