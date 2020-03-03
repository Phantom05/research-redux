import {all, takeEvery,call, take} from 'redux-saga/effects';
import {
  AlertFn} from 'lib/library';
import {
  INFO_CASE_UPDATE_SAGAS,
  INFO_CASE_CREATE_SAGAS,
  INFO_CASE_FILE_LIST_COUNT_SAGAS,
  INFO_PARTNERS_SAGAS,
  INFO_CASE_LOAD_SAGAS,
  INFO_INFORMATION_SAGAS,
  INFO_INFORMATION_UPDATE_SAGAS,
  INFO_UPDATE_MY_OPTION_SAGAS,
  INFO_CASE_INIT_DATA_SAGAS,
  INFO_CASE_DELETE_SAGAS,
  INFO_WORKS_DETAIL_SAGAS,
  INFO_PARTNERS_MODAL_INFO_SAGAS,
  MESSAGE_UPDATE_SAGAS,
  WORKSPACE_GET_SAGAS,
  WORKSPACE_SET_SAGAS,
  CHANGE_PROFILE_SAGAS,
  INFO_CASE_COMPLETE_SAGAS,
  INFO_WORKS_CASE_UPDATE_SAGAS,
  INFO_WORKS_APP_DATA_UPLOAD_SAGAS,
  INFO_WORKS_DIRECT_FILE_UPLOAD_SAGAS,
  INFO_WORKS_APP_DATA_DOWNLOAD_SAGAS,
  INFO_WORKS_DIRECT_FILE_DOWNLOAD_SAGAS,
  INFO_WORKS_CHECK_READ_SAGAS,
  INFO_WORKS_CHECK_DOWNLOAD_SAGAS,
  INFO_WORKS_DIRECT_FILE_DELETE_SAGAS,
  SHORTCUT_EXE_SAGAS
} from 'store/actions';

import {Actions} from 'store/actionCreators'
// INFO_INFOMATION_SAGAS,


/**
 * get country list
 * @param {*} param0 
 */
function* handleCreateCase({payload}){
  AlertFn(handleCreateCase.name);
  INFO_CASE_CREATE_SAGAS.pending();
  console.log(payload,'payloadpayloadpayload');
  
  const {data,error} =yield call(INFO_CASE_CREATE_SAGAS.request,payload);
  console.log(data,'data');
  if(data && !error){
    if(data.result ===1){
      INFO_CASE_CREATE_SAGAS.success(data);
    }else{
      INFO_CASE_CREATE_SAGAS.failure(data);
    }
    console.log(data);
  }else{
    console.log(data);
  }
}


/**
 * 
 * @param {*} param0 
 */
function* handleGetListCase({payload}){
  AlertFn(handleGetListCase.name);
  INFO_CASE_FILE_LIST_COUNT_SAGAS.pending();
  const {data,error} =yield call(INFO_CASE_FILE_LIST_COUNT_SAGAS.request,payload);
  if(data && !error){
    if(data.result ===1){
      INFO_CASE_FILE_LIST_COUNT_SAGAS.success(data);
    }else{
      INFO_CASE_FILE_LIST_COUNT_SAGAS.failure(data);
    }
    console.log(data);
  }else{
    console.log(data);
  }
}
/*
 * get mypage info
 * @param {*} param0 
 */
function* handleGetMyinfo({payload}){
  AlertFn(handleGetMyinfo.name);
  INFO_INFORMATION_SAGAS.pending();
  console.log("get my info payload", payload);
  const {data, error} = yield call(INFO_INFORMATION_SAGAS.request, payload);
  console.log("myInfo Saga", data);
  if(data && !error){
      if(data.result === 1){
          INFO_INFORMATION_SAGAS.success(data);
      }else{
          INFO_INFORMATION_SAGAS.failure();
      }
  }else{
      INFO_INFORMATION_SAGAS.failure();
  }
}

/**
 * update mypage info
 * @param {*} param0 
 */
