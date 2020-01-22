import React, { useState,useEffect } from 'react';
import styled from 'styled-components';
import {isFocusCurrentTarget} from 'lib/library';
import { font, color } from 'styles/__utils';
import { makeStyles } from '@material-ui/core/styles';
import { useImmer } from 'use-immer';
import moment  from 'moment';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import DateFnsUtils from '@date-io/date-fns';
import {PlainTooltip} from 'components/common/tooltip';
// import TextField from '@material-ui/core/TextField';
// import Input from '@material-ui/core/Input';
// import { Tooltip } from '@material-ui/core';


import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';


const useStyles = makeStyles(theme => ({
  root: {
  },
  notchedOutline:{
    '&$cssFocused $notchedOutline': {
      borderColor: `red !important`,
    }
  },
  cssOutlinedInput:{

  },
  focused:{
    borderColor:'black !important' 
  }
}));

function CaseInfoTop(props) {
  const classes = useStyles();
  const {caseId, partner, onChange, date, patient,onClick} = props;
  const partnerTooltipText = `My Page의 Partners에서 특정 기공소를 등록할 수 있습니다. 
  등록된 기공소가 기본으로 선택되며, 추가 등록을 통해 여러 기공소와 협력할 수 있습니다.`;

  const handleChange = name => event => {
    onChange(name,event.target.value)
  };

  const handleDateChange = date => {
    const moDate = moment(date);
    onChange('date',moDate)
  };

  const handleBlur =  (e) => {
    if (!isFocusCurrentTarget(e)) {
      onChange('caseId',patient);
    }
  }
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
            <Button 
              onClick={()=>onClick('load')}
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
              <OutlinedInput
                value={patient}
                onChange={handleChange('patient')}
                onBlur={handleBlur}
                labelWidth={0}
                className="CreateCase_input patient"
              />
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
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container justify="space-around">
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="yyyy-MM-dd"
                  id="date-picker-inline"
                  value={date}
                  inputVariant="outlined"
                  onChange={handleDateChange}
                  className="CreateCase_input date"
                />
              </Grid>
          </MuiPickersUtilsProvider>
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
          <p className="CreateCase__text">{partner}</p>
        </Grid>
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
            <Button variant="contained" className="CreateCase__button" component="span">Change</Button>
          </label>
        </Grid>
      </Grid>

    </Styled.CreateCase>
  );
}

const Styled = {
  CreateCase: styled.div`
    .CreateCase__title{
      display:inline-block;
      ${font(18, color.black_font)};
      font-weight:500;
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
      ${font(16,color.gray_font)};
    }
  `
}


export default CaseInfoTop;