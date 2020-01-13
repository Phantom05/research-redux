import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {floatClear} from 'styles/__utils';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));


function SignInForm(props){
  const classes = useStyles();
  const [value, setValue] = React.useState('Controlled');

  const handleChange = event => {
    setValue(event.target.value);
  };


  return (
  <Styled.SignInForm>
    <h1>DOF Launcher</h1>
    <form action="">
      <div className="form__group">
      <TextField
          id="standard-multiline-flexible"
          label="Multiline"
          multiline
          rowsMax="4"
          value={value}
          onChange={handleChange}
        />
        <input type="text"/>
      </div>
      <div className="form__group">
        <input type="text"/>
      </div>
      <div className="form__group">
        <div>
          <input type="checkbox"/> Remember
        </div>
        <div>
          Forgot password
        </div>
      </div>
      <div className="form__group">
        <button>Log In</button>
      </div>
      <div className="form__group">
        <Link to="/auth/signup">IOS Launcher 계정 만들기</Link>
      </div>
    </form>
  </Styled.SignInForm>
  )
}




export default SignInForm;

const Styled ={
  SignInForm:styled.div`
    width:400px;
    border:1px solid red;
    .form__group{
      ${floatClear}
    }
  `
}



// function LoginForm(config) {
//   // {
//   //   url:`https://localhost.com:8080/login`,
//   //   method:'post',
//   // }

//   return function({data}){
//     const [value,setValue] = setState({});
//     const axiosConf={
//       ...config,
//       data
//     }
//     await axios(axiosConf);
//     setValue(data);

//     return (
//       <div>
//         {value}
//       </div>
//     );
//   }
// }