function* handleUpdateMyinfo({payload}){
  AlertFn(handleUpdateMyinfo.name);
  INFO_INFORMATION_UPDATE_SAGAS.pending();
  const {data, error} = yield call(INFO_INFORMATION_UPDATE_SAGAS.request, payload);
  console.log("myInfo update Saga", data);
  if(data && !error){
      if(data.result === 1){
          INFO_INFORMATION_UPDATE_SAGAS.success(data);
      }else{
          INFO_INFORMATION_UPDATE_SAGAS.failure();
      }
  }else{
      INFO_INFORMATION_UPDATE_SAGAS.failure();
  }
}

/**
 * get mypage partner
 * @param {*} param0 
 */
function* handleGetMyPartner({payload}){
  AlertFn(handleGetMyPartner.name);
  INFO_PARTNERS_SAGAS.pending();
  const {data, error} = yield call(INFO_PARTNERS_SAGAS.request, payload);
  if(data && !error){
      if(data.result === 1){
          INFO_PARTNERS_SAGAS.success(data);
      }else{
          INFO_PARTNERS_SAGAS.failure();
      }
  }else{
      INFO_PARTNERS_SAGAS.failure();
  }
}

/**
 * get case load
 * @param {*} param0 
 */
function* handleLoadCase({payload}){
  AlertFn(handleLoadCase.name);
  INFO_CASE_LOAD_SAGAS.pending();
  const {data, error} = yield call(INFO_CASE_LOAD_SAGAS.request, payload);
  if(data && !error){
      if(data.result === 1){
        if(payload.type){
          data.setType = payload.type;
        }
        INFO_CASE_LOAD_SAGAS.success(data);
      }else{
        INFO_CASE_LOAD_SAGAS.failure();
      }
  }else{
    INFO_CASE_LOAD_SAGAS.failure();
  }
}

/**
 * Case update
 * @param {*} param0 
 */
function* handleUpdateCase({payload}){
  AlertFn(handleUpdateCase.name);
  console.log(payload,'????');
  INFO_CASE_UPDATE_SAGAS.pending();
  const {data, error} = yield call(INFO_CASE_UPDATE_SAGAS.request, payload);
  console.log(data,'!');
  if(data && !error){
      if(data.result === 1){
        // Actions.listing_select_panel(payload.userCode);
        INFO_CASE_UPDATE_SAGAS.success(data);
      }else{
        INFO_CASE_UPDATE_SAGAS.failure();
      }
  }else{
    INFO_CASE_UPDATE_SAGAS.failure();
  }
}

/**
 * Works Case update
 * @param {*} param0 
 */
function* handleWorksCaseUpdate({payload}){
  AlertFn(handleWorksCaseUpdate.name);
  console.log(payload,'????');
  
  INFO_WORKS_CASE_UPDATE_SAGAS.pending();
  const {data, error} = yield call(INFO_WORKS_CASE_UPDATE_SAGAS.request, payload);
  console.log(data,'!');
  if(data && !error){
      if(data.result === 1){
        INFO_WORKS_CASE_UPDATE_SAGAS.success(data);
      }else{
        INFO_WORKS_CASE_UPDATE_SAGAS.failure();
      }
  }else{
    INFO_WORKS_CASE_UPDATE_SAGAS.failure();
  }
}


/**
 * Case Delete
 * @param {*} param0 
 */
function* handleDeleteCase({payload}){
  AlertFn(handleDeleteCase.name);
  INFO_CASE_DELETE_SAGAS.pending();
  const {data, error} = yield call(INFO_CASE_DELETE_SAGAS.request, payload);
  if(data && !error){
      if(data.result === 1){
        INFO_CASE_DELETE_SAGAS.success(data);
      }else{
        INFO_CASE_DELETE_SAGAS.failure();
      }
  }else{
    INFO_CASE_DELETE_SAGAS.failure();
  }
}


/**
 * Case update
 * @param {*} param0 
 */
