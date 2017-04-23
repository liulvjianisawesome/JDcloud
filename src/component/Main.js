import React, {Component} from 'react'
import './Main.css'

export default class Main extends Component {
  render() {
  	return (
  	  <div className="Main" style={this.props.style}>
  	    <div className="main-head">
  	      <h3>{this.props.title}</h3>
  	      <div className="line"></div>
  	    </div>
  	    <div className="main-content">
  	      {this.props.children}
  	    </div>
  	  </div>
  	)
  }
}