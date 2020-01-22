import React from 'react';
import {CaseInfoTop,CasePanel} from 'components/common/case';
import {useImmer} from 'use-immer';
import moment  from 'moment';

function CaseContainer(props) {
  const [value,setValue] = useImmer({
    caseId:'',
    partner:'새하얀치과',
    date:moment(),
    patient:''
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
  console.log(value,'!');
  return (
    <div>
      <CaseInfoTop 
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