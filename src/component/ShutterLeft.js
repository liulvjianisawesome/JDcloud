import React, {Component} from 'react'
import './ShutterLeft.css'

export default class ShutterLeft extends Component {
  render() {
    return (
      <div className="shutter-left" onMouseEnter={this.props.onMouseEnter}>
		<h4>{this.props.data.theme}</h4>
		<p>{this.props.data.advantage}</p>
		<div className='icon'><i className={this.props.data.icon}></i></div>
		<ul>
		  {
		  	this.props.data.items.map((val, index) => {
		  	  return (
		  	  	<li key={index}>{val.item}</li>
		  	  )
		  	})
		  }
		</ul>
	  </div>
    )
  }
}