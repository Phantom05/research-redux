import {createAction} from 'redux-actions';

// type
export const BASE_LANDING_VIEW = 'base/BASE_LANDING_VIEW';
export const HOME_TEST         = 'home/HOME_TEST';

// actions
export const base_landing_view = createAction(BASE_LANDING_VIEW);
export const home_test         = createAction(HOME_TEST);

