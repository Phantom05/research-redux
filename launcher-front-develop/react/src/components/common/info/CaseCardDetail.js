import React, {useEffect,useState,useRef} from 'react';
import styled from 'styled-components';
import { font, color } from 'styles/__utils';
import Grid from '@material-ui/core/Grid';
import cx from 'classnames';
import moment from 'moment';
import { HtmlConverter } from 'components/base/helpers/convert';
import { PlainModal } from 'components/common/modal';
import { useImmer } from 'use-immer';
import { ModalMemoContent,ModalComplete } from 'components/common/modal';
import { PlainEditor } from 'components/common/editor';
import { useSelector } from 'react-redux';
import {withRouter} from 'react-router-dom';
import {CaseCardArea} from 'components/common/card';
import {  S_CustomCaseTimeLine} from 'components/common/tooltip';
import {FullScreenLoading} from 'components/base/loading';

import {
  checkValueDash,
  convertDateTime,
} from 'lib/library';
import { 
  INFO_CASE_LOAD_SAGAS,
  INFO_WORKS_CASE_UPDATE_SAGAS,
  INFO_CASE_COMPLETE_SAGAS,
  // INFO_WORKS_DETAIL_SAGAS
} from 'store/actions';
import _ from 'lodash';


// import {
//   icon_cloud_data,
//   icon_cloud_no_data,
//   icon_cloud_upload,
// } from 'components/base/images';

// import { image_works_receiver_dim } from 'components/base/images';
// import ShareIcon from '@material-ui/icons/Share';


