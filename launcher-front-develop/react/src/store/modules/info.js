import { handleActions } from 'redux-actions';
import * as actions from 'store/actions';
import produce from 'immer';
import moment from 'moment';
import _ from 'lodash';

export const initialState = {
  case: {
    type: "create",
    data: {
      userCode:"",
      senderCode:"",
      receiverCode:"",
      caseCode:"",
      caseCount:"",
      partnerCode:"",
      company:"",
      caseId: "",
      patient: '',
      dueDate: moment().valueOf(),
      senderMemo:"",
      receiverMemo:"",
      stage: 0,
    },
    load: {
      pending: false,
      success: false,
      failure: false,
    },
    list: {
      count: null
    },
    init:{
      pending: false,
      success: false,
      failure: false,
    },
    create: {
      pending: false,
      success: false,
      failure: false,
    },
    update: {
      pending: false,
      success: false,
      failure: false,
    },
    delete:{
      pending: false,
      success: false,
      failure: false,
    },
    complete:{
      isComplete:'',
      pending: false,
      success: false,
      failure: false,
    }
  },
  works:{
    data:{},
    cashing:{
      list:[],
    },
    read:{
      pending: false,
      success: false,
      failure: false,
    },
    download:{
      pending: false,
      success: false,
      failure: false,
    },
    detail:{
      pending: false,
      success: false,
      failure: false,
    },
    upload:{
      direct:{
        pending: false,
        success: false,
        failure: false,
        uploadFileList:[]
      },
      appData:{
        appChangeName:"",
        appDataType:{},
        appDataCloudDir:"",
        pending: false,
        success: false,
        failure: false,
      },
    },
    delete:{
      direct:{
        pending: false,
        success: false,
        failure: false,
      },
      appData:{
        pending: false,
        success: false,
        failure: false,
      },
    },
    download:{
      direct:{
        pending: false,
        success: false,
        failure: false,
      },
      appData:{
        pending: false,
        success: false,
        failure: false,
      },
    },
  },
  partnerModal: {
    pending: false,
    success: false,
    failure: false,
    info:{}
  },
  messageUpdate: {
    pending: false,
    success: false,
    failure: false
  }
}




