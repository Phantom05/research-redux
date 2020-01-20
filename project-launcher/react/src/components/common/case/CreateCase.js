import React, { useState } from 'react';
import styled from 'styled-components';
import {font,color} from 'styles/__utils';
import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
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

function CreateCase(props) {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <Styled.CreateCase>
      <Grid container>
        <Grid item xs> 
          <span className="CreateCase__title">Case ID </span>
        </Grid>
        <Grid item xs={6}> 20200120_clinic_Alice_01 </Grid>
        <Grid item xs={3}>
          <input
            accept="image/*"
            className={classes.input}
            id="contained-button-file"
            multiple
            type="file"
            hidden
          />
          <label htmlFor="contained-button-file" >
            <Button variant="contained" color="primary" component="span">Load</Button>
          </label>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs> 
          <span className="CreateCase__title">Patient</span>
        </Grid>
        <Grid item xs={6}>
          
        <Input placeholder="Placeholder" inputProps={{ 'aria-label': 'description' }} />

        </Grid>
        <Grid item xs={3}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="yyyy-MM-dd"
                margin="normal"
                id="date-picker-inline"
                label="Due Date"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </Grid>
          </MuiPickersUtilsProvider>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs> 
          <span className="CreateCase__title">기공소</span>
        </Grid>
        <Grid item xs={6}>
        새하얀하얀하얀 기공소
        </Grid>
        <Grid item xs={3}>
          <input
            accept="image/*"
            className={classes.input}
            id="contained-button-file"
            multiple
            type="file"
            hidden
          />
          <label htmlFor="contained-button-file">
            <Button variant="contained" color="primary" component="span">Change</Button>
          </label>
        </Grid>
      </Grid>


    </Styled.CreateCase>
  );
}

const Styled={
  CreateCase:styled.div`
    .CreateCase__title{
      display:inline-block;
      ${font(18,color.black_font)};
      font-weight:600;
    }
  `
}

export default CreateCase;