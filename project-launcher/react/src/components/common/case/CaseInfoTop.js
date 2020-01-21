import React, { useState } from 'react';
import styled from 'styled-components';
import { font, color } from 'styles/__utils';
import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import DateFnsUtils from '@date-io/date-fns';

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';


const useStyles = makeStyles(theme => ({
  root: {
    // flexGrow: 1,
  },
}));

function CaseInfoTop(props) {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = useState(new Date());

  const [values, setValues] = useState({
    patient: '',
    date: '',
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleDateChange = date => {
    setSelectedDate(date);
    setValues({ ...values, date: selectedDate });
  };
  console.log(values);
  

  let temp;
  const array = [10,5,4,7,9,6,8,2,1];
  for(let i =0 ; i < array.length; i++){
    for(let j = 0 ; j < array.length - (i+1); j++){
      if(array[j] > array[j+1]){
        temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
      }
    }
  }
  console.log(array);


  return (
    <Styled.CreateCase>
      <Grid container className="CreateCase__row">
        <Grid item xs>
          <span className="CreateCase__title">Case ID </span>
        </Grid>
        <Grid item xs={6}> 20200120_clinic_Alice_01 </Grid>
        <Grid item xs={3} className="CreateCase__button_col">
          <input
            accept="image/*"
            className={classes.input}
            id="contained-button-file"
            multiple
            type="file"
            hidden
          />
          <label htmlFor="contained-button-file" >
            <Button variant="contained" className="CreateCase__button" component="span">Load</Button>
          </label>
        </Grid>
      </Grid>

      <Grid container className="CreateCase__row">
        <Grid item xs>
          <span className="CreateCase__title">Patient</span>
        </Grid>
        <Grid item xs={6}>
          <OutlinedInput
            value={values.patient}
            onChange={handleChange('patient')}
            labelWidth={0}
            className="CreateCase_input patient"
          />
        </Grid>

        <Grid item xs={3} className="CreateCase__button_col">
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="yyyy-MM-dd"
                id="date-picker-inline"
                // label="Due Date"
                value={selectedDate}
                inputVariant="outlined"
                onChange={handleDateChange}
                className="CreateCase_input date"
              />
            </Grid>
          </MuiPickersUtilsProvider>
        </Grid>
      </Grid>

      <Grid container className="CreateCase__row">
        <Grid item xs>
          <span className="CreateCase__title">기공소</span>
        </Grid>
        <Grid item xs={6}>
          새하얀하얀하얀 기공소
        </Grid>
        <Grid item xs={3} className="CreateCase__button_col">
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
      font-weight:600;
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
      &.patient{
        width:90%;
      }
      &.patient input{
        padding:10px 15px;
        width:100%;
      }
      &.date input{
        padding:10px 15px;
        ${font(14, color.grayFont)}
      }
    }
    .CreateCase__row{
      height:50px;
      border:1px solid red;
    }
  `
}


export default CaseInfoTop;