export default handleActions({
  // NOTE: INFO init
  [actions.INFO_CASE_INIT]: (state, { payload: diff }) => {
    return produce(state, draft => {
      console.log('INFO_CASE_INIT');
      draft.case = initialState.case;
    })
  },
  // NOTE: Create Case
  [actions.INFO_CASE_CREATE.PENDING]: (state, { payload: diff }) => {
    return produce(state, draft => {
      console.log('INFO_CASE_CREATE pending');
      draft.case.create.pending = true;
      draft.case.create.success = false;
      draft.case.create.failure = false;
    })
  },
  [actions.INFO_CASE_CREATE.SUCCESS]: (state, { payload: diff }) => {
    return produce(state, draft => {
      console.log('INFO_CASE_CREATE success');
      draft.case.data.caseCode = diff.caseCode;
      draft.case.create.pending = false;
      draft.case.create.success = true;
      draft.case.create.failure = false;
    })
  },
  [actions.INFO_CASE_CREATE.FAILURE]: (state, { payload: diff }) => {
    return produce(state, draft => {
      console.log('INFO_CASE_CREATE failure');
      draft.case.create.pending = false;
      draft.case.create.success = false;
      draft.case.create.failure = true;
    });
  },

  // NOTE: Case Type Change
  [actions.INFO_CASE_TYPE_CHANGE]: (state, { payload: diff }) => {
    return produce(state, draft => {
      console.log('INFO_CASE_TYPE_CHANGE');
      const { type } = diff;
      console.log(type,'!!type');
      draft.case.type = type;

    })
  },
  // NOTE: Get List Case Count
  [actions.INFO_CASE_FILE_LIST_COUNT.SUCCESS]: (state, { payload: diff }) => {
    return produce(state, draft => {
      console.log('INFO_CASE_FILE_LIST_COUNT success');
      console.log(diff, '!');
      draft.case.list.count = diff.listCount;
    })
  },
  [actions.INFO_CASE_FILE_LIST_COUNT.FAILURE]: (state, { payload: diff }) => {
    return produce(state, draft => {
      console.log('INFO_CASE_FILE_LIST_COUNT failure');

    });
  },

  // NOTE: Case init
  // [actions.INFO_CASE_LOAD.PENDING]: (state, { payload: diff }) => {
  //   return produce(state, draft => {
  //     console.log('INFO_CASA_LOAD pending');
  //     draft.case.load.pending = true;
  //     draft.case.load.success = false;
  //     draft.case.load.failure = false;
  //     draft.case.load.data = null;
  //   })
  // },

  // NOTE: Case Load
  [actions.INFO_CASE_LOAD.INIT]: (state, { payload: diff }) => {
    return produce(state, draft => {
      console.log('INFO_CASA_LOAD pending');
      draft.case.load = initialState.case.load
    })
  },
  [actions.INFO_CASE_LOAD.PENDING]: (state, { payload: diff }) => {
    return produce(state, draft => {
      console.log('INFO_CASA_LOAD pending');
      draft.case.load.pending = true;
      draft.case.load.success = false;
      draft.case.load.failure = false;
      draft.case.load.data = null;
    })
  },
  [actions.INFO_CASE_LOAD.SUCCESS]: (state, { payload: diff }) => {
    return produce(state, draft => {
      console.log('INFO_CASA_LOAD success');
      draft.case.load.pending = false;
      draft.case.load.success = true;
      draft.case.load.failure = false;
      if(diff.setType){   
        draft.case.type = diff.setType; 
      }else{
        draft.case.type = 'load';
      }
      draft.case.data = diff.caseInfo;
    })
  },
  [actions.INFO_CASE_LOAD.FAILURE]: (state, { payload: diff }) => {
    return produce(state, draft => {
      console.log('INFO_CASA_LOAD failure');
      draft.case.load.pending = false;
      draft.case.load.success = false;
      draft.case.load.failure = true;
      draft.case.load.data = null;
    });
  },


  // NOTE: Case Update
  [actions.INFO_CASE_UPDATE.PENDING]: (state, { payload: diff }) => {
    return produce(state, draft => {
      console.log('INFO_CASE_UPDATE pending');
      draft.case.update.pending = true;
      draft.case.update.success = false;
      draft.case.update.failure = false;
    })
  },
  [actions.INFO_CASE_UPDATE.SUCCESS]: (state, { payload: diff }) => {
    return produce(state, draft => {
      console.log('INFO_CASE_UPDATE success');
      console.log(diff, '!');
      draft.case.update.pending = false;
      draft.case.update.success = true;
      draft.case.update.failure = false;
      // draft.case.type = 'update';
    })
  },
  [actions.INFO_CASE_UPDATE.FAILURE]: (state, { payload: diff }) => {
    return produce(state, draft => {
      console.log('INFO_CASE_UPDATE failure');
      draft.case.update.pending = false;
      draft.case.update.success = false;
      draft.case.update.failure = true;
    });
  },

  // NOTE: Case Update
  [actions.INFO_WORKS_CASE_UPDATE.INIT]: (state, { payload: diff }) => {
    return produce(state, draft => {
      console.log('INFO_WORKS_CASE_UPDATE init');
      draft.case.update.pending = false;
      draft.case.update.success = false;
      draft.case.update.failure = false;
    })
  },
  [actions.INFO_WORKS_CASE_UPDATE.PENDING]: (state, { payload: diff }) => {
    return produce(state, draft => {
      console.log('INFO_WORKS_CASE_UPDATE pending');
      draft.case.update.pending = true;
      draft.case.update.success = false;
      draft.case.update.failure = false;
    })
  },
  [actions.INFO_WORKS_CASE_UPDATE.SUCCESS]: (state, { payload: diff }) => {
    return produce(state, draft => {
      console.log('INFO_WORKS_CASE_UPDATE success');
      console.log(diff, '!');
      draft.case.update.pending = false;
      draft.case.update.success = true;
      draft.case.update.failure = false;
      // draft.case.type = 'update';
    })
  },
  [actions.INFO_WORKS_CASE_UPDATE.FAILURE]: (state, { payload: diff }) => {
    return produce(state, draft => {
      console.log('INFO_WORKS_CASE_UPDATE failure');
      draft.case.update.pending = false;
      draft.case.update.success = false;
      draft.case.update.failure = true;
    });
  },
  

  // NOTE: Case Delete
  [actions.INFO_CASE_DELETE.INIT]: (state, { payload: diff }) => {
    return produce(state, draft => {
      console.log('INFO_CASE_DELETE pending');
      draft.case.delete.pending = false;
      draft.case.delete.success = false;
      draft.case.delete.failure = false;
    })
  },
  [actions.INFO_CASE_DELETE.PENDING]: (state, { payload: diff }) => {
    return produce(state, draft => {
      console.log('INFO_CASE_DELETE pending');
      draft.case.delete.pending = true;
      draft.case.delete.success = false;
      draft.case.delete.failure = false;
    })
  },
  [actions.INFO_CASE_DELETE.SUCCESS]: (state, { payload: diff }) => {
    return produce(state, draft => {
      console.log('INFO_CASE_DELETE success');
      console.log(diff, '!');
      draft.case.delete.pending = false;
      draft.case.delete.success = true;
      draft.case.delete.failure = false;
      // draft.case.type = 'update';
    })
  },
  [actions.INFO_CASE_DELETE.FAILURE]: (state, { payload: diff }) => {
    return produce(state, draft => {
      console.log('INFO_CASE_DELETE failure');
      draft.case.delete.pending = false;
      draft.case.delete.success = false;
      draft.case.delete.failure = true;
    });
  },

  // NOTE: Complete case
  [actions.INFO_CASE_COMPLETE.INIT]: (state, { payload: diff }) => {
    return produce(state, draft => {
      console.log('INFO_CASE_COMPLETE pending');
      draft.case.complete = initialState.case.complete;
    })
  },
  [actions.INFO_CASE_COMPLETE.PENDING]: (state, { payload: diff }) => {
    return produce(state, draft => {
      console.log('INFO_CASE_COMPLETE pending');
      draft.case.complete.pending = true;
      draft.case.complete.success = false;
      draft.case.complete.failure = false;
    })
  },
  [actions.INFO_CASE_COMPLETE.SUCCESS]: (state, { payload: diff }) => {
    return produce(state, draft => {
      console.log('INFO_CASE_COMPLETE success');
      console.log(diff, '!');
      draft.case.complete.isComplete = diff.isComplete;
      draft.case.complete.pending = false;
      draft.case.complete.success = true;
      draft.case.complete.failure = false;
      // draft.case.type = 'update';
    })
  },
  [actions.INFO_CASE_COMPLETE.FAILURE]: (state, { payload: diff }) => {
    return produce(state, draft => {
      console.log('INFO_CASE_COMPLETE failure');
      draft.case.complete.pending = false;
      draft.case.complete.success = false;
      draft.case.complete.failure = true;
    });
  },
  
  

  // NOTE: Case get init data
  [actions.INFO_CASE_INIT_DATA.PENDING]: (state, { payload: diff }) => {
    return produce(state, draft => {
      console.log('INFO_CASE_INIT_DATA pending');
      draft.case.init.pending = true;
      draft.case.init.success = false;
      draft.case.init.failure = false;
    })
  },
  [actions.INFO_CASE_INIT_DATA.SUCCESS]: (state, { payload: diff }) => {
    return produce(state, draft => {
      console.log('INFO_CASE_INIT_DATE success');
      console.log(diff, '!');
      draft.case.data.caseCount = diff.caseInit.caseCount;
      draft.case.data.partnerCode =  diff.caseInit.code;
      draft.case.data.company =  diff.caseInit.company;
      draft.case.init.pending = false;
      draft.case.init.success = true;
      draft.case.init.failure = false;
      // draft.case.type = 'update';
    })
  },
  [actions.INFO_CASE_INIT_DATA.FAILURE]: (state, { payload: diff }) => {
    return produce(state, draft => {
      console.log('INFO_CASE_INIT_DATA failure');
      draft.case.init.pending = false;
      draft.case.init.success = false;
      draft.case.init.failure = true;
    });
  },


  // NOTE: Works Detail
  [actions.INFO_WORKS_DETAIL.INIT]: (state, { payload: diff }) => {
    return produce(state, draft => {
      console.log('INFO_WORKS_DETAIL init');
      // draft.works.data = initialState.works.data;
      draft.works = initialState.works;
    })
  },
  [actions.INFO_WORKS_DETAIL.PENDING]: (state, { payload: diff }) => {
    return produce(state, draft => {
      console.log('INFO_WORKS_DETAIL pending');
      draft.works.detail.pending = true;
      draft.works.detail.success = false;
      draft.works.detail.failure = false;
    })
  },
  [actions.INFO_WORKS_DETAIL.SUCCESS]: (state, { payload: diff }) => {
    return produce(state, draft => {
      console.log('INFO_WORKS_DETAIL success');
      console.log(diff, '!');
      const resultCaseData = diff.case;
      // draft.case.data.caseCount = diff.caseInit.caseCount;
      // draft.case.data.partnerCode =  diff.caseInit.code;
      // draft.case.data.company =  diff.caseInit.company;

      // const hasCaseCode = _.findIndex(draft.works.cashing.list, 
      //   function(o) { return o.caseCode == resultCaseData.caseCode; });        
        // if(hasCaseCode === -1){
        //   draft.works.cashing.list.push(diff.case)
        // }
        
      draft.works.data =  diff.case;
      draft.works.detail.pending = false;
      draft.works.detail.success = true;
      draft.works.detail.failure = false;
      // draft.case.type = 'update';
    })
  },
  [actions.INFO_WORKS_DETAIL.FAILURE]: (state, { payload: diff }) => {
    return produce(state, draft => {
      console.log('INFO_WORKS_DETAIL failure');
      draft.works.detail.pending = false;
      draft.works.detail.success = false;
      draft.works.detail.failure = true;
    });
  },


  // NOTE: Works App Upload,Download both init
  [actions.INFO_WORKS_CLOUD_RESET]: (state, { payload: diff }) => {
    return produce(state, draft => {
      console.log('INFO_WORKS_CLOUD_RESET INIT');
    draft.works.upload= initialState.works.upload;
    draft.works.download = initialState.works.download;
    draft.works.delete = initialState.works.delete;
    })
  },

  // NOTE: Works App data upload
  [actions.INFO_WORKS_APP_DATA_UPLOAD.INIT]: (state, { payload: diff }) => {
    return produce(state, draft => {
      console.log('INFO_WORKS_APP_DATA_UPLOAD INIT');
      draft.works.upload.appData = initialState.works.upload.appData;
    })
  },
  [actions.INFO_WORKS_APP_DATA_UPLOAD.PENDING]: (state, { payload: diff }) => {
    return produce(state, draft => {
      console.log('INFO_WORKS_APP_DATA_UPLOAD pending');
      draft.works.upload.appData.pending = true;
      draft.works.upload.appData.success = false;
      draft.works.upload.appData.failure = false;
    })
  },
  [actions.INFO_WORKS_APP_DATA_UPLOAD.SUCCESS]: (state, { payload: diff }) => {
    return produce(state, draft => {
      console.log('INFO_WORKS_APP_DATA_UPLOAD success');
      console.log(diff,'@@@@@@');
      if(diff.appDataCloudDir){
        draft.works.upload.appData.appDataCloudDir = diff.appDataCloudDir;
      }
      if(diff.appDataType){
        draft.works.upload.appData.appDataType = diff.appDataType;
      }
      if(diff.appChangeName){
        draft.works.upload.appData.appChangeName = diff.appChangeName;
      }
      draft.works.upload.appData.pending = false;
      draft.works.upload.appData.success = true;
      draft.works.upload.appData.failure = false;
    })
  },
  [actions.INFO_WORKS_APP_DATA_UPLOAD.FAILURE]: (state, { payload: diff }) => {
    return produce(state, draft => {
      console.log('INFO_WORKS_APP_DATA_UPLOAD failure');
      draft.works.upload.appData.pending = false;
      draft.works.upload.appData.success = false;
      draft.works.upload.appData.failure = true;
    });
  },

    // NOTE: Works App data download
    [actions.INFO_WORKS_APP_DATA_DOWNLOAD.INIT]: (state, { payload: diff }) => {
      return produce(state, draft => {
        console.log('INFO_WORKS_APP_DATA_DOWNLOAD INIT');
      draft.works.download.appData.pending = false;
      draft.works.download.appData.success = false;
      draft.works.download.appData.failure = false;
      })
    },
    [actions.INFO_WORKS_APP_DATA_DOWNLOAD.PENDING]: (state, { payload: diff }) => {
      return produce(state, draft => {
        console.log('INFO_WORKS_APP_DATA_DOWNLOAD pending');
      draft.works.download.appData.pending = true;
      draft.works.download.appData.success = false;
      draft.works.download.appData.failure = false;
      })
    },
    [actions.INFO_WORKS_APP_DATA_DOWNLOAD.SUCCESS]: (state, { payload: diff }) => {
      return produce(state, draft => {
        console.log('INFO_WORKS_APP_DATA_DOWNLOAD success');
        draft.works.download.appData.pending = false;
        draft.works.download.appData.success = true;
        draft.works.download.appData.failure = false;
      })
    },
    [actions.INFO_WORKS_APP_DATA_DOWNLOAD.FAILURE]: (state, { payload: diff }) => {
      return produce(state, draft => {
        console.log('INFO_WORKS_APP_DATA_DOWNLOAD failure');
        draft.works.download.appData.pending = false;
        draft.works.download.appData.success = false;
        draft.works.download.appData.failure = true;
      });
    },



    // NOTE: Direct file upload
    [actions.INFO_WORKS_DIRECT_FILE_UPLOAD.PENDING]: (state, { payload: diff }) => {
      return produce(state, draft => {
        console.log('INFO_WORKS_DIRECT_FILE_UPLOAD pending');
      draft.works.upload.direct.pending = true;
      draft.works.upload.direct.success = false;
      draft.works.upload.direct.failure = false;
      })
    },
    [actions.INFO_WORKS_DIRECT_FILE_UPLOAD.SUCCESS]: (state, { payload: diff }) => {
      return produce(state, draft => {
        console.log('INFO_WORKS_DIRECT_FILE_UPLOAD success');
        console.log(diff);
        draft.works.upload.direct.uploadFileList = diff.uploadFileList;
        draft.works.upload.direct.pending = false;
        draft.works.upload.direct.success = true;
        draft.works.upload.direct.failure = false;
      })
    },
    [actions.INFO_WORKS_DIRECT_FILE_UPLOAD.FAILURE]: (state, { payload: diff }) => {
      return produce(state, draft => {
        console.log('INFO_WORKS_DIRECT_FILE_UPLOAD failure');
        draft.works.upload.direct.pending = false;
        draft.works.upload.direct.success = false;
        draft.works.upload.direct.failure = true;
      });
    },
    
    // NOTE: Direct file Delete
    [actions.INFO_WORKS_DIRECT_FILE_DELETE.PENDING]: (state, { payload: diff }) => {
      return produce(state, draft => {
        console.log('INFO_WORKS_DIRECT_FILE_DELETE pending');
      draft.works.delete.direct.pending = true;
      draft.works.delete.direct.success = false;
      draft.works.delete.direct.failure = false;
      })
    },
    [actions.INFO_WORKS_DIRECT_FILE_DELETE.SUCCESS]: (state, { payload: diff }) => {
      return produce(state, draft => {
        console.log('INFO_WORKS_DIRECT_FILE_DELETE success');
        console.log(diff);
        draft.works.upload.direct.uploadFileList = diff.uploadFileList;
        draft.works.delete.direct.pending = false;
        draft.works.delete.direct.success = true;
        draft.works.delete.direct.failure = false;
      })
    },
    [actions.INFO_WORKS_DIRECT_FILE_DELETE.FAILURE]: (state, { payload: diff }) => {
      return produce(state, draft => {
        console.log('INFO_WORKS_DIRECT_FILE_DELETE failure');
        draft.works.delete.direct.pending = false;
        draft.works.delete.direct.success = false;
        draft.works.delete.direct.failure = true;
      });
    },
    
    // NOTE: Direct file Download
    [actions.INFO_WORKS_DIRECT_FILE_DOWNLOAD.PENDING]: (state, { payload: diff }) => {
      return produce(state, draft => {
        console.log('INFO_WORKS_DIRECT_FILE_DOWNLOAD pending');
      draft.works.download.direct.pending = true;
      draft.works.download.direct.success = false;
      draft.works.download.direct.failure = false;
      })
    },
    [actions.INFO_WORKS_DIRECT_FILE_DOWNLOAD.SUCCESS]: (state, { payload: diff }) => {
      return produce(state, draft => {
        console.log('INFO_WORKS_DIRECT_FILE_DOWNLOAD success');
        draft.works.download.direct.pending = false;
        draft.works.download.direct.success = true;
        draft.works.download.direct.failure = false;
      })
    },
    [actions.INFO_WORKS_DIRECT_FILE_DOWNLOAD.FAILURE]: (state, { payload: diff }) => {
      return produce(state, draft => {
        console.log('INFO_WORKS_DIRECT_FILE_DOWNLOAD failure');
        draft.works.download.direct.success = false;
        draft.works.download.direct.pending = false;
        draft.works.download.direct.failure = true;
      });
    },
    

  


  // NOTE: My page partner list modal info
  [actions.INFO_PARTNERS_MODAL_INFO.PENDING]: (state, { payload: diff }) => {
    return produce(state, draft => {
      console.log('INFO_PARTNERS_MODAL_INFO pending');
      draft.partnerModal.pending = true;
      draft.partnerModal.success = false;
      draft.partnerModal.failure = false;
    })
  },
  [actions.INFO_PARTNERS_MODAL_INFO.SUCCESS]: (state, { payload: diff }) => {
    return produce(state, draft => {
      console.log('INFO_PARTNERS_MODAL_INFO success');
      console.log(diff, '!');
      draft.partnerModal.pending = false;
      draft.partnerModal.success = true;
      draft.partnerModal.failure = false;
      draft.partnerModal.info = diff.info;
      // draft.case.type = 'update';
    })
  },
  [actions.INFO_PARTNERS_MODAL_INFO.FAILURE]: (state, { payload: diff }) => {
    return produce(state, draft => {
      console.log('INFO_PARTNERS_MODAL_INFO failure');
      draft.partnerModal.pending = false;
      draft.partnerModal.success = false;
      draft.partnerModal.failure = true;
    });
  },



  // NOTE: Message update accept deny
  [actions.MESSAGE_UPDATE.PENDING]: (state, { payload: diff }) => {
    return produce(state, draft => {
      console.log('MESSAGE_UPDATE pending');
      draft.messageUpdate.pending = true;
      draft.messageUpdate.success = false;
      draft.messageUpdate.failure = false;
    })
  },
  [actions.MESSAGE_UPDATE.SUCCESS]: (state, { payload: diff }) => {
    return produce(state, draft => {
      console.log('MESSAGE_UPDATE success');
      console.log(diff, '!');
      draft.messageUpdate.pending = false;
      draft.messageUpdate.success = true;
      draft.messageUpdate.failure = false;
    })
  },
  [actions.MESSAGE_UPDATE.FAILURE]: (state, { payload: diff }) => {
    return produce(state, draft => {
      console.log('MESSAGE_UPDATE failure');
      draft.messageUpdate.pending = false;
      draft.messageUpdate.success = false;
      draft.messageUpdate.failure = true;
    });
  },


    // NOTE: works check read
    [actions.INFO_WORKS_CHECK_READ.INIT]: (state, { payload: diff }) => {
      return produce(state, draft => {
        console.log('INFO_WORKS_CHECK_READ init');
        draft.works.read = initialState.works.read
      })
    },
    [actions.INFO_WORKS_CHECK_READ.PENDING]: (state, { payload: diff }) => {
      return produce(state, draft => {
        console.log('INFO_WORKS_CHECK_READ pending');
        draft.works.read.pending = true;
        draft.works.read.success = false;
        draft.works.read.failure = false;
      })
    },
    [actions.INFO_WORKS_CHECK_READ.SUCCESS]: (state, { payload: diff }) => {
      return produce(state, draft => {
        console.log('INFO_WORKS_CHECK_READ success');
        console.log(diff, '!');
        draft.works.read.pending = false;
        draft.works.read.success = true;
        draft.works.read.failure = false;
      })
    },
    [actions.INFO_WORKS_CHECK_READ.FAILURE]: (state, { payload: diff }) => {
      return produce(state, draft => {
        console.log('INFO_WORKS_CHECK_READ failure');
        draft.works.read.pending = false;
        draft.works.read.success = false;
        draft.works.read.failure = true;
      });
    },

        // NOTE: works download check
        [actions.INFO_WORKS_CHECK_DOWNLOAD.INIT]: (state, { payload: diff }) => {
          return produce(state, draft => {
            console.log('INFO_WORKS_CHECK_DOWNLOAD init');
            draft.works.download = initialState.works.download;
          })
        },
        [actions.INFO_WORKS_CHECK_DOWNLOAD.PENDING]: (state, { payload: diff }) => {
          return produce(state, draft => {
            console.log('INFO_WORKS_CHECK_DOWNLOAD pending');
            draft.works.download.pending = true;
            draft.works.download.success = false;
            draft.works.download.failure = false;
          })
        },
        [actions.INFO_WORKS_CHECK_DOWNLOAD.SUCCESS]: (state, { payload: diff }) => {
          return produce(state, draft => {
            console.log('INFO_WORKS_CHECK_DOWNLOAD success');
            console.log(diff, '!');
            draft.works.download.pending = false;
            draft.works.download.success = true;
            draft.works.download.failure = false;
          })
        },
        [actions.INFO_WORKS_CHECK_DOWNLOAD.FAILURE]: (state, { payload: diff }) => {
          return produce(state, draft => {
            console.log('INFO_WORKS_CHECK_DOWNLOAD failure');
            draft.works.download.pending = false;
            draft.works.download.success = false;
            draft.works.download.failure = true;
          });
        },

  
}, initialState);

