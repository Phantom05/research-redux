import React, { Component } from 'react';
import axios from 'axios';

const withRequest = (config) =>(WrappedComponent) =>{
  return class extends Component{
    state={
      data:null
    }
    async initialize(){
      try{
        const {data} = await axios(config);
        this.setState({
          data:data
        })
      }catch(e){
        console.log(e);
      }
    }
    componentDidMount(){
      this.initialize()
    }
    render(){
      const {data} = this.state;
      return(
        <WrappedComponent {...this.props} data={data} />
      )
    }
  }
}

export default withRequest;