function* handleGetCaseInitData({payload}){
  AlertFn(handleGetCaseInitData.name);
  INFO_CASE_INIT_DATA_SAGAS.pending();
  const {data, error} = yield call(INFO_CASE_INIT_DATA_SAGAS.request, payload);
  if(data && !error){
      if(data.result === 1){
        data.payload = payload;
        INFO_CASE_INIT_DATA_SAGAS.success(data);
      }else{
        INFO_CASE_INIT_DATA_SAGAS.failure();
      }
  }else{
    INFO_CASE_INIT_DATA_SAGAS.failure();
  }
}

/**
 * Works Detail
 * @param {*} param0 
 */
function* handleGetWorksDetail({payload}){
  AlertFn(handleGetWorksDetail.name);
  INFO_WORKS_DETAIL_SAGAS.pending();
  const {data, error} = yield call(INFO_WORKS_DETAIL_SAGAS.request, payload);
  if(data && !error){
      if(data.result === 1){
        INFO_WORKS_DETAIL_SAGAS.success(data);
      }else{
        INFO_WORKS_DETAIL_SAGAS.failure();
      }
  }else{
    INFO_WORKS_DETAIL_SAGAS.failure();
  }
}


/**
 * option update
 * @param {*} param0 
 */
function* handleUpdateOption({payload}){
  INFO_UPDATE_MY_OPTION_SAGAS.pending();
  const {data, error} = yield call(INFO_UPDATE_MY_OPTION_SAGAS.request, payload);
  if(data && !error){
      if(data.result === 1){
        INFO_UPDATE_MY_OPTION_SAGAS.success(data);
      }else{
        INFO_UPDATE_MY_OPTION_SAGAS.failure();
      }
  }else{
    INFO_UPDATE_MY_OPTION_SAGAS.failure();
  }
}

/**
 * option update
 * @param {*} param0 
 */
function* handleGetMypartnerModal({payload}){
  INFO_PARTNERS_MODAL_INFO_SAGAS.pending();
  const {data, error} = yield call(INFO_PARTNERS_MODAL_INFO_SAGAS.request, payload);
  if(data && !error){
      if(data.result === 1){
        INFO_PARTNERS_MODAL_INFO_SAGAS.success(data);
      }else{
        INFO_PARTNERS_MODAL_INFO_SAGAS.failure();
      }
  }else{
    INFO_PARTNERS_MODAL_INFO_SAGAS.failure();
  }
}

/**
 * message update
 * @param {*} param0 
 */
function* handleUpdateMessage({payload}){
  MESSAGE_UPDATE_SAGAS.pending();
  const {data, error} = yield call(MESSAGE_UPDATE_SAGAS.request, payload);
  if(data && !error){
      if(data.result === 1){
        MESSAGE_UPDATE_SAGAS.success(data);
      }else{
        MESSAGE_UPDATE_SAGAS.failure();
      }
  }else{
    MESSAGE_UPDATE_SAGAS.failure();
  }
}
/**
 * mypage option 작업경로 가져옴
 * @param {*} param0 
 */
function* handleGetWorkspace({payload}){
  WORKSPACE_GET_SAGAS.pending();
  const {data, error} = yield call(WORKSPACE_GET_SAGAS.request, payload);
  if(data && !error){
      if(data.result === 1){
        WORKSPACE_GET_SAGAS.success(data);
      }else{
        WORKSPACE_GET_SAGAS.failure();
      }
  }else{
    WORKSPACE_GET_SAGAS.failure();
  }
}

/**
 * mypage option 작업경로 변경
 * @param {*} param0 
 */
function* handleSetWorkspace({payload}){
  WORKSPACE_SET_SAGAS.pending();
  const {data, error} = yield call(WORKSPACE_SET_SAGAS.request, payload);
  if(data && !error){
      if(data.result === 1){
        WORKSPACE_SET_SAGAS.success(data);
      }else{
        WORKSPACE_SET_SAGAS.failure();
      }
  }else{
    WORKSPACE_SET_SAGAS.failure();
  }  
}

