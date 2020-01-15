import React from 'react';
import {Route} from 'react-router-dom';
import {useSelector} from 'react-redux';


// <PrivateRoute path="/project" component={Project} to="/auth/signup"/>
function LRoute({component:Component,...rest}) {
  const {base} = useSelector(state=>state);
  const {landing} = base;

  return (
    <Route {...rest} render={props=>{
      if(landing){
        return <h3>Loading...L</h3>
      }else {
        return <Component {...props}/>
      }
    }} />
  );
}

export default LRoute;