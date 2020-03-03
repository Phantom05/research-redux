import React,{useEffect,createRef}  from 'react';
import styled from 'styled-components';
import { font, color } from 'styles/__utils';
import { WorksCard } from 'components/common/card';
import Grid from '@material-ui/core/Grid';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import { CaseCardDetail } from 'components/common/info';
import { NoDataSearch } from 'components/common/search';
import { LoadingCircle } from 'components/base/loading';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import 'react-virtualized/styles.css';
import {Actions} from 'store/actionCreators';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import cx from 'classnames';
import { 
  LISTING_WORKS_SEARCH_SAGAS,
  INFO_WORKS_CHECK_READ_SAGAS,
  INFO_CASE_COMPLETE_SAGAS,
} from 'store/actions';

import _ from 'lodash';
import { useImmer } from 'use-immer';
// import ReactDOM from 'react-dom';



const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));


const initialState = {
  data:{
    sender:{},
    receiver:{},
    timeline:{
      create:0,
      working:0,
      upload:0,
      read:0,
      download:0,
      completed:0,
    }
  },
  isLoading:false
};
function CardAndDetail(props){
  const [values,setValues] = useImmer(initialState)
  const {info,isExpanded,onSubmit,onClick,isSelected} = props;
  const { 
    listing: listingReducer,
    info:infoReducer ,
    common:commonReducer,
    auth:authReducer
  } = useSelector(state => state);
  

  const handleSubmit = config =>{
    onSubmit && onSubmit(config)
  }
  const handleClick = config=>{
    onClick && onClick(config);
  }

  const userCode = authReducer.signIn.profile.userCode;
  const curCase = listingReducer.works.currentCode === info.caseCode;
  const isCompleteUpdateSuccess = infoReducer.case.complete.success && curCase;
  const isSender = info.sender.code === userCode;
  const isReceiver = info.receiver.code === userCode;
  const curStage = values.data.stage;
  const rIsComplete = infoReducer.case.complete.isComplete;

  // NOTE: DEBUG: 상태 변화 실시간으로 해야함!
  useEffect(() => {
    if(curCase && isCompleteUpdateSuccess){
      setValues(draft=>{
        draft.data.stage = rIsComplete ? 5 : 4;
      })
    }
  }, [curCase,isCompleteUpdateSuccess]);

  // NOTE: working update
  const isWorkingUpdateSuccess = commonReducer.executorNav.success;
  const isWorkingUpdateFailure = commonReducer.executorNav.failure;
  useEffect(() => {
    if(curCase && isWorkingUpdateSuccess){
      setValues(draft=>{
        draft.data.stage = 1;
      })
    }
  }, [curCase,isWorkingUpdateSuccess,isWorkingUpdateFailure]);

  // NOTE: App Dataupload update
  const isUploadUpdateSuccess = infoReducer.works.upload.appData.success;
  const isUploadUpdateFailure = infoReducer.works.upload.appData.failure;
  useEffect(() => {
    if((curStage === 1 || curStage === 0) && curCase && isUploadUpdateSuccess){
      setValues(draft=>{
        draft.data.stage = 2;
      })
    }
  }, [curCase,isUploadUpdateSuccess,isUploadUpdateFailure]);


   // NOTE: Direct Upload and set file state
   const cDirectUploadSuccess = infoReducer.works.upload.direct.success;
   const cDirectUploadFailure = infoReducer.works.upload.direct.failure;
   useEffect(() => {
    if((curStage === 1 || curStage === 0) && curCase && cDirectUploadSuccess){
      setValues(draft=>{
        draft.data.stage = 2;
      })
    }
  }, [curCase,cDirectUploadSuccess,cDirectUploadFailure]);


    // NOTE: read update
    const isReadUpdateSuccess = infoReducer.works.read.success;
    useEffect(() => {
      if(curCase && isReadUpdateSuccess){
        console.log('read update');
        setValues(draft=>{
          if(curStage === 2 && isReceiver){
            draft.data.stage = 3;
          }
        })
      }
    }, [curCase,isReadUpdateSuccess]);

    // NOTE: download update
    const isDownloadUpdateSuccess = infoReducer.works.download.success;
    useEffect(() => {
      if(curCase && isDownloadUpdateSuccess){
        setValues(draft=>{
          if(curStage === 3 && isReceiver){
            draft.data.stage = 4;
          }
        })
      }
    }, [curCase,isDownloadUpdateSuccess]);
    
  useEffect(()=>{
    setValues(draft=>{
      draft.data = info;
      draft.isLoading = true;
    })
  },[info]);


  const lableConf = listingReducer.processType[values.data.stage];

  if(!values.isLoading) return null;
  
  return (
    <>
      <ExpansionPanel  expanded={isExpanded} >
      <ExpansionPanelSummary
        aria-controls={`panel${info.caseCode}bh-content`}
        id={`panel${info.caseCode}bh-header`}
      >
        <WorksCard 
          onClick={(val)=>handleClick({...val,isPanelExpand:!isSelected})}
          labelText={lableConf && lableConf.title} 
          labelColor={lableConf && lableConf.color} 
          info={values.data}
          checked={isSelected}
        /> 
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
      <Grid container >
        <Grid item xs={1}></Grid>
          <Grid item xs={11}>
            <CaseCardDetail 
              isExpanded ={isExpanded} 
              info={values.data}
              onSubmit={handleSubmit}
            />
          </Grid>
        </Grid>
      </ExpansionPanelDetails>
    </ExpansionPanel> 
    </>
  )
}

