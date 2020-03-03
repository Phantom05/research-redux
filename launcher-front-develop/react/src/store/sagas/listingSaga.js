
import {all, takeEvery,call, take} from 'redux-saga/effects';
import {
  AlertFn} from 'lib/library';
import {
  LISTING_COUNTRY_SAGAS,
  LISTING_LOCATION_SAGAS,
  LISTING_CASE_LOAD_SAGAS,
  LISTING_PARTNERS_INFO_SAGAS,
  LISTING_PARTNERS_MY_ADD_SAGAS,
  LISTING_PARTNERS_MY_DEFAULT_ADD_SAGAS,
  LISTING_PARTNERS_SEARCH_SAGAS,
  LISTING_MY_PARTNERS_SAGAS,
  LISTING_PARTNERS_TYPE_SAGAS,
  LISTING_TEST_SAGAS,
  LISTING_WORKS_SEARCH_SAGAS,
  MESSAGE_LIST_SAGAS,
  MESSAGE_LIST_DELETE_SAGAS,
  MESSAGE_LIST_DELETE_ALL_SAGAS,
  MESSAGE_LIST_READ_SAGAS
  // LISTING_PARTNERS_SEARCH
} from 'store/actions';


/**
 * get country list
 * @param {*} param0 
 */
function* handleGetCountryList({payload}){
  AlertFn(handleGetCountryList.name);
  LISTING_COUNTRY_SAGAS.pending();
  const {data,error} =yield call(LISTING_COUNTRY_SAGAS.request,payload);
  if(data && !error){
    // if(data.result ===1){
      LISTING_COUNTRY_SAGAS.success(data);
    // }else{
      // LISTING_COUNTRY_SAGAS.failure(data);
    // }
  }else{

  }
}

/**
 * get location list
 * @param {*} param0 
 */
function* handleGetLocationList({payload}){
  AlertFn(handleGetLocationList.name);
  LISTING_LOCATION_SAGAS.pending();
  const {data,error} =yield call(LISTING_LOCATION_SAGAS.request,payload);
  console.log(data,'!%!%!@%');
  if(data && !error){
    if(data.result ===1){
      LISTING_LOCATION_SAGAS.success(data);
    }else{
      LISTING_LOCATION_SAGAS.failure(data);
    }
    
  }else{
    
  }
}

/**
 * 
 * @param {*} param0 
 */
function* handleGetCaseLoadList({payload}){
  AlertFn(handleGetCaseLoadList.name);
  LISTING_CASE_LOAD_SAGAS.pending();
  const {data,error} =yield call(LISTING_CASE_LOAD_SAGAS.request,payload);
  console.log(data,'!!');
  if(data && !error){
    if(data.result ===1){
      LISTING_CASE_LOAD_SAGAS.success(data);
    }else{
      LISTING_CASE_LOAD_SAGAS.failure(data);
    }
    
  }else{
    
  }
}


/**
 * 
 * @param {*} param0 
 */
function* handleGetPartnersList({payload}){
  AlertFn(handleGetPartnersList.name);
  LISTING_PARTNERS_INFO_SAGAS.pending();
  const {data,error} =yield call(LISTING_PARTNERS_INFO_SAGAS.request,payload);
  if(data && !error){
    if(data.result ===1){
      LISTING_PARTNERS_INFO_SAGAS.success(data);
    }else{
      LISTING_PARTNERS_INFO_SAGAS.failure(data);
    }
    
  }else{
    
  }
}


/**
 * 파트너 추가
 * @param {*} param0 
 */
function* handleAddMyPartnersList({payload}){
  AlertFn(handleAddMyPartnersList.name);
  LISTING_PARTNERS_MY_ADD_SAGAS.pending();
  const {data,error} =yield call(LISTING_PARTNERS_MY_ADD_SAGAS.request,payload);
  if(data && !error){
    if(data.result ===1){
      Object.assign(data,payload);
      LISTING_PARTNERS_MY_ADD_SAGAS.success(data);
      console.log('2');
    }else{
      LISTING_PARTNERS_MY_ADD_SAGAS.failure(data);
    }
    
  }else{
    LISTING_PARTNERS_MY_ADD_SAGAS.failure(data);
  }
}

