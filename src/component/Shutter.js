import React, {Component} from 'react'
import ShutterLeft from './ShutterLeft'
import ShutterRight from './ShutterRight'

class Shutter extends Component {
	render() {
	  return (
	  	this.props.mouseEnter ? <ShutterRight data={this.props.data}/>
	  	 : <ShutterLeft data={this.props.data} onMouseEnter={this.props.onMouseEnter}/>
	  )
	}
}

export default Shutter