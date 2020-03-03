
import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import {isFocusCurrentTarget} from 'lib/library';
import { font, color } from 'styles/__utils';
import { makeStyles} from '@material-ui/core/styles';
import moment  from 'moment';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import {PlainTooltip} from 'components/common/tooltip';
import {DatePicker} from 'components/common/input';
// import {useImmer} from 'use-immer';

import {DateConverter} from 'components/base/helpers/convert';

function CaseInfoTopCard(props) {
  const classes = useStyles();
  const { onChange, onClick,info,type,profile} = props;
  const {caseId, patient,dueDate,receiverName} = info
  const partnerTooltipText = `My Page의 Partners에서 특정 기공소를 등록할 수 있습니다. 
  등록된 기공소가 기본으로 선택되며, 추가 등록을 통해 여러 기공소와 협력할 수 있습니다.`;

  // const [values,setValues] = useImmer({
  //   caseId:'',
  //   patient:"",
  //   dueDate:"",

  const handleClick= name=>e =>{
    if(name === 'partners'){
      onClick(name)()
    }
  }

  const handleChange = name => event => {
    onChange({type:name,value:event.target.value});
  };

  const handleDateChange = date => {
    const moDate = moment(date).unix();
    
    onChange({type:'dueDate',value:moDate});
  };

  const handleBlur =  (e) => {
    if (!isFocusCurrentTarget(e)) {
      // onChange({type:'caseId',value:patient});
    }
  }

  const isCreateType = type === 'create' ;
  const isModifyMode =  type === 'modify';
  const isSenderCase = profile.userCode === info.senderCode;
  const isSenderModifyMode = (isCreateType || isModifyMode && isSenderCase) ;
  // const isReceiverCase = profile.userCode === info.receiverCode;

  return (
    <Styled.CreateCase>
      <Grid container className="CreateCase__row">
        <Grid item xs={2}>
          <span className="CreateCase__title">Case ID </span>
        </Grid>
        <Grid item xs={6}> 
          <p className="CreateCase__text">{caseId}</p>
        </Grid>
        <Grid item xs className="CreateCase__button_col">
          <input
            accept="image/*"
            className={classes.input}
            id="contained-button-file"
            multiple
            // type="file"
            hidden
          />
          <label htmlFor="contained-button-file" >
            {!isCreateType &&
              <Button 
              onClick={onClick('new')}
              variant="contained" 
              className="CreateCase__button new" 
              component="span">New Case</Button>
            }

            <Button 
              onClick={onClick('load')}
              variant="contained" 
              className="CreateCase__button" 
              component="span">Load</Button>
          </label>
        </Grid>
      </Grid>

      <Grid container className="CreateCase__row">
        <Grid item xs={6}>
          <Grid container>
            <Grid item xs={4}>
              <span className="CreateCase__title">
                Patient
                </span>
            </Grid>
            <Grid item xs={8}>
              {isSenderModifyMode 
              ?<OutlinedInput
                value={patient}
                onChange={handleChange('patient')}
                onBlur={handleBlur}
                labelWidth={0}
                className="CreateCase_input patient"
              />
              :<span className="CreateCase_load patient">{patient}</span>}
              
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={6} className="CreateCase__button_col">
        <Grid container>
            <Grid item xs={4}>
              <span className="CreateCase__title date">
                Due Date
                </span>
            </Grid>
            <Grid item xs={8}>
              {isSenderModifyMode
              ?<DatePicker 
                value={moment.unix(dueDate).toDate()}
                className="CreateCase_input date"
                onChange={handleDateChange}
              />  
              :<span className="CreateCase_load date">
                <DateConverter 
                  timestamp={dueDate}
                  format="YYYY-MM-DD"
                />
                {/* {moment.unix(dueDate).format('YYYY-MM-DD')} */}
                </span>}
            </Grid>
          </Grid>

        </Grid>
      </Grid>

      <Grid container className="CreateCase__row">
        <Grid item xs={2}>
          <span className="CreateCase__title">
            <span className="title__text">Partner</span>
            <PlainTooltip
              type="help" 
              title={partnerTooltipText} 
              placement="right-start"
            />
          </span>
        </Grid>
        <Grid item xs={6}>
          <p className="CreateCase__text">
          <span className="CreateCase_load tx">{receiverName}</span>
          </p>
        </Grid>
        {isSenderModifyMode  && 
          <Grid item xs className="CreateCase__button_col">
            <input
              accept="image/*"
              className={classes.input}
              id="contained-button-file"
              multiple
              type="file"
              hidden
            />
            <label htmlFor="contained-button-file">
              
            <Button 
                onClick={handleClick('partners')}
                variant="contained" 
                className="CreateCase__button" 
                component="span">Change</Button>
            </label>
          </Grid>
        }
       
      </Grid>
    <Styled.GlobalStyles />
    </Styled.CreateCase>
  );
}
const useStyles = makeStyles(theme => ({
  root: {
  },
  notchedOutline:{
    '&$cssFocused $notchedOutline': {
      // borderColor: `red !important`,
    }
  },
  cssOutlinedInput:{

  },
  focused:{
    borderColor:'black !important' 
  },
}));

const Styled = {
  CreateCase: styled.div`
    .CreateCase__title{
      display:inline-block;
      font-weight:500;
      ${font(18, color.black_font)};
      &.date{
        margin-right:10px;
      }
    }
    .title__text{
      margin-right:5px;
    }
    .CreateCase__button_col{
      text-align:right;
    }
    .CreateCase__button{
      background:${color.blue};
      color:white;
      &:hover{
        background:${color.blue_hover};
      }
      &.new{
        margin-right:5px;
      }
    }
    .CreateCase_input{
      display:inline-block;
      /* height:40px; */

      &.patient{
        width:100%;
      }
      &.patient input{
        padding:10px 15px;
        width:100%;
        height:40px;
        ${font(14,color.black)}
      }
      .MuiOutlinedInput-adornedEnd{
        padding-right:0;
      }
      &.date input{
        height:40px;
        padding:10px 15px;
        ${font(14, color.gray_font)};
        
      }
    }
    .CreateCase__row{
      height:60px;
      line-height:60px;
    }

    .Mui-focused .MuiOutlinedInput-notchedOutline{
      border-color:${color.blue} !important;
    }
    .CreateCase_input.date.Mui-focused, .CreateCase_input.patient.Mui-focused  fieldset{
      border:2px solid ${color.blue}
    }
    .CreateCase__text{
      position:relative;
      white-space:nowrap;
      overflow:hidden;
      text-overflow:ellipsis;
      ${font(16,color.gray_font)};
    }
    .CreateCase_load{
      &.patient,&.tx,&.date{
        position:relative;
        top:1px;
        float:left;
        ${font(16,color.gray_font)};
      }
    }
  `,
    GlobalStyles:createGlobalStyle`
      .MuiPickersDay-daySelected{
        background-color:${color.blue} !important;
      };
    `
}

export default CaseInfoTopCard;