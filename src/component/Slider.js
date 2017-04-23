import React, {Component} from 'react'
import './Slider.css'

export default class Slider extends Component {
  constructor() {
    super()
    this.state = {
      curIndex: 0
    }
  }
  render() {
  	return (
  	  <div className="Slider" style={this.props.data[this.state.curIndex].style}>
  	    <a href={this.props.data[this.state.curIndex].link} target="_blank">
  	      <div className="center-content">
  	        <div className='left-area' key={this.state.curIndex}>
  	          <h1>{this.props.data[this.state.curIndex].leftArea.h}</h1>
  	          <p>{this.props.data[this.state.curIndex].leftArea.p}</p>
  	          {this.props.data[this.state.curIndex].leftArea.span ? (<span>立即购买</span>) : (<p></p>)}
  	        </div>
  	        <div className='right-area'>{this.props.data[this.state.curIndex].rightArea}</div>
  	      </div>
  	    </a>
  	    <div className="slider-trigger">
  	      {[0,1,2,3,4].map(val=>{
  	      	return <a key={val} onMouseEnter={() => this.changeState(val)}></a>
  	      })}
  	    </div>
  	  </div>
  	)
  }

  changeState(val) {
  	this.setState({
  	  curIndex: val
  	})
  }
}