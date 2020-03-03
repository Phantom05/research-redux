import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import cx from 'classnames';
import styled from 'styled-components';
import { font, color, positionCenterCenter, dotdotdot,positionWide } from 'styles/__utils';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import { useImmer } from 'use-immer';
import _ from 'lodash';
import { PlainModal, ModalComplete ,ModalConfirmContent} from 'components/common/modal';
import uuid from 'react-uuid'
import { FullScreenLoading } from 'components/base/loading';

import {
  INFO_WORKS_DIRECT_FILE_UPLOAD_SAGAS,
  INFO_WORKS_DIRECT_FILE_DOWNLOAD_SAGAS,
  INFO_WORKS_CHECK_DOWNLOAD_SAGAS,
  INFO_WORKS_DIRECT_FILE_DELETE_SAGAS,
} from 'store/actions';

import {
  fixedNumbering,
  setFormData,
  extractFileName,
  getExtensionOfFilename
} from 'lib/library';


// directList가 있으면 알아서 가장 위로 올라감.
function DirectUpload(props) {
  const {
    listing: listingReducer,
    auth: authReducer,
    info: infoReducer,
  } = useSelector(state => state);

  const {
    driectList = [],
    info,
    caseType,
    hasReceiver,
    type
  } = props;

  const [values, setValues] = useImmer({
    refresh: false,
    modal: {
      isShow: false,
      title: '',
      subtitle: "",
      dim: false,
      type: "dim"
    },
    info: {
      upload: {
        isShow: false
      }
    },
    localindex:0,
    fileIdxList:[],
  });

  const [files, setFiles] = useState([]);
  const [localFiles, setLocalFiles] = useState([]);
  const directBoxRef = useRef();
  const userCode = authReducer.signIn.profile.userCode;
  let idInput = (info.caseCode || "") + (info.code || "");
  const rUpload = infoReducer.works.upload;
  const rDownload = infoReducer.works.download;
  const rDelete = infoReducer.works.delete;
  const loginEmail = authReducer.signIn.profile.email;
  const currentCode = info.caseCode === listingReducer.works.currentCode;
  const isMine = info.code === info.userCode;

  const appLoading = [
    rUpload.direct.pending,
    rDownload.direct.pending,
    rDelete.direct.pending
  ];
  const limitFileLength = 100;

  

  const handleSubmit = config => {
    const { type, value, name } = config;
    const { caseCode, caseId, userCode } = info;
    if(type === 'delete_item'){
      if(name === 'local'){
        const findLocalFileListItem =_.find(localFiles,item=>item.id === config.id);
        const targetId = findLocalFileListItem && findLocalFileListItem.id
        const newLocalFileList =_.filter(localFiles,item=>item.id !== targetId)
        setLocalFiles(newLocalFileList)
        
      }
      if(name === 'server'){
        if(value ==='confirm'){
          setValues(draft => {
            draft.modal.type = 'delete';
            draft.modal.isShow = true;
            draft.modal.title = "삭제하시겠습니까?!";
            draft.modal.subtitle = `파일명 : ${config.info.originName}`;
            draft.fileIdxList = [config.id];
          });
        }
        if(value === 'delete_ok'){
          const deleteConf = {
            caseCode,
            userCode,
            fileIdxList:[config.id]
          }
          INFO_WORKS_DIRECT_FILE_DELETE_SAGAS(deleteConf);
        }
      }
    }

    if (name === 'directDownload') {
      const downloadData = {
        caseCode, caseId, userCode, type
      }
      INFO_WORKS_DIRECT_FILE_DOWNLOAD_SAGAS(downloadData);
    }

    if (name === 'directUpload') {
      // NOTE: files 올라온것중 로컬에 있는개수만 세기
      if (localFiles.length === 0) {
        setValues(draft => {
          draft.modal.isShow = true;
          draft.modal.title = "업로드 실패.";
          draft.modal.subtitle = "업로드 가능한 파일이 없습니다.";
          draft.modal.type ='dim';
        });
        return;
      }
      
      const directData = {
        caseCode,
        caseId,
        userCode,
        email:loginEmail,
        files: {
          uploadFile: localFiles
        }
      }
      const formData = setFormData(directData);
      INFO_WORKS_DIRECT_FILE_UPLOAD_SAGAS(formData);
    }
  }

  const handleChange = config => {
    const { type, value } = config;
    if (type === 'directUploadFile') {

      let tmpArr = [...localFiles];
      _.forOwn(value.target.files, val => {
        val.id = uuid();
        tmpArr.push(val);
      });


      if (tmpArr.length > limitFileLength) {
        setValues(draft => {
          draft.info.upload.isShow = true;
        });
      } else {
        setValues(draft => {
          draft.info.upload.isShow = false;
          draft.localindex = values.localindex+1
        });
        setLocalFiles(tmpArr);
        // setFiles(tmpArr);
      }

      value.target.value =''
    }
  }
  const isTrue = item => item === true;
  const areaClick = config => {
    const { type } = config;
    if (type === 'dim') {
      setValues(draft => {
        draft.modal.isShow = false;
      });
    }
    if (type === 'upload') {
      setValues(draft => {
        draft.modal.type = 'dim';
        draft.modal.isShow = false;
      });
    }
    if (type === 'delete') {

      handleSubmit({
        type:"delete_item",
        name:"server",
        value:"delete_ok",
        id:values.fileIdxList
      });

      // setValues(draft => {
      //   draft.fileIdxList= [];
      //   draft.caseCode= '';
      // });
      // const deleteConf = {
      //   caseCode:values.caseCode,
      //   userCode,
      //   fileIdxList:values.fileIdxList
      // }
      //   console.log(deleteConf);
      // INFO_WORKS_DIRECT_FILE_DELETE_SAGAS(deleteConf);

    }
  }


  // NOTE: Direct Upload and set file state
  const cDirectUploadSuccess = rUpload.direct.success && currentCode && isMine;
  const cDirectUploadFailure = rUpload.direct.failure && currentCode && isMine;
  useEffect(() => {
    if (cDirectUploadSuccess) {
      console.log('cDirectUploadSuccess');
      setValues(draft => {
        draft.modal.isShow = true;
        draft.modal.title = "업로드 완료!";
        draft.modal.subtitle = "Direct 파일 업로드가 완료되었습니다.";
        draft.modal.type= 'dim';
      });
      setLocalFiles([]);
      setFiles([...infoReducer.works.upload.direct.uploadFileList])
    }

    if (cDirectUploadFailure) {
      console.log('cDirectUploadFailure');
      setValues(draft => {
        draft.modal.isShow = true;
        draft.modal.title = "업로드 실패.";
        draft.modal.subtitle = "잠시후 다시 시도해주세요.";
        draft.modal.type= 'dim';
      });
    }
  }, [cDirectUploadSuccess,cDirectUploadFailure]);


  // NOTE: Direct Delete and set file state
  const cDirectDeleteSuccess = rDelete.direct.success && currentCode && isMine;
  const cDirectDeleteFailure = rDelete.direct.failure && currentCode && isMine;
  useEffect(() => {
    if (cDirectDeleteSuccess) {
      console.log('cDirectDeleteSuccess');
      setValues(draft => {
        draft.modal.isShow = false;
        draft.modal.fileListIdx = [];
      });
      setLocalFiles([]);
      setFiles([...infoReducer.works.upload.direct.uploadFileList])
    }

    if (cDirectDeleteFailure) {
      setValues(draft => {
        draft.modal.isShow = true;
        draft.modal.title = "삭제 실패.";
        draft.modal.subtitle = "잠시후 다시 시도해주세요.";
        draft.modal.type= 'dim';
      });
    }
  }, [cDirectDeleteSuccess,cDirectDeleteFailure]);

  
  // NOTE: Direct Download
  const cDirectDownloadSuccess = rDownload.direct.success && currentCode && isMine;
  useEffect(() => {
    if (cDirectDownloadSuccess) {
      console.log('cDirectDownloadSuccess');
      setValues(draft => {
        draft.modal.isShow = true;
        draft.modal.title = "다운로드 완료!";
        draft.modal.subtitle = "Direct 파일 다운로드가 완료되었습니다.";
        draft.modal.type ='dim';
      });
    }
  }, [cDirectDownloadSuccess]);

  // NOTE: scroll 아래로 내리기
  useEffect(() => {
    if (directBoxRef.current) {
      directBoxRef.current.scrollTop = directBoxRef.current.scrollHeight;
    }
  }, [files,localFiles]);

  // NOTE: init file list set
  useEffect(() => {
    if(driectList.length){
      setFiles([...driectList])
    }
  }, [driectList]);

  const localAndServerFile = [...files,...localFiles];
  const isCompleteStage = info.stage === 5;
  
  return (
    <>
      {currentCode && appLoading.some(isTrue) &&
        <FullScreenLoading
          dim={true}
        />
      }
    <Styled.DirectUpload>
      <PlainModal
        isOpen={values.modal.isShow}
        content={ 
          values.modal.type === 'delete'
          ?
          <ModalConfirmContent
            title={values.modal.title}
            subtitle={values.modal.subtitle}
            okClick={() => areaClick({ type: values.modal.type })}
            cancelClick={() => areaClick({ type: 'dim' })}
          />
          :
          <ModalComplete
            title={values.modal.title}
            children={values.modal.subtitle}
            onClick={() => areaClick({ type: values.modal.type })}
          />
        }
        dim={values.modal.dim}
        onClick={() => areaClick({ type: values.modal.type })}
        width={380}
      />

      <Grid container className={cx("DirectUpload__direct_upload", "table_title")}>
        <Grid item xs={1}>No.</Grid>
        <Grid item xs={5}>File Name</Grid>
        <Grid item xs={2}>File Type</Grid>
        <Grid item xs={2}>State</Grid>
        <Grid item xs={2}>Delete</Grid>
      </Grid>

      <Grid container className={cx("DirectUpload__direct_upload_list_box")} ref={directBoxRef}>
        <DirectUploadItemList
          handleSubmit={handleSubmit}
          list={localAndServerFile}
          userCode={userCode}
          isMine={isMine}
          stage={info.stage}
        />
      </Grid>

      <Grid container>
        <div className="CaseCardArea__table_btn_box">
          <label
            htmlFor={idInput}
            className={cx(
              "CaseCardArea__table_btn", "browse", 
              { isNotShow: caseType || isCompleteStage, 
                // hasNotReceiver: !hasReceiver 
              }
            )}>
            Browser
          </label>

          <span
            className={cx("CaseCardArea__limit__file_info", { isFileInfoShow: values.info.upload.isShow })}
          >파일은 {limitFileLength}개까지만 업로드 가능합니다.</span>

          <input
            hidden
            type="file"
            id={idInput}
            onChange={(value) => handleChange({ type: "directUploadFile", value })}
            multiple
            accept=".gif,.png,.jpeg,.jpg"
          />
          <button
            className={cx("CaseCardArea__table_btn", "upload", { isNotShow: caseType || isCompleteStage, 
              // hasNotReceiver: !hasReceiver 
            })}
            onClick={() => handleSubmit({
              // type: type, 
              value: "upload", name: "directUpload"
            })}
          >Upload</button>

        </div>
      </Grid>
      </Styled.DirectUpload>
      
    </>

  );
}