function CaseCardDetail(props) {
  const { info, 
    // onClick,onSubmit 
  } = props;
  const [values, setValues] = useImmer({
    modal: {
      isPlainModalShow: false,
      value: '',
      isUpdateShow:false,
      isUpdateType:"",
    },
    isUpdateModal:{
      isShow:false,
      title:"",
      content:""
    },
    memo: {
      isEdit: false,
      content: "",
      currentType:"",
      sender:{
        content:"",
        isEdit:false,
      },
      receiver:{
        content:"",
        isEdit:false,
      }
    },
    render:{
      index:0
    },
    updateData:{

    },
    isComplete:'',
    data:{}
  });
  

  const { auth: authReducer, info:infoReducer,listing:listingReducer } = useSelector(state => state);
  
  const userCode            = authReducer.signIn.profile.userCode;
  const isSenderCase        = info.sender && info.sender.code === userCode;
  const isReceiverCase      = info.receiver && info.receiver.code === userCode;
  const senderName          = info && info.sender && info.sender.company;
  const senderCode          = info && info.sender && info.sender.code;
  const receiverName        = info && info.receiver && info.receiver.company;
  const receiverCode        = info && info.receiver && info.receiver.code;
  const senderInfo          = info && senderName && senderCode && `${info.sender.company} (${senderCode})`;
  const receiverInfo        = receiverName && receiverCode && `${info.receiver.company} (${receiverCode})`;
  const isMemoEdit          = values.memo.isEdit;
  const curCase             = listingReducer.works.currentCode === info.caseCode;
  const strDueDate          = moment.unix(info.dueDate).format('YYYY-MM-DD');
  let currentType           = isSenderCase ? 'sender':isReceiverCase ? "receiver":"";
  const isUpdateTypeSuccess = values.modal.isUpdateType === 'success';
  // const timelineInfo     = timeline;

  

  const downloadStage = info.stage === 4;
  const {
    create: timelineCreate,
    working: timelineWorking,
    upload: timelineUpload,
    read: timelineRead,
    download: timelineDownload,
    completed: timelineCompleted,
  } = info.timeline;

  const timeLineList = [
    {
      id: 0,
      title: "Create",
      time: timelineCreate,
    },
    {
      id: 1,
      title: "Working",
      time: timelineWorking,

    },
    {
      id: 2,
      title: "Uploaded",
      time: timelineUpload,

    },
    {
      id: 3,
      title: "Read",
      time: timelineRead,

    },
    {
      id: 4,
      title: "Downloaded",
      time: timelineDownload,

    },
    {
      id: 5,
      title: "Completed",
      time: timelineCompleted,

    },
  ];

  const handleClick = config => {
    const { type, name, value } = config;
    const isSender = userCode === info.senderCode;
    // const isReciever = userCode === info.receiverCode;

    if (type === 'memo') {
      if (name === 'edit_ok') {
        const memoConfig = {
          userCode: userCode,
          caseCode: info.caseCode,
          memo: values.memo.content,
          completeFlag: false,
          type:isSender? 0 : 1
        }
        console.log(memoConfig,'memoConfig');
        INFO_WORKS_CASE_UPDATE_SAGAS(memoConfig);
        // onSubmit && onSubmit({type:"edit_ok",value:memoConfig});
      } else {
        setValues(draft => {
          draft.memo.isEdit = name === 'edit';
          draft.modal.isPlainModalShow = !draft.modal.isPlainModalShow;
          draft.modal.value = value;
        });
      }

    }
    if (config === 'dim') {
      setValues(draft => {
        draft.modal.isPlainModalShow = false;
        draft.isUpdateModal.isShow =false;
      });
    }
    if (config === 'dim_ok') {
      setValues(draft => {
        draft.modal.isPlainModalShow = false;
        draft.isUpdateModal.isShow =false;
        draft.render.index = draft.render.index+1
      });
    }

    if(type === 'setting'){
      const loadConf ={
        userCode : userCode,
        caseCode : info.caseCode,
        // type:"modify"
      };
      INFO_CASE_LOAD_SAGAS(loadConf);
    }

    if(type === 'complete'){
      console.log('complete');
      if(name === "complete"){
        console.log('컴플리트 성공');
        // NOTE: 백엔드 에이피아이 나오면 보내기, memo가 없어질거고 completeplg 랑 userCode,caseCode 만 있을거임.
        const completeConf = {
          userCode: userCode,
          caseCode: info.caseCode,
          isComplete: true,
        }
        INFO_CASE_COMPLETE_SAGAS(completeConf)
      }
      if(name === "complete_cancel"){
        console.log('컴플리트 취소하기');
        const completeConf = {
          userCode: userCode,
          caseCode: info.caseCode,
          isComplete: false,
        }
        console.log(completeConf,'completeConf');
        INFO_CASE_COMPLETE_SAGAS(completeConf)
      }
      
      // INFO_WORKS_CASE_UPDATE_SAGAS(completeConfi);
    }
  }
  const handleBlur = config => {
    const {type,value} = config;
    if(type){
      setValues(draft => {
        draft.memo.currentType = type;
        draft.memo.content = value.data;
      });
    }
  }


  const successLoadCurrent = infoReducer.case.load.success && curCase;
  useEffect(()=>{
    if(successLoadCurrent){
      props.history.push('/case');
    }

  },[successLoadCurrent]);

  
  const successAndCurrent = infoReducer.case.update.success && curCase;
  useEffect(()=>{
    if(successAndCurrent){
      const cType = values.memo.currentType;
      if(cType){
        setValues(draft=>{
          draft.memo[cType].content = values.memo.content;
        });
        INFO_WORKS_CASE_UPDATE_SAGAS.init();
      }
    }
  },[successAndCurrent]);
  


  useEffect(()=>{
    setValues(draft=>{
      draft.memo.sender.content = info.sender.memo;
      draft.memo.receiver.content = info.receiver.memo;
    });
  },[info.sender.memo,info.receiver.memo]);

  // NOTE: memo modify
  const isModifyMemoFailure = infoReducer.case.update.failure && curCase;
  const isModifyMemoSuccess = infoReducer.case.update.success && curCase;
  useEffect(()=>{
    if(isModifyMemoSuccess && curCase){
      setValues(draft => {
        // draft.modal.isPlainModalShow = false;
        draft.modal.isUpdateShow = true;
        draft.modal.isUpdateType = 'success'
        draft.isUpdateModal.isShow =true;
        draft.isUpdateModal.title = "완료되었습니다";
        draft.isUpdateModal.content = "메모 수정이 완료되었습니다."
      });
    }
    if(isModifyMemoFailure && curCase){
      setValues(draft => {
        // draft.modal.isPlainModalShow = false;
        draft.modal.isUpdateShow = true;
        draft.modal.isUpdateType = ' falilre';
        draft.isUpdateModal.isShow =true;
        draft.isUpdateModal.title = "실패하였습니다.";
        draft.isUpdateModal.content = "잠시 후 다시 시도해주세요."
      });
    }
  },[isModifyMemoFailure,isModifyMemoSuccess]);


  // NOTE: complete 
  const isCompleteUpdateSuccess = infoReducer.case.complete.success && curCase;
  const isCompleteUpdateFailure = infoReducer.case.complete.failure && curCase;
  useEffect(()=>{
    if(isCompleteUpdateSuccess){
      console.log('complete update success');
      const rIsComplete = infoReducer.case.complete.isComplete;
      setValues(draft=>{
        // draft.modal.isUpdateShow = true;
        draft.isUpdateModal.isShow = true;
        draft.isUpdateModal.title ="완료되었습니다.";
        draft.isUpdateModal.content ="업데이트가 완료되었습니다.";
        draft.data.stage = rIsComplete ? 5 : 4
      });

      
    }
    if(isCompleteUpdateFailure){
      console.log('complete update failure');
      setValues(draft=>{
        draft.isUpdateModal.isShow = true;
        draft.isUpdateModal.title ="실패하였습니다.";
        draft.isUpdateModal.content ="업데이트에 실패하였습니다.";
      })
      
    }
    
  },[isCompleteUpdateSuccess,isCompleteUpdateFailure]);



  useEffect(()=>{
    return ()=>{
      // console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
      // INFO_CASE_COMPLETE_SAGAS.init();
    }
  },[]);





  const customSenderInfo ={
    caseCode:values.data.caseCode,
    caseId:values.data.caseId,
    stage:values.data.stage,
    userCode,
    ...info.sender,memo:values.memo.sender.content
  };

  let customReceiverInfo ={
    caseCode: values.data.caseCode,
    caseId: values.data.caseId,
    stage: values.data.stage,
    userCode,
    modifyState : true,
    ...info.receiver,memo:values.memo.receiver.content
  };

  
  let curStage = values.data.stage;
  let isCompleteStage = values.data.stage === 5;
  let isDownloadStage = values.data.stage === 4;

  useEffect(()=>{
    setValues(draft=>{
      draft.data = info;
    })
  },[info])
  

  // console.log(values.data);
  // console.log(values.data.stage);
  // console.log(isCompleteStage);

  return (
    <>
    {curCase && infoReducer.case.update.pending && <FullScreenLoading dim={true}/>}
    {curCase && infoReducer.case.complete.pending && <FullScreenLoading dim={true}/>}

    
    {/* NOTE: 깜빡임의 원인은 모달을 2개써서그럼. 나중에 잡기 */}
      <PlainModal
        isOpen={values.modal.isPlainModalShow}
        content={
          <ModalMemoContent
            contentHeight={!isMemoEdit && 250}
            content={
              isMemoEdit
                ? <PlainEditor 
                    height={250} 
                    onBlur={(value)=>handleBlur({type:currentType,value})} 
                    content={values.modal.value} 
                  />
                : <HtmlConverter>{values.modal.value}</HtmlConverter>
            }
            isEdit={isMemoEdit}
            onClick={handleClick}
          />}
        onClick={handleClick}
        dim={isMemoEdit ? false : true}
        width={380}
      />

      <PlainModal
        isOpen={values.isUpdateModal.isShow}
        content={<>
          <ModalComplete
            title={values.isUpdateModal.title}
            onClick={()=>handleClick('dim_ok')}
            children={values.isUpdateModal.content}
          />
        </>}
        dim={false}
        width={380}
      />

      <Styled.CaseCardDetail>
        <Grid container className="WorksCardListPanel__info_box">

          <Grid container className="WorksCardListPanel__row">
            {/* <ShareIcon className="WorksCardListPanel__share_btn" /> */}
          </Grid>

          <Grid container className="WorksCardListPanel__row">
            <Grid item xs={3}>
              <div className="WorksCardListPanel__title">Case ID</div>
            </Grid>
            <Grid item xs={9}>
              <div className="WorksCardListPanel__con">{info.caseId}</div>
            </Grid>
          </Grid>

          <Grid container className="WorksCardListPanel__row">
            <Grid item xs={3}>
              <div className="WorksCardListPanel__title">Pateint Name</div>
            </Grid>
            <Grid item xs={9}>
              <div className="WorksCardListPanel__con">{info && info.patient}</div>
            </Grid>
          </Grid>

          <Grid container className="WorksCardListPanel__row">
            <Grid item xs={3}>
              <div className="WorksCardListPanel__title">Due Date</div>
            </Grid>
            <Grid item xs={9}>
              <div className="WorksCardListPanel__con">{strDueDate}</div>
            </Grid>
          </Grid>

          <Grid container className="WorksCardListPanel__row">
            <Grid item xs={3}>
              <div className="WorksCardListPanel__title">Sender</div>
            </Grid>
            <Grid item xs={9}>
              <div className="WorksCardListPanel__con">{checkValueDash(senderInfo)}</div>
            </Grid>
          </Grid>

          <Grid container className="WorksCardListPanel__row">
            <Grid item xs={3}>
              <div className="WorksCardListPanel__title">Receiver</div>
            </Grid>
            <Grid item xs={9}>
              <div className="WorksCardListPanel__con">{checkValueDash(receiverInfo)}</div>
            </Grid>
          </Grid>

          <Grid container className="WorksCardListPanel__row">
            <Grid container className="WorksCardListPanel__title">
              <span className="WorksCardListPanel__title_tx">Case TimeLine</span>
              <S_CustomCaseTimeLine iconStyle={`top:-4px`}/>
              </Grid>
            <Grid container className="WorksCardListPanel__con">
              <div className="WorksCardListPanel__progressbar">
                <ul className="WorksCardListPanel__progressbar_box">
                  {timeLineList.map(item => {
                    return (
                      <li 
                        key={item.id} 
                        className={cx("WorksCardListPanel__progressbar_step", 
                        { active:  item.id <= curStage,
                          upload:item.id === 2 })}
                      >
                        {item.title} 
                        <p className="date_tx">{convertDateTime({ value: item.time, format: "MM-DD, HH:mm", isNull: '-' })}</p>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </Grid>
          </Grid>

          {/* sender area */}
          <CaseCardArea
            caseType={isReceiverCase}
            info={customSenderInfo}
            handleClick={handleClick}
            type="sender"
            hasReceiver={info && info.receiver.company}
          />

          {/* receiver area */}
          <CaseCardArea
            caseType={isSenderCase}
            info={customReceiverInfo}
            handleClick={handleClick}
            type="receiver"
            hasReceiver={info && info.receiver.company}
          />

          <Grid container className={cx(
            "WorksCardListPanel__row", "area_row", 
            {hasNotReceiver:(!info && info.receiver.company || !downloadStage) && (!isCompleteStage && !isDownloadStage)},
            { isNotShow: isSenderCase }
          )}>
            
            <Grid item xs={3}>
              <div className="WorksCardListPanel__title">Complete</div>
            </Grid>
            <Grid item xs={9}>
              <Grid container className={cx("WorksCardListPanel__con", "contents")}>
                <button 
                  className={cx("WorksCardListPanel__complete")}
                  onClick={()=>handleClick({type:"complete",name:isCompleteStage?"complete_cancel":"complete"})}
              >{isCompleteStage?"Cancel":"Complete"}</button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Styled.CaseCardDetail>
    </>
  );
}




const Styled = {
  CaseCardDetail: styled.div`
    .isShow{
      display:block
    }
    .isNotShow{
      display:none;
    }
    .hasNotReceiver{
      position: relative;
      pointer-events: none;
      &:after{
        display:block;
        position:absolute;
        content:'';
        left:0;
        top:0;
        width:100%;
        height:100%;
        background:white;
        opacity:.5;
        z-index:1;
      }
    }

  .WorksCardListPanel__info_box{
    border: 1px solid ${color.grat_border6};
    border-radius: 10px;
    padding: 30px;
    padding-top: 40px;
    position: relative;
    margin-bottom:20px;
  }
  .WorksCardListPanel__share_btn {
    color: ${color.black_font};
    position: absolute;
    top:40px;
    right: 30px;
  }
  .MuiExpansionPanelDetails-root{
    padding: 0;
    margin-top: -30px;
  }

  .WorksCardListPanel__row{
    padding-bottom: 15px;

    &.ribbon{
      padding-bottom: 20px;
    }

    &.area_row{
      padding-bottom: 20px;
    }
  }
  
  .WorksCardListPanel__title{
    ${font(16, color.black_font)};
    font-weight: 600;
  }
  .WorksCardListPanel__title_tx{
    margin-right:5px;
  }

  .WorksCardListPanel__con{
    ${font(16, color.gray_font)};
  }

  .MuiStepper-root {
    padding: 20px;
  }
  .MuiStepButton-root{
    width: 150%;
    margin: -24px -30px;
    padding: 24px 0;

  }
  .MuiStepConnector-alternativeLabel {
    top: 12px;
    left: calc(-50% + 4px);
    right: calc(50% + 19px);
    position: absolute;
  }
  .MuiStepLabel-labelContainer{
    ${font(14, color.gray_font)};
  }
  .MuiStepLabel-label{
    ${font(14, color.disable_btn)};
  }
  .MuiStepLabel-label.MuiStepLabel-active{
    ${font(14, color.blue)};
  }
  .MuiStepIcon-root{
    color: ${color.disable_btn};
  }
  .MuiStepIcon-root.MuiStepIcon-active {
    color: ${color.blue};
  }

  .WorksCardListPanel__progressbar {
    margin-top: 60px;
    width:100%;
  }
  .WorksCardListPanel__progressbar_box {
    width: 100%;
    margin: 0;
    padding: 0;
    ${font(14, color.disable_btn)};
  }
 
 .WorksCardListPanel__progressbar_step{
   position: relative;
   display: inline-block;
   text-align: center;
   width:calc(100% / 6);
   @media (max-width:1000px){
    width:calc(100% / 3);
    &.upload{
      margin-bottom:40px;
    }
    &.upload:after{
      display:none;
    }
   }
    &:before {
       /* position: relative; */
       position:absolute;
       content: attr(data-step);
       display: block;
       background: ${color.disable_btn};
       width: 22px;
       height: 22px;
       text-align: center;
       /* margin: 0 42px; */
       /* margin-bottom: 10px; */
       line-height: 20px;
       border-radius: 100%;
       z-index: 1000;
       left:50%;
       top:-30px;
       transform:translateX(-50%);
     }
 
     &:after {
       content: '';
       position: absolute;
       display: block;
       background: ${color.disable_btn};
       width: 100%;
       height: 1px;
       top: -20px;
       left: 50px;
     }
     &:last-child:after {
       display: none;
     }
     &.active {
       color: ${color.blue};
       
       &:before {
         background: ${color.blue};
       }
     }
  }
    .date_tx{
     ${font(13, color.gray_font)};
   }

   .WorksCardListPanel__complete{
     padding: 5px 15px;
     border: none;
     background: ${color.complete_btn};
     ${font(14, color.white)};
     border-radius: 2px;
     cursor:pointer;
     transition: all .2s;
   
     &:hover {
      background: ${color.complete_btn_hover};
      color: ${color.white};
    }
   }
   
  `
}
export default withRouter(CaseCardDetail);


  // const [checked, setChecked] = React.useState(true);
  // const [activeStep, setActiveStep] = React.useState(0);
  // const [completed, setCompleted] = React.useState(new Set());
  // const [skipped, setSkipped] = React.useState(new Set());
  // const steps = getSteps();

  // const totalSteps = () => {
  //   return getSteps().length;
  // };

  // const skippedSteps = () => {
  //   return skipped.size;
  // };

  // const completedSteps = () => {
  //   return completed.size;
  // };

  // const allStepsCompleted = () => {
  //   return completedSteps() === totalSteps() - skippedSteps();
  // };

  // const isLastStep = () => {
  //   return activeStep === totalSteps() - 1;
  // };

  // const handleNext = () => {
  //   const newActiveStep =
  //     isLastStep() && !allStepsCompleted()
  //       ? // It's the last step, but not all steps have been completed
  //         // find the first step that has been completed
  //         steps.findIndex((step, i) => !completed.has(i))
  //       : activeStep + 1;

  //   setActiveStep(newActiveStep);
  // };


  // const handleComplete = () => {
  //   const newCompleted = new Set(completed);
  //   newCompleted.add(activeStep);
  //   setCompleted(newCompleted);

  //   /**
  //    * Sigh... it would be much nicer to replace the following if conditional with
  //    * `if (!this.allStepsComplete())` however state is not set when we do this,
  //    * thus we have to resort to not being very DRY.
  //    */
  //   if (completed.size !== totalSteps() - skippedSteps()) {
  //     handleNext();
  //   }
  // };


