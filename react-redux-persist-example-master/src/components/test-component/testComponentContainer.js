import { connect } from 'react-redux'
import { changeStateProps } from '../../actions'
import { decrement, increment ,logout} from '../../actions/counter'
import TestComponent from './testComponent'

const mapStateToProps = (state, ownProps) => {
  return {
    someUserName: state.main.name,
    isUserEqual: state.main.name === ownProps.testName,
    count: state.counter.count,
    countAll:state.counter,
    ...ownProps
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeStateProps: (prop, value) => {
      dispatch(changeStateProps(prop, value))
    },
    incrementCount: () => {
      dispatch(increment())
    },
    decrementCount: () => {
      dispatch(decrement())
    },
    logout:()=>{
      dispatch(logout())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(TestComponent)
