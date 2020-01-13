import React,{useEffect} from 'react';
import { withRouter } from 'react-router-dom'


function Home(props) {
  console.log(props,'p');
  

  useEffect(()=>{
    props.history.push('/auth/signin');
  },[]);


  return (
    <div>
        Home
    </div>
  );
}

export default withRouter(Home);