/**
 * 기본 파트너 추가
 * @param {*} param0 
 */
function* handleAddDefaultMyPartnersList({payload}){
  AlertFn(handleAddDefaultMyPartnersList.name);
  LISTING_PARTNERS_MY_DEFAULT_ADD_SAGAS.pending();
  const {data,error} =yield call(LISTING_PARTNERS_MY_DEFAULT_ADD_SAGAS.request,payload);
  if(data && !error){
    if(data.result ===1){
      Object.assign(data,payload);
      LISTING_PARTNERS_MY_DEFAULT_ADD_SAGAS.success(data);
    }else{
      LISTING_PARTNERS_MY_DEFAULT_ADD_SAGAS.failure(data);
    }
    
  }else{
    LISTING_PARTNERS_MY_DEFAULT_ADD_SAGAS.failure(data);
  }
}

/**
 * 파트너 검색
 * @param {*} param0 
 */
function* handleGetPartnersSearchList({payload}){
  AlertFn(handleGetPartnersSearchList.name);
  LISTING_PARTNERS_SEARCH_SAGAS.pending();
  const {data,error} =yield call(LISTING_PARTNERS_SEARCH_SAGAS.request,payload);
  if(data && !error){
    if(data.result ===1){
      Object.assign(data,payload);
      LISTING_PARTNERS_SEARCH_SAGAS.success(data);
    }else{
      LISTING_PARTNERS_SEARCH_SAGAS.failure(data);
    }
    
  }else{
    
  }
}

/**
 * 내 파트너 검색
 * @param {*} param0 
 */
function* handleGetMyPartnersList({payload}){
  AlertFn(handleGetMyPartnersList.name);
  LISTING_MY_PARTNERS_SAGAS.pending();
  const {data,error} =yield call(LISTING_MY_PARTNERS_SAGAS.request,payload);
  if(data && !error){
    if(data.result ===1){
      Object.assign(data,payload);
      LISTING_MY_PARTNERS_SAGAS.success(data);
    }else{
      LISTING_MY_PARTNERS_SAGAS.failure(data);
    }
  }else{
    LISTING_MY_PARTNERS_SAGAS.failure(data);
  }
}

/**
 *  
 * @param {*} param0 
 */
function* handleGetPartnersTypeList({payload}){
  AlertFn(handleGetPartnersTypeList.name);
  LISTING_PARTNERS_TYPE_SAGAS.pending();
  const {data,error} =yield call(LISTING_PARTNERS_TYPE_SAGAS.request,payload);
  if(data && !error){
    if(data.result ===1){
      LISTING_PARTNERS_TYPE_SAGAS.success(data);
    }else{
      LISTING_PARTNERS_TYPE_SAGAS.failure(data);
    }
    
  }else{
    
  }
}

/**
 * 웍스 서치 리스트
 * @param {*} param0 
 */
function* handleGetWorksSearchList({payload}){
  AlertFn(handleGetWorksSearchList.name);
  LISTING_WORKS_SEARCH_SAGAS.pending();
  console.log(payload,'payload!');
  const {data,error} =yield call(LISTING_WORKS_SEARCH_SAGAS.request,payload);
  console.log(data,'!!');
  if(data && !error){
    if(data.result ===1){
      data.searchData = payload;
      data.type = payload.type;
      LISTING_WORKS_SEARCH_SAGAS.success(data);
    }else{
      LISTING_WORKS_SEARCH_SAGAS.failure(data);
    }
    
  }else{
    
  }
}

/**
 * Message list
 * @param {*} param0 
 */
