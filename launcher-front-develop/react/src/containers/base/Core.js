import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { storage, keys } from 'lib/library'
import { connect } from 'react-redux';
import { Actions } from 'store/actionCreators';
import {AUTH_TOKEN_SAGAS, AUTO_LOGIN_SAGAS} from 'store/actions';
import {FullScreenLoading} from 'components/base/loading';
import throttle from 'lodash/throttle';
// import {useSelector} from 'react-redux';


// class Core extends Component {
  
//   initialize = async () => {
//     const token = storage.get(keys.token);
//     if (!token) {
//       return Actions.base_exit_landing();
//     }
//     AUTH_TOKEN_SAGAS({token})
//     // Actions.auth_token_request({ token });
//   }

//   setWidth = () => {
//     if (typeof window === 'undefined') return;
//     console.log('resive, setWidth');
//     // BaseActions.setWidth(window.outerWidth);
//   };

//   onResize = throttle(() => {
//     this.setWidth();
//   }, 250);
  

//   componentDidMount() {
//     const { initialize } = this;
//     initialize();
//     window.addEventListener('resize', this.onResize);
//   }
  
//   render() {
//     console.log(this,'core');
//     return(<FullScreenLoading visible={this.props.landing}/>)
//   }
// }


function Core(props){
  const {landing} = props;
  // const {
  //   base:baseReducer
  // } = useSelector(state=>state)

  const initialize = async () => {
    const token = storage.get(keys.token);
    const auto = storage.get(keys.autoLogin);
    // const token = false;
    console.log("COREORERERER@@@", auto);
    console.log("COREORERERER@@@", token);
    
    if (!token) {
      console.log("COREORERERER@@@", token);
      return Actions.base_exit_landing();
    }

      AUTH_TOKEN_SAGAS();

    // if(auto){
    //   console.log("SDFSDFSD@@@");
    //   AUTO_LOGIN_SAGAS();
    //   return Actions.base_exit_landing();
    // }else{
    //   console.log("SDFSDFSD!!!!!!!!!!!");
    //   AUTH_TOKEN_SAGAS();
    //   return Actions.base_exit_landing();
    // }
    // Actions.auth_token_request({ token });
  }

  const setWidth = () => {
    if (typeof window === 'undefined') return;
    console.log('resive, setWidth');
    // BaseActions.setWidth(window.outerWidth);
  };

  const onResize = throttle(() => {
    setWidth();
  }, 250);

  useEffect(()=>{
    initialize();
  },[]);
  useEffect(()=>{
    console.log('onResize');
    window.addEventListener('resize', onResize);
    return ()=>{
      window.removeEventListener('resize', onResize);
    }
  },[onResize]);

  return(
    <FullScreenLoading visible={landing}/>
  )
}

export default connect(
  ({ base }) => ({
    landing: base.landing,
  })
)(withRouter(Core));



