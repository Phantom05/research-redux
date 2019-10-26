import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from 'components/base/Header';
import { storage,keys } from 'lib/library';

class HeaderContainer extends Component {

  handleLogout= () =>{
    console.log('handleLogout');
    storage.remove(`${keys}logged`);
  }
  render() {
    console.log('rener');
    return (
      <div>
       
        <Header 
          handleLogout={this.handleLogout}
        />
      </div>
    );
  }
}

export default connect(
  (state)=>({

  })
)(HeaderContainer)