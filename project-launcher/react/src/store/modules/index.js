import {combineReducers} from 'redux';
import auth from './auth';
import base from './base';
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
  // ws,
  // listing,
  // setting,
  auth,
  // home,
  // window,
  // user,
  // controller,
  // navigation,
  // stage,
  // board,
  // project
});