function DirectUploadItemList(props) {
  const { list = [], driectList =[], userCode,handleSubmit= ()=>{} ,stage,isMine} = props;
  const listArray = [...driectList, ...list];
  if (listArray.length === 0) return <div className="DirectUpload__direct_upload">No Data.</div>
  return (
    <>
      {listArray.map((item, idx) => {
        return <DirectUploadItem
          stage={stage}
          idx={idx}
          key={idx}
          userCode={userCode}
          isMine={isMine}
          info={item}
          handleSubmit={handleSubmit} 
      />
      })}
    </>
  )
}

function DirectUploadItem(props) {
  // DEBUG: checkbox 처리하기.
  const { info, idx, handleSubmit = () => { }, userCode,stage ,isMine} = props;
  if (info.name) {
    info.originName = info.name;
  }
  if (info.type) {
    info.fileType = info.type;
  }
  if(!info.extention){
    info.extention = getExtensionOfFilename(info.name)
  }
  const inputId = ` ${info.name}-${idx}`;
  const isLocalFile = info.lastModified;

  const downloadConf = {
    caseCode: info.caseCode, userCode
  }
  const isCompleteStage = stage === 5;
  
  return (
    <>
    
      <label htmlFor={inputId}>
        <Grid item container className={cx("DirectUpload__direct_upload", "table_contents")} htmlFor="checked A">
          <Grid
            item xs={1}
            className="DirectUpload__direct_upload_td">
            {fixedNumbering(idx + 1, 2)}
          </Grid>
          <Grid
            item xs={5}
            className="DirectUpload__direct_upload_td DirectUpload__direct_upload_name">
            {extractFileName(info.originName)}
          </Grid>
          <Grid
            item xs={2}
            className="DirectUpload__direct_upload_td">
            {info.extention}
          </Grid>
          <Grid
            item xs={2}
            className="DirectUpload__direct_upload_td">
              {isLocalFile?'Local':"Upload"}
            
          </Grid>
          <Grid
            item xs={2}
            className="DirectUpload__direct_upload_td">
            <DeleteIcon
              className={cx("DirectUpload__direct_upload_td_icon", {isNotShow:isCompleteStage || !isMine})}
              onClick={() => handleSubmit({ 
                type: "delete_item", 
                info:info,
                name: isLocalFile?'local' : 'server', 
                value:'confirm',
                id:isLocalFile ? info.id : info.fileIdx || 'no fileIdx'})}
            />
            {!isLocalFile &&
              <a
                href={info.cloudDir}
                download
                onClick={() => INFO_WORKS_CHECK_DOWNLOAD_SAGAS(downloadConf)}
              >
                <CloudDownloadIcon className="DirectUpload__direct_upload_td_icon" />
              </a>
            }
          </Grid>
        </Grid>
      </label>
    </>
  )
}

