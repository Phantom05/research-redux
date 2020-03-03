import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { CaseInfoTopCard } from 'components/common/card';
import { CasePanel } from 'components/common/panel';
import { useImmer } from 'use-immer';
import moment from 'moment';
import { fixedNumbering } from 'lib/library';
import {CustomLoadingCircle} from 'components/base/loading';  
import styled from 'styled-components';
import _ from 'lodash';

import {
  PlainModal,
  ModalPartnerChangeContent,
  ModalCaseListContent,
  ModalComplete,
} from 'components/common/modal';
import {
  INFO_CASE_CREATE_SAGAS,
  INFO_CASE_LOAD_SAGAS,
  INFO_CASE_UPDATE_SAGAS,
  INFO_CASE_INIT_DATA_SAGAS
} from 'store/actions';
import { withRouter } from 'react-router-dom';
import { Actions } from 'store/actionCreators';
// import {LoadingCircle} from 'components/base/loading';

const initialImmer = {
  caseId: '',
  dueDate: moment().unix(),
  userCode: "",
  senderCode: "",
  receiverCode: "",
  patient: '',
  caseCode: "",
  caseCount: "",
  stage:"",
  readType: "",
  partner: {
    title: '',
    id: ''
  },
  modal: {
    dim: true,
    isOpen: false,
    current: false,
    load: false,
    create: false,
    cloud: false
  },
  load: {
    success: false,
  },
  create: {
    success: false
  },
  indication: null,
  cloudBtn: {
    disable: true,
    isShow: true,
  },
  memo: {
    senderMemo: "",
    receiverMemo: ""
  }
}
function CaseContainer() {
  const { auth: authReducer, info: infoReducer } = useSelector(state => state);
  const [values, setValue] = useImmer(initialImmer);
  const {
    caseId,
    dueDate,
    patient,
    modal,
    userCode,
    senderCode,
    receiverCode,
    memo: { senderMemo, receiverMemo }
  } = values;
  const { signIn } = authReducer;
  const companyName = signIn.profile.company;
  const rCase = infoReducer.case;
  const caseCount = rCase.caseCount;
  const currentModalName = modal.current;
  const caseType = rCase.type;


  const handleChange = (config) => {
    const { type, value, 
// name 
    } = config;

    if (type === 'patient') {
      setValue(draft => {
        draft.cloudBtn.disable = true;
        draft[type] = value;
      })
    }

    if (type === 'caseId' || type === 'patient') {
      const moDate = moment.unix(dueDate).format(`YYYYMMDD`);
      const comName = companyName ? `-${companyName}` : '';
      const viewValue = value.length ? `-${value}-` : `-${value}`;

      setValue(draft => {
        draft[type] = value;
        draft.cloudBtn.disable = true;
        draft.caseId = `${moDate}${comName}${viewValue}${fixedNumbering(values.caseCount, 4)}`;
      })
    }

    if (type === 'dueDate') {
      setValue(draft => {
        draft.cloudBtn.disable = true;
        draft[type] = value;
      })
    }
  }

  const handleClick = value => (e) => {
    if (value === 'new') {
      // window.location.reload();
      setValue(draft=>initialImmer);
      Actions.info_case_init();
      initialize({type:'init'});
    }else{
      setValue(draft => {
        if (value === 'cloud') {

        }
        if (value === 'load') {
          draft.modal.current = value;
          draft.modal.isOpen = true;
        }
        if (value === 'partners') {
          draft.modal.current = value;
          draft.modal.isOpen = true;
        }
        if (value === 'dim') {
          draft.modal.isOpen = false;
        }
      });
    }
  }


  
  
  const handleSubmit = value => config => {
    const { name, panel } = value;
    if (value === 'changePartner') {
      const changeInfo = config.companySelected;
      console.log(changeInfo,'changeInfo!');
      setValue(draft => {
        draft.partner.title = changeInfo.companyName;
        draft.partner.id = changeInfo.value;
        draft.modal.isOpen = false;
        draft.receiverCode = changeInfo.value
      });

    }
    if (value === 'caseLoadData') {
      const loadConfig = {
        caseCode: config.id,
        userCode: signIn.profile.userCode
      }
      INFO_CASE_LOAD_SAGAS(loadConfig);
    }
    if (name === 'create') {
      const createObj = {
        caseId: values.caseId,
        senderCode: values.senderCode,
        receiverCode: values.receiverCode,
        patient: values.patient,
        dueDate: values.dueDate,
        senderMemo: panel.sender.editor.content,
        indication: values.indication,
      }
      console.log(createObj, 'createObj');
      INFO_CASE_CREATE_SAGAS(createObj)
    }
    if (name === 'update') {

      const updateObj = {
        caseId: values.caseId,
        senderCode: values.senderCode,
        receiverCode: values.receiverCode,
        patient: values.patient,
        dueDate: values.dueDate,
        senderMemo: panel.sender.editor.content,
        receiverMemo: panel.receiver.editor.content,
        indication: values.indication,
        caseCode: values.caseCode,
        type: values.readType,
        userCode: values.userCode,
        // userCode:signIn.profile.userCode,
      }
      console.log(updateObj, 'updateObj');
      INFO_CASE_UPDATE_SAGAS(updateObj);
    }
    if (name === 'modify') {
      Actions.info_case_type_change({ type: "modify" })
    }
  }

  const modalObj = {
    load: {
      type: "caseLoad",
      content: <ModalCaseListContent
        onSubmit={handleSubmit("caseLoadData")}
      />,
      width: 800
    },
    create: {
      type: "Create",
      content: <ModalComplete
        title={"케이스가 생성되었습니다."}
        children={'케이스가 생성되었습니다.'}
        onClick={() => {
          const loadConfig = {
            caseCode: values.caseCode,
            userCode: signIn.profile.userCode
          }
          INFO_CASE_LOAD_SAGAS(loadConfig);
        }}
      />,
      width: 450
    },
    cloud: {
      type: "Cloud",
      content: "Cloud",
      width: null
    },
    partners: {
      type: 'partners',
      content: <ModalPartnerChangeContent
        onSubmit={handleSubmit('changePartner')}
      />,
      width: 750
    },
    update: {
      type: "update",
      content: <ModalComplete
        title={"업데이트가 완료되었습니다."}
        children={'업데이트가 완료되었습니다.'}
        onClick={() => {
          const loadConfig = {
            caseCode: values.caseCode,
            userCode: signIn.profile.userCode
          }
          INFO_CASE_LOAD_SAGAS(loadConfig);
        }}
      />,
      width: 450
    }
  };
  const modalInfo = modalObj[currentModalName];


  const loadDateFn = () => {
    console.log(rCase.data,'로드!!!!rCase.data');
    const {
      caseId,
      patient,
      dueDate,
      receiverName,
      senderMemo,
      receiverMemo,
      caseCode,
      receiverCode,
      senderCode,
      type,
      stage
    } = rCase.data;
    

    setValue(draft => {
      draft.cloudBtn.isShow = false;
      draft.modal.isOpen = false;
      draft.modal.dim = true;
      draft.caseId = caseId;
      draft.patient = patient;
      draft.dueDate = dueDate;
      draft.partner.title =  receiverName;
      draft.partner.id = receiverCode;
      draft.memo.senderMemo = senderMemo;
      draft.memo.receiverMemo = receiverMemo;
      draft.receiverCode = receiverCode;
      draft.senderCode = senderCode;
      draft.caseCode = caseCode;
      draft.stage = stage;
      // DEBUG: 센더 로드 테스팅
      draft.userCode = signIn.profile.userCode;
      draft.readType = type;
      // DEBUG: 리시버 로드 테스팅
      // draft.readType = 1;
      // draft.userCode = '20Jan31-0001'
    });
    Actions.base_scrollbars_control({type: 'update',name:"reset"});
  }


  const initialize=(config)=>{
    const type = config.type;
      if (type === 'load') {
      loadDateFn();
    } else {
      INFO_CASE_INIT_DATA_SAGAS({ userCode: signIn.profile.userCode,type:"init" });
    }
  }

    // NOTE: case modify & create & nit get data
    useEffect(() => {
      console.log(rCase.init);
      if(rCase.init.success){
        console.log('init success');
        const moDate = moment.unix(dueDate).format(`YYYYMMDD`);
        const comName = companyName ? `-${companyName}-` : '-';
        const reducerCaseData = rCase.data;
        const caseCount = reducerCaseData.caseCount;
        const userCode = signIn.profile.userCode;
        setValue(draft => {
          draft.caseCount = caseCount;
          draft.caseId = `${moDate}${comName}${fixedNumbering(caseCount, 4)}`;
          draft.userCode = userCode;
          draft.partner.title = reducerCaseData.company; // partner 회사
          draft.partner.id = reducerCaseData.partnerCode;
          draft.senderCode = userCode;
          draft.receiverCode = reducerCaseData.partnerCode;
        });
      }
  
      if(rCase.create.success){
        console.log('create success');
        setValue(draft => {
          draft.cloudBtn.disable = false;
          draft.modal.current = 'create';
          draft.modal.isOpen = true;
          draft.modal.dim = false;
          draft.caseCode = rCase.data.caseCode;
        });
      }
      if (rCase.update.success) {
        console.log('update success');
        setValue(draft => {
          draft.cloudBtn.disable = false;
          draft.modal.current = 'update';
          draft.modal.isOpen = true;
          draft.modal.dim = false;
        });
      } 
      
      if(!rCase.create.success || !rCase.update.success){
        setValue(draft => {
          draft.cloudBtn.disable = true;
        });
        }
    }, [rCase.update.success,rCase.create.success,rCase.init.success]);

    

  // NOTE: case load
  useEffect(() => {
    if (rCase.load.success) {
      //NOTE: type modify로 요청할수 있어서 load로 로드시 type수정을 뼀음.
      initialize({type:"load"});
    }
  }, [rCase.load.success]);

  useEffect(() => {
    //DEBUG: init 부분 수정해야함 init할때 userCode를 가져오기때문에.
    if(!rCase.load.success){
      console.log('init?');
      initialize({type:"init"});
    }
    return () => {
      Actions.info_case_init();
    }
  }, []);


  let infoTopObj = {
    caseCount,
    caseId,
    patient,
    dueDate,
    senderCode,
    receiverCode,
    senderMemo,
    receiverMemo,
    userCode,
    receiverName: values.partner.title,
    stage:values.stage
  }
  const caseData = infoTopObj;
  // console.log(rCase.load);
  console.log(caseData,'caseData');
  // console.log(caseType,'caseTypecaseType');

  return (
    <>
      <PlainModal
        type={modalInfo && modalInfo.type}
        isOpen={modal.isOpen}
        onClick={handleClick('dim')}
        content={modalInfo && modalInfo.content}
        width={modalInfo && modalInfo.width}
        dim={modal.dim}
      />

      {rCase.load.pending 
        ? <WorksWhiteLoading />
        : <>
          <CaseInfoTopCard
            onClick={handleClick}
            onChange={handleChange}
            info={caseData}
            type={caseType}
            profile={signIn.profile}
          />
          <CasePanel
            onClick={handleClick}
            onChange={handleChange}
            onSubmit={handleSubmit}
            type={caseType}
            values={values}
            info={caseData}
            profile={signIn.profile}
          />
        </>
      }

    </>
  );
}

function WorksWhiteLoading(){
  return (
    <Styled.WorksWhite >
    <div className="works__loading">
      <CustomLoadingCircle />
    </div>
  </Styled.WorksWhite>
  )
}

export default withRouter(CaseContainer);

const Styled ={
  WorksWhite:styled.div`
    position:relative;
    min-height:71vh;
    .works__loading{
      z-index:1;
      position:absolute;
      left:50%;
      top:50%;
      transform:translate(-50%,-50%);
      color:red;
    }
  `
}