function ExpansionPanelList(props) {
  const { list = [],onClick,currentCode,onSubmit  } = props;
  const [elRefs, setElRefs] = React.useState([]);
  const { 
    info:infoReducer 
  } = useSelector(state => state);
  
  useEffect(() => {
    setElRefs(elRefs => (
      Array(list.length).fill().map((_, i) => elRefs[i] || createRef())
    ));
  }, [list.length]);



  return (
    <>
      {list.map((item, idx) => {
        const isSelected = currentCode === item.caseCode;
        const isExpanded =  isSelected && !infoReducer.works.detail.pending;
        return (
          <CardAndDetail 
            isExpanded={isExpanded}
            key={idx} 
            info={item}
            onSubmit={onSubmit}
            onClick={onClick}
            isSelected={isSelected}
          />
        )
      })}
    </>
  )
}

function WorksCardList(props) {
  const {
    auth:authReducer,
    listing:listingReducer,
    // info:infoReducer
  } = useSelector(state=>state);
  
  const { worksList = [],  info , onSubmit,
    // onClick,
  } = props;
  const isPending = info.detail && info.detail.pending;
  const classes = useStyles();
  // let list = worksList;
  const rSearch = listingReducer.works.search;
  const searchPage = listingReducer.works.pagingData;
  const userCode = authReducer.signIn.profile.userCode;
  // const curCode = listingReducer.works.currentCode;
  // const curSenderCode = listingReducer.works.currentSenderCode;
  
  const handleClick = config => { 
    const isMine = config.senderCode === userCode;
    INFO_CASE_COMPLETE_SAGAS.init();

    if(isMine && config.isPanelExpand){
      LISTING_WORKS_SEARCH_SAGAS.init({type:"typeChange",value:'sender',stage:config.stage})
    }else{
      LISTING_WORKS_SEARCH_SAGAS.init({type:"typeChange",value:'',stage:""})
    }
    if(config.receiverCode === userCode){
      INFO_WORKS_CHECK_READ_SAGAS({caseCode :config.caseCode,userCode});
    }
    
    Actions.listing_select_panel({
      currentCode:config.caseCode,
      currentSenderCode:config.senderCode
    });

  }
  const handlePage = config=>{
    const {type,value} = config;
    
    const searchConfig ={
      userCode : userCode,
      page:searchPage.page + value,
      sort: rSearch.sort, 
      search :rSearch.search,
      type :rSearch.type,
      first:false
    }

    if(type === 'next' && searchPage.nextCheck){
      LISTING_WORKS_SEARCH_SAGAS(searchConfig);
    }else if (type === 'prev' && searchPage.prevCheck){
      LISTING_WORKS_SEARCH_SAGAS(searchConfig);
    }
    
  }

  const handleSubmit =config=>{
    onSubmit && onSubmit(config);
  }
  

  const isEndPrevPage = !searchPage.prevCheck;
  const isEndNextPage = !searchPage.nextCheck;

  useEffect(()=>{
    return ()=>{
      LISTING_WORKS_SEARCH_SAGAS.init({type:"typeChange",value:''})
    }
  },[]);


  return (
    <Styled.WorksCardList {...props}>
      
      {worksList && worksList.length === 0
      ? <div style={{marginTop:'30px'}}><NoDataSearch text={'검색 결과가 없습니다.'} /></div>
      : <div className={classes.root}>
        {worksList.map((item, idx) => {
          const dueDate = item.duedate;
          return (
            <Grid container key={idx}>
              <Grid item xs={12} className="WorksCardList__date">
                {dueDate} {isPending && <LoadingCircle className="WorksCardList__loading" size={15} />}
              </Grid>
              <Grid item xs={12}>
                <ExpansionPanelList  
                  list={item.list}  
                  onClick={handleClick} 
                  currentCode={listingReducer.works.currentCode}
                  onSubmit={handleSubmit}
                />
              </Grid>
            </Grid>
          )
        })}
      </div>
      }

        <div style={{textAlign:'right'}}>
          <ArrowBackIosIcon 
            disabled={isEndPrevPage}
            className={cx("Arrow__btn prev",{disabled:isEndPrevPage})}
            onClick={()=>handlePage({type:"prev",value:-1})}
          />
          <ArrowForwardIosIcon 
            disabled={isEndNextPage}
            className={cx("Arrow__btn next",{disabled:isEndNextPage})}
            onClick={()=>handlePage({type:"next",value:1})}
          />
        </div>

    </Styled.WorksCardList>
  );
}