const Styled = {
  DirectUpload: styled.div`
    position:relative;
    width:100%;
    .DirectUpload__loading{
      ${positionWide};
      /* color:white; */
      /* background:rgba(0,0,0,.8); */
      z-index:50;
    }
    .DirectUpload__loadder{
      ${positionCenterCenter};
    }
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
  .DirectUpload__direct_upload_td_icon{
    position:relative;
    top:3px;
    cursor: pointer;
    margin-right:5px;
    &:last-child{
      margin-right:0;
    }
  }
  .DirectUpload__direct_upload_name{
    ${dotdotdot};
  }
  .DirectUpload__direct_upload_td{
    text-align:center;
  }
  .DirectUpload__direct_upload_list_box{
     display:block;
     max-height:190px;
     overflow-y:scroll ;
   }
   .DirectUpload__direct_upload{
    ${font(14, color.black_font2)};
    line-height: 30px;
    /* height: 30px; */
    text-align: center;
    border-top: 1px solid ${color.grat_border6};

    &:last-child{
      border-bottom: 1px solid ${color.grat_border6};
    }
    &.table_title {
      background: ${color.blue_week_hover};
      padding-right:15px;
    }
    &.table_contents{
      transition:.2s;
      /* cursor: pointer; */
      &:hover{
        background:#ececec;
      }
    }
  }
  `
}
export default DirectUpload;