/**
 * mypage modify 프로필 이미지 변경
 * @param {*} param0 
 */
function* handleChangeProfile({payload}){
  CHANGE_PROFILE_SAGAS.pending();
  const {data, error} = yield call(CHANGE_PROFILE_SAGAS.request, payload);
  console.log(data,'??')
  if(data && !error){
      if(data.result === 1){
        CHANGE_PROFILE_SAGAS.success(data);
      }else{
        CHANGE_PROFILE_SAGAS.failure();
      }
  }else{
    CHANGE_PROFILE_SAGAS.failure();
  }  
}


/**
 * 케이스 완료
 * @param {*} param0 
 */
function* handleCaseComplete({payload}){
  AlertFn(handleCaseComplete.name);
  console.log(payload,'!!!!papapa@@@@');
  INFO_CASE_COMPLETE_SAGAS.pending();
  const {data, error} = yield call(INFO_CASE_COMPLETE_SAGAS.request, payload);
  console.log(data,'!!!!Complete');
  if(data && !error){
      if(data.result === 1){
        data.isComplete = payload.isComplete;
        INFO_CASE_COMPLETE_SAGAS.success(data);
      }else{
        INFO_CASE_COMPLETE_SAGAS.failure(data);
      }
  }else{
    INFO_CASE_COMPLETE_SAGAS.failure();
  }
}

/**
 * 웍스 앱 데이트 업로드
 * @param {*} param0 
 */
function* handleWorksAppDataUpload({payload}){
  AlertFn(handleWorksAppDataUpload.name);
  // payload.type
  INFO_WORKS_APP_DATA_UPLOAD_SAGAS.pending(payload);
  const {data, error} = yield call(INFO_WORKS_APP_DATA_UPLOAD_SAGAS.request, payload);
  console.log(data,'!!!! INFO_WORKS_APP_DATA_UPLOAD_SAGAS');
  if(data && !error){
      if(data.result === 1){
        data.type = payload.type;
        INFO_WORKS_APP_DATA_UPLOAD_SAGAS.success(data);
      }else{
        INFO_WORKS_APP_DATA_UPLOAD_SAGAS.failure(payload);
      }
  }else{
    INFO_WORKS_APP_DATA_UPLOAD_SAGAS.failure();
  }
}

/**
 * 웍스 앱데이트 다운로드
 * @param {*} param0 
 */
function* handleWorksAppDataDownload({payload}){
  AlertFn(handleWorksAppDataDownload.name);
  // payload.type
  INFO_WORKS_APP_DATA_DOWNLOAD_SAGAS.pending(payload);
  const {data, error} = yield call(INFO_WORKS_APP_DATA_DOWNLOAD_SAGAS.request, payload);
  console.log(data,'!!!! INFO_WORKS_APP_DATA_DOWNLOAD_SAGAS');
  if(data && !error){
      if(data.result === 1){
        console.log(payload,'payload');
        data.type = payload.type;
        INFO_WORKS_APP_DATA_DOWNLOAD_SAGAS.success(data);
      }else{
        INFO_WORKS_APP_DATA_DOWNLOAD_SAGAS.failure(payload);
      }
  }else{
    INFO_WORKS_APP_DATA_DOWNLOAD_SAGAS.failure();
  }
}

/**
 * 웍스 다이렉트 파일 업로드
 * @param {*} param0 
 */
