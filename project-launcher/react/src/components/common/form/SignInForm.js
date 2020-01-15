import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { floatClear, color, font } from 'styles/__utils';
import {ENV_MODE_DEV} from 'lib/setting';
import {LoadingCircle} from 'components/base/loading';


import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';




function SignInForm({onSubmit,error,pending}) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    email: '',
    password: '',
    showPassword: false,
  });
  const {email:errorEmail,password:errorPassword} = error;

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const iconPasswordVisible = values.showPassword
    ? <Visibility className={classes.eyeIcon} />
    : <VisibilityOff className={classes.eyeIcon} />

  const handleSubmit =()=> onSubmit(values);
  const devInsertAccount = ()=>{
    setValues({
      ...values,
      email:"hello@gmail.com",
      password:"123j123J",
    })
  };

  console.log(pending,'pending');


  return (
    <Styled.SignInForm>
      <h1 className="signin__title">DOF Launcher</h1>
      {ENV_MODE_DEV && <div>
        <Button 
            variant="contained" 
            color="inherit" 
            style={{marginBottom:20}}
            onClick={devInsertAccount}>Dev Insert Id</Button>
      </div>}
      <form action="" className={classes.root}>
        <FormGroup aria-label="position" row>
          <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
            <InputLabel htmlFor="email" className={classes.label}>Email Address</InputLabel>
            <OutlinedInput
              error={errorEmail}
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
              error={errorPassword}
              id="password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              className={classes.input}
              autoComplete="off"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    className={classes.eyeIcon}
                  >
                    {iconPasswordVisible}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={70}
            />
          </FormControl>
        </FormGroup>

        <FormGroup aria-label="position" row className="form__cash_box">
          <Grid container justify="space-between">
            <Grid item xs={6}>
              <FormControlLabel
                value="remember"
                control={<Checkbox color="primary" />}
                label={<span className="remember_label">Remember me</span>}
                labelPlacement="end"
              />
            </Grid>
            <Grid item xs={6}>
              <Link to="/" className="form__cash_tx">Forget password</Link>
            </Grid>
          </Grid>
        </FormGroup>

        <FormGroup aria-label="position" row>
          <Button 
            variant="contained" 
            color="primary" 
            className={classes.loginBtn}
            onClick={handleSubmit}>
             {pending ? <LoadingCircle  className="loading__bar" size={20}/>:'Log In'}
          </Button>
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


const useStyles = makeStyles(theme => ({
  root: {
    '& input:valid:focus + fieldset': {
      borderColor: `${color.green}`,
    },
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '100%',
    marginBottom: 15,
  },
  loginBtn: {
    width: `300px`,
    margin: 'auto',
    height:'40px',
    background: `${color.green}`,
    '&:hover': {
      background: `${color.green_hover}`
    }
  },
  input: {
    height: 40,
  },
  label: {
    fontSize: 14,
    top: `-17%`,
  },
  eyeIcon: {
    fontSize: 15
  },
  remember_label: {
    fontSize: 12
  }
}));

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
      &:hover{
        text-decoration:underline;
      }
    }
    .form__cash_box{
      margin-bottom:60px;
    }
    .signin__title{
      margin-bottom:150px;
      ${font(36, color.black)};
      font-weight:bold;
      text-align:center;
    }
    .remember_label{
      ${font(14, color.black)};
    }
    .form__cash_tx{
      position:relative;
      float:right;
      top:13px;
      ${font(14, color.black)};
      &:hover{
        text-decoration:underline;
      }
    }
    .loading__bar{
      position:relative;
      top:5px;
      margin-left:5px;
    }

    .MuiInputLabel-root.Mui-focused{
      color:${color.green}; 
      border-color:${color.green}
    }
    .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline{
      border-color:${color.green}
    }
    .MuiCheckbox-colorPrimary.Mui-checked{
      color:${color.green}
    }





  `
}


export default SignInForm;
