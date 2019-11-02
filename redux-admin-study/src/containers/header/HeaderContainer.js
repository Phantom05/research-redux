import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Header from 'components/base/Header';
import { Actions } from 'store/actionCreators';

class HeaderContainer extends PureComponent {
  initialize = () =>{
 
  }
  componentDidMount(){
    this.initialize()
  }
  handleLogout = () => {
    Actions.auth_logout_request();
  }
  render() {
    const { isAutheticated,landing } = this.props;
    if (landing) return null;
    return (
      <div>
        <Header
          isAutheticated={isAutheticated}
          handleLogout={this.handleLogout}
        />
      </div>
    );
  }
}

export default connect(
  ({ auth ,base}) => ({
    isAutheticated: auth.autheticate.isAutheticated,
    landing:base.landing
  })
)(HeaderContainer)