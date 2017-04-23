import React, {Component} from 'react'
import './ShutterRight.css'

export default class ShutterRight extends Component {
  render() {
    return (
      <div className="shutter-right">
        <div className="left">
          <div className="icon"><i className={this.props.data.icon}></i></div>
          <h1>{this.props.data.theme}</h1>
          <p>{this.props.data.advantage}</p>
        </div>
        <div className="right">
          <div className="items">
          {
            this.props.data.items.map((val, index) => {
              return (
                <dl key={index}>
                  <dt>{val.item}</dt>
                  <dd>{val.description}</dd>
                  <dd className="btn"><a>立即购买</a></dd>
                </dl>
              )
            })
          }
          </div>
        </div>
	  </div>
    )
  }
}