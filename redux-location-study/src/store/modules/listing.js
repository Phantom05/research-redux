import { handleActions } from 'redux-actions';
import * as actions from 'store/actions';
import produce from 'immer';
import _ from 'lodash';
import moment from 'moment';


let initialState = {
  
  country: [],
  location: [],
  processType:{
    0:{
      name:"created",
      title:"Created",
      color:"#D20000",
    },
    1:{
      name:"working",
      title:"Working"  ,
      color:"#F46700",
    },
    2:{
      name:"upload",
      title:"Upload",
      color:"#FEC600",
    },
    3:{
      name:"read",
      title:"Read",
      color:"#009D5B",
    },
    4:{
      name:"download",
      title:"Downloaded",
      color:"#1792DA",
    },
    5:{
      name:"complete",
      title:"Completed",
      color:"#75259A",
    },
  },
  case: {
    page:1,
    isEnd:false,
    load: []
  },
  partners: {
    pending:false,
    success:false,
    failure:false,
    keyword:'',
    codeType:'',
    type:'sender',
    page:1,
    list:[]
  },
  myPartners: {
    pending:false,
    success:false,
    failure:false,
    keyword:'',
    codeType:'',
    type:'',
    page:1,
    list:[]
  },
  partnersAdd: {
    pending: false,
    success: false,
    failure: false,
  },
  partnersType:{
    list:[
      {
        id: 0,
        title: "선택안함"
      },
      {
        id: 1,
        title: "클리닉"
      },
      {
        id: 2,
        title: "기공소"
      },
      {
        id: 3,
        title: "밀링센터"
      },
    ]
  },
  search: {
    // currentCode:'',
    keyword:'',
    page:1,
    codeType:'',
    type:'',
    
  },
  works:{
    pending:false,
    success:false,
    failure:false,
    render:0,
    search:{
      keyword:'',
      page:1,
      codeType:'',
      type:'',
      isLoad:false
    },
    currentType:"",
    currentCode:'',
    currentCardStage:"",
    currentSenderCode:'',
    deleteCode:[],
    groupList:[],
    list:[],
    pagingData:{
      page:1,
    },
    isEnd:false,
    upload:{
      direct:[]
    }
  },
  message:{
    list:[],
    pagingData:{
      "start": 0,
      "end": 1,
      "page": 1,
      "pageRange": 10,
      "prevCheck": false,
      "nextCheck": true
    },
    success: false,
    pending: false,
    failure: false,
    update: {
      success: false,
      pending: false,
      failure: false,
    }
  },
}