// const formData = new FormData();
// formData.append('caseCode',caseCode);
// formData.append('caseId',caseId);
// formData.append('userCode',userCode);
// files.forEach(item=>formData.append('uploadFile', item));




{/* <a 
  hidden
  href={info.cloudDirectory}
  onClick={()=>{
    if(!info.cloudDirectory) notDownloadClick();
  }}
  download
  className={cx("CaseCardArea__table_btn", "download", { hasNotReceiver: !hasReceiver })}
>Download</a> */}


    // NOTE: handlesubmit => directUpload => 안에
  // if (type === 'sender1') {

  //   if (name === 'directDownload') {
  //     console.log('directDownload');
  //     const downloadData = {
  //       caseCode, caseId, userCode, type
  //     }
  //     INFO_WORKS_DIRECT_FILE_DOWNLOAD_SAGAS(downloadData);
  //   }
  //   if (name === 'directUpload') {
  //     console.log('directUpload');
  //     if (files.length === 0) {
  //       setValues(draft => {
  //         draft.modal.isShow = true;
  //         draft.modal.title = "업로드 실패.";
  //         draft.modal.subtitle = "업로드 가능한 파일이 없습니다.";
  //       });
  //       return;
  //     }
  //     const directData = {
  //       caseCode,
  //       caseId,
  //       userCode,
  //       files: {
  //         uploadFile: files
  //       }
  //     }
  //     const formData = setFormData(directData);
  //     INFO_WORKS_DIRECT_FILE_UPLOAD_SAGAS(formData);
  //   }

  // }

  // if (type === 'receiver1') {
  //   if (name === 'directDownload') {
  //     console.log('directDownload');
  //     const downloadData = {
  //       caseCode, caseId, userCode, type
  //     }
  //     INFO_WORKS_DIRECT_FILE_DOWNLOAD_SAGAS(downloadData);
  //   }
  //   if (name === 'directUpload') {
  //     console.log('directUpload');
  //     const directData = {
  //       caseCode,
  //       caseId,
  //       userCode,
  //       files: {
  //         uploadFile: files
  //       }
  //     }
  //     const formData = setFormData(directData);
  //     INFO_WORKS_DIRECT_FILE_UPLOAD_SAGAS(formData);
  //   }
  // }