function* handleMessageList({payload}){
  MESSAGE_LIST_SAGAS.pending();
  const {data, error} = yield call(MESSAGE_LIST_SAGAS.request, payload);
  if(data && !error){
    MESSAGE_LIST_SAGAS.success(data);
  }else{
    MESSAGE_LIST_SAGAS.failure(data);
  }
}

/**
 * Message list delete
 * @param {*} param0 
 */
function* handleMessageListDelete({payload}){
  MESSAGE_LIST_DELETE_SAGAS.pending();
  const {data, error} = yield call(MESSAGE_LIST_DELETE_SAGAS.request, payload);
  if(data && !error){
    MESSAGE_LIST_DELETE_SAGAS.success(data);
  }else{
    MESSAGE_LIST_DELETE_SAGAS.failure(data);
  }
}

/**
 * Message list delete all
 * @param {*} param0 
 */
function* handleMessageListDeleteAll({payload}){
  MESSAGE_LIST_DELETE_ALL_SAGAS.pending();
  const {data, error} = yield call(MESSAGE_LIST_DELETE_ALL_SAGAS.request, payload);
  if(data && !error){
    MESSAGE_LIST_DELETE_ALL_SAGAS.success(data);
  }else{
    MESSAGE_LIST_DELETE_ALL_SAGAS.failure(data);
  }
}


/**
 * message read
 * @param {*} param0 
 */
function* handleReadMessage({payload}){
  AlertFn(handleReadMessage.name);
  MESSAGE_LIST_READ_SAGAS.pending();
  const {data, error} = yield call(MESSAGE_LIST_READ_SAGAS.request, payload);
  if(data && !error){
      if(data.result === 1){
        MESSAGE_LIST_READ_SAGAS.success(data);
      }else{
        MESSAGE_LIST_READ_SAGAS.failure();
      }
  }else{
    MESSAGE_LIST_READ_SAGAS.failure();
  }
}


/**
 * 
 * @param {*} param0 
 */
function* handleTest({payload}){
  AlertFn(handleTest.name);
  LISTING_TEST_SAGAS.pending();
  const {data,error} =yield call(LISTING_TEST_SAGAS.request,payload);
  if(data && !error){
    LISTING_TEST_SAGAS.success(data);
  }else{
    LISTING_TEST_SAGAS.failure(data);
  }
}




export default function* ListingSaga(){
  yield all([
    takeEvery(LISTING_COUNTRY_SAGAS.index,handleGetCountryList),
    takeEvery(LISTING_LOCATION_SAGAS.index,handleGetLocationList),
    takeEvery(LISTING_CASE_LOAD_SAGAS.index,handleGetCaseLoadList),
    takeEvery(LISTING_PARTNERS_INFO_SAGAS.index,handleGetPartnersList),
    takeEvery(LISTING_PARTNERS_MY_ADD_SAGAS.index, handleAddMyPartnersList),
    takeEvery(LISTING_PARTNERS_MY_DEFAULT_ADD_SAGAS.index, handleAddDefaultMyPartnersList),
    takeEvery(LISTING_PARTNERS_SEARCH_SAGAS.index,handleGetPartnersSearchList),
    takeEvery(LISTING_MY_PARTNERS_SAGAS.index, handleGetMyPartnersList),
    takeEvery(LISTING_PARTNERS_TYPE_SAGAS.index,handleGetPartnersTypeList),
    takeEvery(LISTING_WORKS_SEARCH_SAGAS.index,handleGetWorksSearchList),
    takeEvery(MESSAGE_LIST_SAGAS.index, handleMessageList),
    takeEvery(MESSAGE_LIST_DELETE_SAGAS.index, handleMessageListDelete),
    takeEvery(MESSAGE_LIST_DELETE_ALL_SAGAS.index, handleMessageListDeleteAll),
    takeEvery(MESSAGE_LIST_READ_SAGAS.index, handleReadMessage),
    takeEvery(LISTING_TEST_SAGAS.index,handleTest),
  ])
}



