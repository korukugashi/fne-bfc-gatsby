import React from "react"
import Img from "gatsby-image"

const ImgNetlify = props => (
  <>
    {props.image.childImageSharp ? (
      <Img fluid={props.image.childImageSharp.fluid} fixed={props.image.childImageSharp.fixed} {...props} />
    ) : (
      <div style={{display: 'inherit', ...props.style}} className={props.className}>
        <img src={props.image} alt={props.alt} style={props.imgStyle} />
      </div>
    )}
  </>
)

export default ImgNetlify
