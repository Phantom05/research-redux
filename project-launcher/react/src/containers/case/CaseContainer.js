import React from 'react';
import {CaseInfoTop,CasePanel} from 'components/common/case';
import {useImmer} from 'use-immer';
import moment  from 'moment';
import { PlainModal } from 'components/common/modal';
import {CaseLoadList} from 'components/common/case';
function CaseContainer(props) {
  const [value,setValue] = useImmer({
    caseId:'',
    partner:'새하얀치과',
    date:moment(),
    patient:'',
    modal:false
  });
  const {caseId, partner, date,patient} = value;

  const handleChange=(name,value)=>{
    setValue(draft=>{
      const moDate = moment(new Date()).format(`YYYYMMDD`);
      draft[name] = value;
      if(name === 'caseId' || name === 'patient' ){
        draft.caseId=  `${moDate}-${partner}-${value}`;
      }
    })
  }
  const handleClick = (value)=>{
    console.log('handleClick',value);
    setValue(draft=>{
      draft.modal = true
    })
  }
  const caseList = [
    {
      id:0,
      caseId:`20200120_새하얀치과_Alice_0001`,
      sender:"새하얀치과",
      status:'hello'
    },
    {
      id:1,
      caseId:`20200120_새하얀치과_Alice_0002`,
      sender:"새하얀치과",
      status:'world'
    },
    {
      id:2,
      caseId:`20200120_새하얀치과_Alice_0002`,
      sender:"새하얀치과",
      status:'world'
    },
    {
      id:3,
      caseId:`20200120_새하얀치과_Alice_0002`,
      sender:"새하얀치과",
      status:'world'
    },
    {
      id:4,
      caseId:`20200120_새하얀치과_Alice_0002`,
      sender:"새하얀치과",
      status:'world'
    },
  ];
  console.log(value,'!');
  return (
    <div>
      <PlainModal 
        type="caseLoad"
        isOpen={value.modal}
        content={<CaseLoadList list={caseList}/>}
      />
      <CaseInfoTop 
        onClick={handleClick}
        caseId={caseId}
        partner={partner}
        patient={patient}
        onChange={handleChange}
        date={date}
      />
      <CasePanel 
        type="create"
      />
    </div>
  );
}

export default CaseContainer;