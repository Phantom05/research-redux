import { connect } from 'react-redux'
import SecondComponent from './secondComponent'

const mapStateToProps = (state, ownProps) => {
  return {
    someUserName: state.main.name
  }
}

export default connect(
  mapStateToProps)(SecondComponent)
