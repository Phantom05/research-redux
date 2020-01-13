import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { floatClear } from 'styles/__utils';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';


import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles(theme => ({
  root: {
    '& input:valid:focus + fieldset': {
      borderColor: '#309687',
    },
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '100%',
    marginBottom: 15,
  },
  loginBtn:{
    width:`300px`,
    margin:'auto',
    background:`#2D9D8D`,
    '&:hover':{
      background:`#229987`
    }
  },
  input:{
    height:40,
  },
  label:{
    fontSize:14,
    top:`-17%`,
  },
  eyeIcon:{
    width:12,
    fontSize:12
  }
}));

const styles = {

  largeIcon: {
    width: 60,
    height: 60,
  },

};

function SignInForm(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    email: '',
    password: '',
    showPassword: false,
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };


  console.log(values);

  return (
    <Styled.SignInForm>
      <h1 className="signin__title">DOF Launcher</h1>

      <form action="" className={classes.root}>
      <FormGroup aria-label="position" row>
          <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
            <InputLabel htmlFor="email" className={classes.label}>Email Address</InputLabel>
            <OutlinedInput
              autoComplete="off"
              id="email"
              type={'text'}
              value={values.email}
              onChange={handleChange('email')}
              labelWidth={70}
              className={classes.input}
              
            />
          </FormControl>
        </FormGroup>

        <FormGroup aria-label="position" row>
          <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
            <InputLabel htmlFor="password" className={classes.label}>Password</InputLabel>
            <OutlinedInput
              id="password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              className={classes.input}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    // iconStyle={styles.largeIcon}
                    className={classes.eyeIcon}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={70}
            />
          </FormControl>
        </FormGroup>
        

        <FormGroup aria-label="position" row className="form__cash_box">
        <Grid container  justify="space-between">
          <Grid item xs={6}>
          <FormControlLabel
                value="remember"
                control={<Checkbox color="primary" />}
                label="Remember Me"
                labelPlacement="end"
              />  
          </Grid>
          <Grid item xs={6}>
            <Link to="/" className="form__cash_tx">Forget password</Link>
          </Grid>
        </Grid>

            
          
        </FormGroup>

        <FormGroup aria-label="position" row>
          <Button variant="contained" color="primary" className={classes.loginBtn}>Log In</Button>
        </FormGroup>
        
        <FormGroup aria-label="position" row>
          <p className="form__link_box">
            <Link to="/auth/signup" className="form__link_btn signup">IOS Launcher 계정 만들기</Link>
          </p>
        </FormGroup>

      </form>
    </Styled.SignInForm>
  )
}




export default SignInForm;

const Styled = {
  SignInForm: styled.div`
    width:400px;
    /* border:1px solid red; */
    .form__group{
      ${floatClear}
    }
    .form__link_box{
      width:100%;
      text-align:center;
      margin-top:20px;
    }
    .form__link_btn{
      color:#2D9D8D;
      font-size:16px;
    }
    .form__cash_box{
      margin-bottom:60px;
    }
    .signin__title{
      margin-bottom:150px;
      font-size:36px;
      font-weight:bold;
      text-align:center;
    }
    .MuiInputLabel-root.Mui-focused{
      color:#309687; 
      border-color:#309687
    }
    .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline{
      border-color:#309687
    }
    .form__cash_tx{
      float:right;
    }
  `
}



