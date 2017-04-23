import React, {Component} from 'react'
import './Service.css'


export default class Service extends Component{
  render() {
  	return (
  	  <div className="Service">
  	    <div className="img">
  	      <img src={this.props.data.imgUrl}/>
  	    </div>
  	    <div className="ct">
  	      <dl>
  	        <dt>
  	        <a>{this.props.data.title}</a>
  	        </dt>
  	        <dd>
  	          {
  	          	this.props.data.items.map((item, index)=>{
  	          	  return (
  	          	  	<a key={index}>{item}</a>
  	          	  )
  	          	})
  	          }
  	        </dd>
  	      </dl>
  	    </div>
  	  </div>
  	)
  }
}