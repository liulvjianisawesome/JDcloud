import {connect} from 'react-redux'
import Shutter from '../Shutter'

function mapStateToProps(state, ownProps) {
  return {
  	mouseEnter: state.shuttersState[ownProps.id]
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
  	onMouseEnter: (e) => dispatch({
  	  type: 'change',
  	  payload: ownProps.id
  	})
  }
}

const Shutter1 = connect(
  mapStateToProps,
  mapDispatchToProps
)(Shutter)

export default Shutter1