function* handleWorksDirectFileUpload({payload}){
  AlertFn(handleWorksDirectFileUpload.name);
  INFO_WORKS_DIRECT_FILE_UPLOAD_SAGAS.pending();
  const {data, error} = yield call(INFO_WORKS_DIRECT_FILE_UPLOAD_SAGAS.request, payload);
  console.log(data,'!!!!INFO_WORKS_DIRECT_FILE_UPLOAD_SAGAS');
  if(data && !error){
      if(data.result === 1){
        data.uploadFileList = data.direct || [];
        INFO_WORKS_DIRECT_FILE_UPLOAD_SAGAS.success(data);
      }else{
        INFO_WORKS_DIRECT_FILE_UPLOAD_SAGAS.failure();
      }
  }else{
    INFO_WORKS_DIRECT_FILE_UPLOAD_SAGAS.failure();
  }
}


/**
 * 웍스 다이렉트 파일 삭제
 * @param {*} param0 
 */
function* handleWorksDirectFileDelete({payload}){
  AlertFn(handleWorksDirectFileDelete.name);
  INFO_WORKS_DIRECT_FILE_DELETE_SAGAS.pending();
  const {data, error} = yield call(INFO_WORKS_DIRECT_FILE_DELETE_SAGAS.request, payload);
  console.log(data,'!!!!INFO_WORKS_DIRECT_FILE_DELETE_SAGAS');
  if(data && !error){
      if(data.result === 1){
        data.uploadFileList = data.direct || [];
        INFO_WORKS_DIRECT_FILE_DELETE_SAGAS.success(data);
      }else{
        INFO_WORKS_DIRECT_FILE_DELETE_SAGAS.failure();
      }
  }else{
    INFO_WORKS_DIRECT_FILE_DELETE_SAGAS.failure();
  }
}


/**
 * 웍스 다이렉트 파일 업로드
 * @param {*} param0 
 */
function* handleWorksDirectFileDownload({payload}){
  AlertFn(handleWorksDirectFileDownload.name);
  INFO_WORKS_DIRECT_FILE_DOWNLOAD_SAGAS.pending();
  const {data, error} = yield call(INFO_WORKS_DIRECT_FILE_DOWNLOAD_SAGAS.request, payload);
  console.log(data,'!!!!INFO_WORKS_DIRECT_FILE_DOWNLOAD_SAGAS');
  if(data && !error){
      if(data.result === 1){
        INFO_WORKS_DIRECT_FILE_DOWNLOAD_SAGAS.success(data);
      }else{
        INFO_WORKS_DIRECT_FILE_DOWNLOAD_SAGAS.failure();
      }
  }else{
    INFO_WORKS_DIRECT_FILE_DOWNLOAD_SAGAS.failure();
  }
}


/**
 * 일방적으로 보내기만하는 api saga
 * @param {*} param0 
 */
function* handleCheckWorksRead({payload}){
  AlertFn(handleCheckWorksRead.name);
  console.log(payload);
  const {data, error} = yield call(INFO_WORKS_CHECK_READ_SAGAS.request, payload);
  console.log(data,'!!!!INFO_WORKS_CHECK_READ_SAGAS');
  if(data && !error){
    if(data.result === 1){
      INFO_WORKS_CHECK_READ_SAGAS.success(data);
    }else{
      INFO_WORKS_CHECK_READ_SAGAS.failure(data);
    }
  }else{
    INFO_WORKS_CHECK_READ_SAGAS.failure(data);
  }
}

/**
 * 일방적으로 보내기만하는 api saga
 * @param {*} param0 
 */
function* handleCheckWorksDownload({payload}){
  AlertFn(handleCheckWorksDownload.name);
  console.log(payload,'@#%@#%@#%@#%');
  const {data, error} = yield call(INFO_WORKS_CHECK_DOWNLOAD_SAGAS.request, payload);
  console.log(data,'!!!!INFO_WORKS_CHECK_DOWNLOAD_SAGAS');
  if(data && !error){
    if(data.result === 1){
      INFO_WORKS_CHECK_DOWNLOAD_SAGAS.success(data);
    }else{
      INFO_WORKS_CHECK_DOWNLOAD_SAGAS.failure(data);
    }
  }else{
    INFO_WORKS_CHECK_DOWNLOAD_SAGAS.failure(data);
  }
}
/**
 * 웍스 다이렉트 파일 업로드
 * @param {*} param0 
 */
