import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Header from 'components/base/Header';
import { Actions } from 'store/actionCreators';
import {withRouter} from 'react-router-dom';

class HeaderContainer extends PureComponent {
  state={
    category:'home'
  }
  initialize = () =>{
 
  }
  componentDidMount(){
    this.initialize()
  }
  handleLogout = () => {
    Actions.auth_logout_request();
  }
  handleCategoryMenu = (category) =>{
    this.setState({
      category:category
    })
  }
  componentWillMount(){
    const {match} = this.props;
    let category = match.path.substr(1);
    if(category.trim() === '')  category = 'home'; 
    this.setState({
      category:category
    })
  }
  render() {
    const {category} = this.state;
    const { isAutheticated,landing } = this.props;
    const isHome = category === 'home';
    if (landing) return null;
    return (
      <div>
        <Header
          isHome={isHome}
          onClick={this.handleCategoryMenu}
          category={category}
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
    landing:base.landing,
    
  })
)(withRouter(HeaderContainer))