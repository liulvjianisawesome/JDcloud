import React, {Component} from 'react'
import './Solution.css'


export default class Solution extends Component{
  render() {
  	let style = {background: this.props.data.secondbg}
  	return (
  	  <div className="Solution">
  	  <img src={this.props.data.imgUrl}/>
  	  <div className="first">
        <div className="icon"><i className={this.props.data.icon}></i></div>
  	    <h5>{this.props.data.title}</h5>
  	  </div>
  	  <div className="second">
  	    <div className="bg" style={style}></div>
  	    <div className="ct">
  	      <h5>{this.props.data.title}</h5>
  	      <p>{this.props.data.p}</p>
  	      <a target="_blank" href={this.props.data.link}>查看详情</a>
  	    </div>
  	  </div>
  	  <div className="line" style={style}></div>
  	  </div>
  	)
  }
}