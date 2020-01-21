import React, { useState } from 'react';
import styled from 'styled-components';
import { font, color } from 'styles/__utils';
import { makeStyles } from '@material-ui/core/styles';

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
    // flexGrow: 1,
  },
}));

function CaseInfoTop(props) {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const {caseId,partner} = props;
  const partnerTooltipText = `My Page의 Partners에서 특정 기공소를 등록할 수 있습니다. 
  등록된 기공소가 기본으로 선택되며, 추가 등록을 통해 여러 기공소와 협력할 수 있습니다.`
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

  return (
    <Styled.CreateCase>
      <Grid container className="CreateCase__row">
        <Grid item xs>
          <span className="CreateCase__title">Case ID </span>
        </Grid>
        <Grid item xs={6}> 
          <p className="CreateCase__text">{caseId}</p>
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
          <label htmlFor="contained-button-file" >
            <Button variant="contained" className="CreateCase__button" component="span">Load</Button>
          </label>
        </Grid>
      </Grid>

      <Grid container className="CreateCase__row">
        <Grid item xs>
          <span className="CreateCase__title">
            Patient
            </span>
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
      font-weight:500;
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
      line-height:50px;
    }
    .CreateCase__text{
      position:relative;
      ${font(16,color.gray_font)};
    }
  `
}


export default CaseInfoTop;