export default handleActions({
  // NOTE: COUNTRY LIST
  [actions.LISTING_COUNTRY.PENDING]: (state, { payload: diff }) => {
    return produce(state, draft => {
      console.log(`LISTING_COUNTRY PENDING`);
      // console.log(diff,'draft');
    })
  },
  [actions.LISTING_COUNTRY.SUCCESS]: (state, { payload: diff }) => {
    return produce(state, draft => {
      console.log(`LISTING_COUNTRY SUCCESS`);
      // console.log(diff,'draft');
      draft.country = diff.countryList;
    })
  },
  [actions.LISTING_COUNTRY.FAILURE]: (state, { payload: diff }) => {
    return produce(state, draft => {
      console.log(`LISTING_COUNTRY FAILURE`);
      // console.log(diff,'draft');
    })
  },

  // NOTE: LOCATION LIST
  [actions.LISTING_LOCATION.PENDING]: (state, { payload: diff }) => {
    return produce(state, draft => {
      console.log(`LISTING_LOCATION PENDING`);
      // console.log(diff,'draft');
    })
  },
  [actions.LISTING_LOCATION.SUCCESS]: (state, { payload: diff }) => {
    return produce(state, draft => {
      console.log(`LISTING_LOCATION SUCCESS`);
      // console.log(diff,'draft');
      draft.location = diff.regionList;
    })
  },
  [actions.LISTING_LOCATION.FAILURE]: (state, { payload: diff }) => {
    return produce(state, draft => {
      console.log(`LISTING_LOCATION FAILURE`);
      // console.log(diff,'draft');
    })
  },

  // NOTE: CASE List LOAD LIST
  [actions.LISTING_CASE_LOAD.INIT]: (state, { payload: diff }) => {
    return produce(state, draft => {
      console.log(`LISTING_CASE_LOAD INIT`);
      // console.log(diff,'draft');
      draft.case.load = initialState.case.load;
      draft.case.page = 1;
    })
  },
  [actions.LISTING_CASE_LOAD.PENDING]: (state, { payload: diff }) => {
    return produce(state, draft => {
      console.log(`LISTING_CASE_LOAD PENDING`);
      // console.log(diff,'draft');
    })
  },
  [actions.LISTING_CASE_LOAD.SUCCESS]: (state, { payload: diff }) => {
    return produce(state, draft => {
      console.log(`LISTING_CASE_LOAD SUCCESS`);
      console.log(diff,'!@$%!@$');
      
      if(diff.caseList.length === 0){
        draft.case.isEnd = true;
      }
      draft.case.load.push(...diff.caseList) ;
      draft.case.page = draft.case.page+1;
    })
  },
  [actions.LISTING_CASE_LOAD.FAILURE]: (state, { payload: diff }) => {
    return produce(state, draft => {
      console.log(`LISTING_CASE_LOAD FAILURE`);
      // console.log(diff,'draft');
    })
  },

  // NOTE: partner list 
  [actions.LISTING_PARTNERS_INFO.INIT]: (state, { payload: diff }) => {
    return produce(state, draft => {
      console.log(`LISTING_PARTNERS_INFO INIT`);
      draft.partners = initialState.partners;
    })
  },
  [actions.LISTING_PARTNERS_INFO.PENDING]: (state, { payload: diff }) => {
    return produce(state, draft => {
      console.log(`LISTING_PARTNERS_INFO PENDING`);
    })
  },
  [actions.LISTING_PARTNERS_INFO.SUCCESS]: (state, { payload: diff }) => {
    return produce(state, draft => {
      console.log(`LISTING_PARTNERS_INFO SUCCESS`);
      draft.partners.list.push(...diff.list) ;
      draft.partners.page = draft.partners.page+1;

    })
  },
  [actions.LISTING_PARTNERS_INFO.FAILURE]: (state, { payload: diff }) => {
    return produce(state, draft => {
      console.log(`LISTING_PARTNERS_INFO FAILURE`);
      
    })
  },

  // NOTE: LISTING_MY_PARTNERS LIST ADD
  [actions.LISTING_PARTNERS_MY_ADD.PENDING]: (state, { payload: diff }) => {
    return produce(state, draft => {
      console.log(`LISTING_PARTNERS_MY_ADD PENDING`);
      draft.partnersAdd.pending = true;
      draft.partnersAdd.success = false;
      draft.partnersAdd.failure = false;
    })
  },
  [actions.LISTING_PARTNERS_MY_ADD.SUCCESS]: (state, { payload: diff }) => {
    return produce(state, draft => {
      console.log(`LISTING_PARTNERS_MY_ADD SUCCESS`);
      draft.partnersAdd.pending = false;
      draft.partnersAdd.success = true;
      draft.partnersAdd.failure = false;
    })
  },
  [actions.LISTING_PARTNERS_MY_ADD.FAILURE]: (state, { payload: diff }) => {
    return produce(state, draft => {
      console.log(`LISTING_PARTNERS_MY_ADD FAILURE`);
      draft.partnersAdd.pending = false;
      draft.partnersAdd.success = false;
      draft.partnersAdd.failure = true;
    })
  },
  
  // NOTE: LISTING_MY_PARTNERS LIST DEFAULT SET
  [actions.LISTING_PARTNERS_MY_DEFAULT_ADD.PENDING]: (state, { payload: diff }) => {
    return produce(state, draft => {
      console.log(`LISTING_PARTNERS_MY_DEFAULT_ADD PENDING`);
      draft.partnersAdd.pending = true;
      draft.partnersAdd.success = false;
      draft.partnersAdd.failure = false;
    })
  },
  [actions.LISTING_PARTNERS_MY_DEFAULT_ADD.SUCCESS]: (state, { payload: diff }) => {
    return produce(state, draft => {
      console.log(`LISTING_PARTNERS_MY_DEFAULT_ADD SUCCESS`);
      draft.partnersAdd.pending = false;
      draft.partnersAdd.success = true;
      draft.partnersAdd.failure = false;
    })
  },
  [actions.LISTING_PARTNERS_MY_DEFAULT_ADD.FAILURE]: (state, { payload: diff }) => {
    return produce(state, draft => {
      console.log(`LISTING_PARTNERS_MY_DEFAULT_ADD FAILURE`);
      draft.partnersAdd.pending = false;
      draft.partnersAdd.success = false;
      draft.partnersAdd.failure = true;
    })
  },

  // NOTE: LISTING_PARTNERS_SEARCH LIST
  [actions.LISTING_PARTNERS_SEARCH.PENDING]: (state, { payload: diff }) => {
    return produce(state, draft => {
      console.log(`LISTING_PARTNERS_SEARCH PENDING`);
      draft.partners.pending = true;
      draft.partners.success = false;
      draft.partners.failure = false;
    })
  },
  [actions.LISTING_PARTNERS_SEARCH.SUCCESS]: (state, { payload: diff }) => {
    return produce(state, draft => {
      console.log(`LISTING_PARTNERS_SEARCH SUCCESS`);
      console.log(diff,'!!!!');
      const {page,type,codeType,keyword,first} = diff;
      if(first){
        draft.partners.list = diff.list ;
      }else{
        draft.partners.list.push(...diff.list) ;
      }
      draft.partners.keyword = keyword;
      draft.partners.codeType= codeType;
      draft.partners.page= page+1;
      draft.partners.type= type;

      draft.partners.pending = false;
      draft.partners.success = true;
      draft.partners.failure = false;
    })
  },
  [actions.LISTING_PARTNERS_SEARCH.FAILURE]: (state, { payload: diff }) => {
    return produce(state, draft => {
      console.log(`LISTING_PARTNERS_SEARCH FAILURE`);
      draft.partners.pending = false;
      draft.partners.success = false;
      draft.partners.failure = true;
    })
  },

// NOTE: LISTING_MY_PARTNERS LIST
[actions.LISTING_MY_PARTNERS.PENDING]: (state, { payload: diff }) => {
  return produce(state, draft => {
    console.log(`LISTING_MY_PARTNERS PENDING`);
    draft.myPartners.pending = true;
    draft.myPartners.success = false;
    draft.myPartners.failure = false;
  })
},
[actions.LISTING_MY_PARTNERS.SUCCESS]: (state, { payload: diff }) => {
  return produce(state, draft => {
    console.log(`LISTING_MY_PARTNERS SUCCESS`);
    console.log(diff,'!!!!');
    const {page,type,codeType,keyword,first} = diff;
    if(first){
      console.log("AAAAA");
      draft.myPartners.list = diff.list ;
    }else{
      console.log("BBBB");
      draft.myPartners.list.push(...diff.list) ;
    }
    draft.myPartners.keyword = keyword;
    draft.myPartners.codeType= codeType;
    draft.myPartners.page= page+1;
    draft.myPartners.type= type;

    draft.myPartners.pending = false;
    draft.myPartners.success = true;
    draft.myPartners.failure = false;
  })
},
[actions.LISTING_MY_PARTNERS.FAILURE]: (state, { payload: diff }) => {
  return produce(state, draft => {
    console.log(`LISTING_MY_PARTNERS FAILURE`);
    draft.myPartners.pending = false;
    draft.myPartners.success = false;
    draft.myPartners.failure = true;
  })
},



  // NOTE: LISTING_PARTNERS_TYPE LIST
  [actions.LISTING_PARTNERS_TYPE.PENDING]: (state, { payload: diff }) => {
    return produce(state, draft => {
      console.log(`LISTING_PARTNERS_TYPE PENDING`);
      // console.log(diff,'draft');
    })
  },
  [actions.LISTING_PARTNERS_TYPE.SUCCESS]: (state, { payload: diff }) => {
    return produce(state, draft => {
      console.log(`LISTING_PARTNERS_TYPE SUCCESS`);
      draft.partnersType.list = diff.list;
    })
  },
  [actions.LISTING_PARTNERS_TYPE.FAILURE]: (state, { payload: diff }) => {
    return produce(state, draft => {
      console.log(`LISTING_PARTNERS_TYPE FAILURE`);
      // console.log(diff,'draft');
    })
  },


  // NOTE: LISTING_WORKS_SEARCH LIST

  [actions.LISTING_WORKS_SEARCH.INIT]: (state, { payload: diff }) => {
    return produce(state, draft => {
      console.log(`LISTING_WORKS_SEARCH INIT`);
      console.log(diff);
      if(diff && diff.type === 'currentCode'){
        draft.works.currentCode = diff.currentCode;
      }else if (diff && diff.type === 'typeChange'){
        draft.works.currentType= diff.value;
        draft.works.currentCardStage = diff.stage;
      }
      else{
        draft.works = initialState.works;
      }
      
    })
  },

  [actions.LISTING_WORKS_SEARCH.PENDING]: (state, { payload: diff }) => {
    return produce(state, draft => {
      console.log(`LISTING_WORKS_SEARCH PENDING`);
      // console.log(diff,'draft');
      draft.works.pending = true;
      draft.works.success = false;
      draft.works.failure = false;
    })
  },
  [actions.LISTING_WORKS_SEARCH.SUCCESS]: (state, { payload: diff }) => {
    return produce(state, draft => {
      console.log(`LISTING_WORKS_SEARCH SUCCESS`);
      console.log(diff,'hma..');
      {
        // DEBUG:// 테스트
        // for(let i = 0 ; i < diff.cases.length; i++){
        //   for(let j = 0 ; j < 5; j ++){
        //     diff.cases[i].sender.direct.push(
        //       {
        //         name:`DoF_행복한치과_000${j}`,
        //         url:`https://www.naver.com`,
        //         type:"zip"
        //       }
        //     )
        //   };
        // }
        // draft.works.list.push(...diff.cases);
        // draft.works.pagingData.data = draft.works.page +1
        // DEBUG:// 테스트
      }

      const addStrDueDateArr = _.map(diff.cases,item=>{
        item.strDueDate = moment.unix(item.enrollDate).format('YYYY-MM-DD');
        return item;
      });
      const dueDateGroup = _.groupBy(addStrDueDateArr,'strDueDate');
      const newList = _.map(dueDateGroup,(item,key)=>({duedate:key,list:item}));
      
      draft.works.pending = false;
      draft.works.success = true;
      draft.works.failure = false;
      draft.works.search = diff.searchData || {};

      if(diff.type){
        draft.search.type = diff.type;
      }
      draft.works.currentCode = "";
      draft.works.groupList = newList;
      if(diff.searchData && diff.searchData.first){
        draft.works.list = diff.cases;  
        // infinite면 ...list push 해야함
      }else{
        draft.works.list = diff.cases;
      }
      draft.works.pagingData = diff.pagingData;
      
      if(diff.cases.length === 0){
        draft.works.isEnd = true;
      }
      
    })
  },
  [actions.LISTING_WORKS_SEARCH.FAILURE]: (state, { payload: diff }) => {
    return produce(state, draft => {
      console.log(`LISTING_WORKS_SEARCH FAILURE`);
      // console.log(diff,'draft');
      draft.works.pending = false;
      draft.works.success = false;
      draft.works.failure = true;
    })
  },

  [actions.LISTING_WORKS_LIST_UPDATE]: (state, { payload: diff }) => {
    return produce(state, draft => {
      console.log(`LISTING_WORKS_LIST_UPDATE index`);
      console.log(diff,'draft');
      const {type,value} = diff;
      if(type === 'case'){
        draft.works.render = draft.works.render+1;
        // console.log(
        //   draft.works.groupList,'draft.works.groupList'
        // );
        // console.log(
        //   _.find(draft.works.groupList,['caseCode',value])
        // );

        console.log(value);
      }
      
    })
  },

  

  // 
  [actions.LISTING_SELECT_PANEL]: (state, { payload: diff }) => {
    return produce(state, draft => {
      console.log(`LISTING_SELECT_PANEL`);
      // console.log(diff,'LISTING_SELECT_PANEL');
      console.log(diff);
      if(draft.works.currentCode === diff.currentCode ){
        draft.works.currentCode = "";
        draft.works.currentSenderCode = "";
      }else{
        draft.works.currentCode = diff.currentCode ;
        draft.works.currentSenderCode = diff && diff.currentSenderCode;
      }

    })
  },


  // message : {
  //  pending: false,
  //  success: false,
  //   failure: false,
  //   list: [],
  //   pagingData:{

  //   }
  // }
  [actions.MESSAGE_LIST.PENDING]: (state, {payload: diff}) => {
    return produce(state, draft => {
      console.log("MESSAGE_LIST pending");
      draft.message.pending = true;
      draft.message.success = false;
      draft.message.failure = false;
    })
  },
  [actions.MESSAGE_LIST.SUCCESS]: (state, {payload: diff}) => {
    return produce(state, draft => {
      console.log("MESSAGE_LIST success", JSON.stringify(diff));
      draft.message.pending = false;
      draft.message.success = true;
      draft.message.failure = false;
      draft.message.list = diff.list;
      draft.message.pagingData = diff.pagingData;
    })
  },
  [actions.MESSAGE_LIST.FAILURE]: (state, {payload: diff}) => {
    return produce(state, draft => {
      console.log("MESSAGE_LIST failure");
      draft.message.pending = false;
      draft.message.success = false;
      draft.message.failure = true;
    })
  },

  // message : {
  // update:{
  //   pending: false,
  //   success: false,
  //    failure: false,
  // }
  // }
  [actions.MESSAGE_LIST_DELETE.PENDING]: (state, {payload: diff}) => {
    return produce(state, draft => {
      console.log("MESSAGE_LIST_DELETE pending");
      draft.message.update.pending = true;
      draft.message.update.success = false;
      draft.message.update.failure = false;
    })
  },
  [actions.MESSAGE_LIST_DELETE.SUCCESS]: (state, {payload: diff}) => {
    return produce(state, draft => {
      console.log("MESSAGE_LIST_DELETE success", JSON.stringify(diff));
      draft.message.update.pending = false;
      draft.message.update.success = true;
      draft.message.update.failure = false;
    })
  },
  [actions.MESSAGE_LIST_DELETE.FAILURE]: (state, {payload: diff}) => {
    return produce(state, draft => {
      console.log("MESSAGE_LIST_DELETE failure");
      draft.message.update.pending = false;
      draft.message.update.success = false;
      draft.message.update.failure = true;
    })
  },

  // message : {
  // update:{
  //   pending: false,
  //   success: false,
  //    failure: false,
  // }
  // }
  [actions.MESSAGE_LIST_DELETE_ALL.PENDING]: (state, {payload: diff}) => {
    return produce(state, draft => {
      console.log("MESSAGE_LIST_DELETE_ALL pending");
      draft.message.update.pending = true;
      draft.message.update.success = false;
      draft.message.update.failure = false;
    })
  },
  [actions.MESSAGE_LIST_DELETE_ALL.SUCCESS]: (state, {payload: diff}) => {
    return produce(state, draft => {
      console.log("MESSAGE_LIST_DELETE_ALL success", JSON.stringify(diff));
      draft.message.update.pending = false;
      draft.message.update.success = true;
      draft.message.update.failure = false;
    })
  },
  [actions.MESSAGE_LIST_DELETE_ALL.FAILURE]: (state, {payload: diff}) => {
    return produce(state, draft => {
      console.log("MESSAGE_LIST_DELETE_ALL failure");
      draft.message.update.pending = false;
      draft.message.update.success = false;
      draft.message.update.failure = true;
    })
  },
  
  //message read
  [actions.MESSAGE_LIST_READ.PENDING]: (state, {payload: diff}) => {
    return produce(state, draft => {
      console.log("MESSAGE_LIST_READ pending");
      draft.message.update.pending = true;
      draft.message.update.success = false;
      draft.message.update.failure = false;
    })
  },
  [actions.MESSAGE_LIST_READ.SUCCESS]: (state, {payload: diff}) => {
    return produce(state, draft => {
      console.log("MESSAGE_LIST_READ success", JSON.stringify(diff));
      draft.message.update.pending = false;
      draft.message.update.success = true;
      draft.message.update.failure = false;
    })
  },
  [actions.MESSAGE_LIST_READ.FAILURE]: (state, {payload: diff}) => {
    return produce(state, draft => {
      console.log("MESSAGE_LIST_READ failure");
      draft.message.update.pending = false;
      draft.message.update.success = false;
      draft.message.update.failure = true;
    })
  },


}, initialState);




