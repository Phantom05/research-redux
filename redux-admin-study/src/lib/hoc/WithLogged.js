import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';


// const withLogged = (url = '/login') => (WrappedComponent) =>{
//   return class extends Component{
//     render() {
//       const {logged} = this.props;
//       return (
//         <>
//           {!logged && <Redirect to={url} />}
//           <WrappedComponent {...this.props} />
//         </>
//       )
//     }
//   }
// }

class WithLogged extends Component{
    
  render() {
    const {url, logged, isLogged,isNotLogged} = this.props;
    console.log(logged);
    return (
      <>
        {isLogged && logged &&  <Redirect to={url? url : '/'} />}
        {isNotLogged && !logged && <Redirect to={url? url : '/login'} />}
        {/* {!logged 
        ? <Redirect to={url? url : '/login'} />
        : <Redirect to={url? url : '/'} />
        } */}
        {/* <WrappedComponent {...this.props} data={data}/> */}
      </>
    )
  }
}
export default connect(
  ({auth})=>({
    logged:auth.logged
  })
)(WithLogged);