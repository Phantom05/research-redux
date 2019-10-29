import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Header from 'components/base/Header';
import { Actions } from 'store/actionCreators';

class HeaderContainer extends PureComponent {
  initialize = () =>{
 
  }
  componentDidMount(){
    const { isAutheticated,landing } = this.props;
    this.initialize()
  }
  handleLogout = () => {
    console.log('handleLogout');
    Actions.auth_logout_request();
  }
  render() {
    console.log('** Header Components Render');
    const { isAutheticated,landing } = this.props;
    console.log(landing,'Header landing');
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
    isAutheticated: auth.isAutheticated,
    landing:base.landing
  })
)(HeaderContainer)