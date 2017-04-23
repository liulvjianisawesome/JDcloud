import React, {Component} from 'react'
import './pl.css'


export default class pl extends Component{
  render() {
  	return(
  	  <div className="pl">
        <div className="pl-hd" style={this.props.data.style}>
          <div className="pl-img-bg">
            <img src={this.props.data.bg}/>
          </div>
          <div className="pl-img-rotate">
            <img src={this.props.data.rotate}/>
          </div>
          <div className="pl-img-logo">
            <img src={this.props.data.logo}/>
          </div>
          {
          	this.props.data.icons.map((imgUrl, index)=>{
          	  return (
          	  	<div className={"pl-icon" + " " + "pl-icon" + index} key={index}>
          	  	  <img src={imgUrl}/>
          	  	</div>
          	  )
          	})
          }
        </div>
        <div className="pl-bd">
          <h4>{this.props.data.title}</h4>
          <p>{this.props.data.p}</p>
        </div>
      </div>
  	)
  }
}