import React from "react"

const ImgNetlify = props => (
  <div style={{display: 'inherit', ...props.style}} className={props.className}>
    <img src={props.image} alt={props.alt} style={props.imgStyle} />
  </div>
)

export default ImgNetlify
