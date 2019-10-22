import React, { Component } from 'react';
import Home from 'components/Home';
import {HomeActions} from 'store/actionCreators';
import { connect } from 'react-redux';

class HomeContainer extends Component {
  handleGetHome = () =>{
    console.log('handleGetHome');
    HomeActions.saga_get_home('home')
  }
  render() {
    const {data} = this.props;
    return (
      <div>
        <Home 
          data={data}
          onClick={this.handleGetHome}
        />
      </div>
    );
  }
}

export default connect(
  ({home})=>({
    data:home.data
  })
)(HomeContainer);