const Styled = {
  WorksCardList: styled.div`
  .Arrow__btn{
    position:relative;
    display:inline-block;
    top:15px;
    cursor: pointer;
    padding:5px;
    font-size:30px;
    color:${color.black};
    transition:.3s;
    &:hover{
      color:${color.blue};
    }
    &.disabled{
      color:gray;
      opacity:.5;
      &:hover{
        color:gray;
      }
    }
    
  }
  .MuiExpansionPanelSummary-content.Mui-expanded{
    margin:12px 0;; 
  }
  .MuiExpansionPanelDetails-root{
    display:block;
  }
  .MuiExpansionPanelSummary-root,.MuiExpansionPanelDetails-root{
    padding:0;
  }

  .MuiExpansionPanel-root:before,.MuiExpansionPanel-root:after{
    opacity:0;
  }

  .MuiPaper-elevation1{
    box-shadow:none;
  }

  .WorksCardList__date {
    padding: 10px 15px;
    ${font(16, color.black_font)};
    background: ${color.blue_line_bg};
    margin-bottom: 20px;    
  }
  .WorksCardList__loading{
    float:right;
    color:${color.blue_hover} ;
  }
  `
}


export default WorksCardList;






// onChange={handleChange(`panel-${in_item.caseCode}`)}
  // worksList.map(item=>{

  //   console.log(item);

  //   const el = item.map((val,i)=>{
  //     const ranNum = Math.floor(Math.random() * labelColor.length);
  //     return (
  //       <div key={i}>
  //       <ExpansionPanel key={i} expanded={expanded === `panel${i}`}
  //         onChange={handleChange(`panel${i}`)}
  //       >
  //         <ExpansionPanelSummary
  //           // expandIcon={<ExpandMoreIcon />}
  //           aria-controls={`panel${i}bh-content`}
  //           id={`panel${i}bh-header`}
  //         >
  //           <WorksCard labelColor={labelColor[ranNum]} />
  //         </ExpansionPanelSummary>
  //         <ExpansionPanelDetails>
  //           <Grid container>
  //             <Grid item xs={1}></Grid>
  //             <Grid item xs={11}>
  //               {/* <Typography> */}
  //                 <CaseCardDetail />
  //                 {/* 리스트 열었을 때 내용 */}

  //               {/* </Typography> */}
  //             </Grid>
  //           </Grid>
  //         </ExpansionPanelDetails>
  //       </ExpansionPanel>
  //     </div>
  //     )
  //   })

  //   resultArr.push(el);
  // })



  // {_.map(worksList, (item, key, idx) => {
  //   const sectionDate = item.dueDate;
  //   return (
  //     <Grid container className="WorksCardList__row" key={key}>
  //       <Grid item xs={12} className="WorksCardList__date">
  //         {sectionDate} {isPending && <LoadingCircle className="WorksCardList__loading"  size={15}/>}
  //       </Grid>
  //       <Grid item xs={12} className="">
  
  //         {_.map(item.list, (in_item, in_idx) => {
  //           const lableConf = listingReducer.processType[in_item.stage];
  //           console.log(lableConf,'lableConf');
  //           const isSelected = info.data.caseCode === in_item.caseCode;
  //           return (
  //             <ExpansionPanel key={in_idx} expanded={isSelected && !isPending}  >
  //               <ExpansionPanelSummary
  //                 aria-controls={`panel-${in_item.caseCode}`}
  //                 id={`panel-${in_item.caseCode}`}
  //               >
  //                 <WorksCard 
  //                   onClick={handleClick}
  //                   labelText={lableConf.title} 
  //                   labelColor={lableConf.color} 
  //                   info={in_item}
  //                   checked={isSelected}
  //                 /> 
  //               </ExpansionPanelSummary>
  
  //               <ExpansionPanelDetails>
  //                 <Grid container>
  //                   <Grid item xs={1}></Grid>
  //                   <Grid item xs={11}>
  //                       Hello
  //                   {/* <CaseCardDetail  /> */}
  
  //                   </Grid>
  //                 </Grid>
  //               </ExpansionPanelDetails>
  //             </ExpansionPanel>
  //           )
  //         })}
  //       </Grid>
  //     </Grid>
  //   )
  // })} 