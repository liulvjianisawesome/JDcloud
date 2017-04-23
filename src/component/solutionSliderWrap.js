import React, {Component} from 'react'
import './solutionSliderWrap.css'


export default class solutionSliderWrap extends Component{
  constructor() {
  	super()
  	this.state = {
  	  left: 0
  	}
  }

  render() {
  	return(
  	  <div className="solutionSliderWrap" style={this.state}>
  	    {this.props.children}
  	    <div className="btn btn-left" onClick={()=>this.turnLeft()}>left</div>
  	    <div className="btn btn-right" onClick={()=>this.turnRight()}>right</div>
  	  </div>
  	)
  }

  turnLeft() {
  	this.setState({
  	  left: '-1200px'
  	})
  }

  turnRight() {
  	this.setState({
  	  left: 0
  	})
  }
}