function* handleUploadShortcut({payload}){
  AlertFn(handleUploadShortcut.name);
  SHORTCUT_EXE_SAGAS.pending();
  const {data, error} = yield call(SHORTCUT_EXE_SAGAS.request, payload);
  console.log(data,'!!!!SHORTCUT_EXE_SAGAS');
  if(data && !error){
      if(data.result === 1){
        SHORTCUT_EXE_SAGAS.success(data);
      }else{
        SHORTCUT_EXE_SAGAS.failure();
      }
  }else{
    SHORTCUT_EXE_SAGAS.failure();
  }
}



export default function* InfoSaga(){
  yield all([
    takeEvery(INFO_CASE_CREATE_SAGAS.index,handleCreateCase),
    takeEvery(INFO_CASE_UPDATE_SAGAS.index,handleUpdateCase),
    takeEvery(INFO_CASE_DELETE_SAGAS.index,handleDeleteCase),
    takeEvery(INFO_CASE_FILE_LIST_COUNT_SAGAS.index,handleGetListCase),
    takeEvery(INFO_CASE_LOAD_SAGAS.index, handleLoadCase),
    takeEvery(INFO_INFORMATION_SAGAS.index, handleGetMyinfo),
    takeEvery(INFO_INFORMATION_UPDATE_SAGAS.index, handleUpdateMyinfo),
    takeEvery(INFO_PARTNERS_SAGAS.index, handleGetMyPartner),
    takeEvery(INFO_CASE_INIT_DATA_SAGAS.index, handleGetCaseInitData),
    takeEvery(INFO_UPDATE_MY_OPTION_SAGAS.index, handleUpdateOption),
    takeEvery(INFO_WORKS_DETAIL_SAGAS.index, handleGetWorksDetail),
    takeEvery(INFO_PARTNERS_MODAL_INFO_SAGAS.index, handleGetMypartnerModal),
    takeEvery(MESSAGE_UPDATE_SAGAS.index, handleUpdateMessage),
    takeEvery(WORKSPACE_GET_SAGAS.index, handleGetWorkspace),
    takeEvery(WORKSPACE_SET_SAGAS.index, handleSetWorkspace),
    takeEvery(CHANGE_PROFILE_SAGAS.index, handleChangeProfile),
    takeEvery(INFO_CASE_COMPLETE_SAGAS.index, handleCaseComplete),
    takeEvery(INFO_WORKS_CASE_UPDATE_SAGAS.index, handleWorksCaseUpdate),
    takeEvery(INFO_WORKS_APP_DATA_UPLOAD_SAGAS.index, handleWorksAppDataUpload),
    takeEvery(INFO_WORKS_APP_DATA_DOWNLOAD_SAGAS.index, handleWorksAppDataDownload),
    takeEvery(INFO_WORKS_DIRECT_FILE_UPLOAD_SAGAS.index, handleWorksDirectFileUpload),
    takeEvery(INFO_WORKS_DIRECT_FILE_DOWNLOAD_SAGAS.index, handleWorksDirectFileDownload),
    takeEvery(INFO_WORKS_DIRECT_FILE_DELETE_SAGAS.index, handleWorksDirectFileDelete),
    takeEvery(INFO_WORKS_CHECK_READ_SAGAS.index, handleCheckWorksRead),
    takeEvery(INFO_WORKS_CHECK_DOWNLOAD_SAGAS.index, handleCheckWorksDownload),
    takeEvery(SHORTCUT_EXE_SAGAS.index, handleUploadShortcut),
  ])
}










// function* handleGetMyPartner({payload}){
//   roleSaga(INFO_CASA_FILE_LIST_COUNT_SAGAS)
//   .success(function(res){
//     alert('성공 했습니다.')
//   })
//   .failure(function(res){
//     alert('실패 했습니다.')
//   })
// }