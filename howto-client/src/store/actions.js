import { createAction } from 'redux-actions';
// import {makeAsyncActions} from 'utils';

// type
export const BASE_LANDING_VIEW = 'base/BASE_LANDING_VIEW';
export const HOME_TEST = 'home/HOME_TEST';
export const HOME_TEST_SAGA = 'home/HOME_TEST_SAGA';

export const LISTING_GET_RECENT_POSTS = 'listing/LISTING_GET_RECENT_POSTS';

export const LISTING_GET_RECENT_POSTS_REQUEST = 'listing/LISTING_GET_RECENT_POSTS_REQUEST';
export const LISTING_GET_RECENT_POSTS_PENDING = 'listing/LISTING_GET_RECENT_POSTS_PENDING';
export const LISTING_GET_RECENT_POSTS_SUCCESS = 'listing/LISTING_GET_RECENT_POSTS_SUCCESS';
export const LISTING_GET_RECENT_POSTS_FAILURE = 'listing/LISTING_GET_RECENT_POSTS_FAILURE';

// actions
export const base_landing_view = createAction(BASE_LANDING_VIEW);
export const home_test = createAction(HOME_TEST);
export const home_test_saga = createAction(HOME_TEST_SAGA);

export const listing_get_recent_posts = createAction(LISTING_GET_RECENT_POSTS);
export const listing_get_recent_posts_request = createAction(LISTING_GET_RECENT_POSTS_REQUEST);
export const listing_get_recent_posts_pending = createAction(LISTING_GET_RECENT_POSTS_PENDING);
export const listing_get_recent_posts_success = createAction(LISTING_GET_RECENT_POSTS_SUCCESS);
export const listing_get_recent_posts_failure = createAction(LISTING_GET_RECENT_POSTS_FAILURE);

