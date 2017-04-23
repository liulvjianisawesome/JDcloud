import React from 'react'
import './FootItem.css'

export default function(props){
  let llj = ['咨询热线 4006151212（7*24）', '渠道加盟 4006151212转6', '京东云微信', '京东云微博']
  return(
    <div className="FootItem">
      <div className="title">{props.data.title}</div>
      {
      	props.data.items.map((item, index)=>{
      	  return (
      	    <div className="item" key={index}>{item}</div>
      	  )
      	})
      }
    </div>
  )
}