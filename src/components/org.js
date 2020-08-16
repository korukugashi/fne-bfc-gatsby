import React from "react"
import Img from "gatsby-image"

const OrgContentTemplate = org => (
  <>
    <div>{org.node.frontmatter.label}</div>
    {org.node.frontmatter.image ? (
      <Img
        fixed={org.node.frontmatter.image.childImageSharp.fixed}
        alt={org.node.frontmatter.label}
        className="mr-3"
        style={{
          width: 150,
          height: 150,
          marginTop: "0.5rem",
        }}
        imgStyle={{
          objectFit: "contain",
          objectPosition: "50% 50%",
        }}
      />
    ) : null}
  </>
)

const OrgTemplate = org => (
  <li style={{ padding: "1rem 2rem" }}>
    {org.node.frontmatter.url ? (
      <a href={org.node.frontmatter.url}>
        <OrgContentTemplate {...org} />
      </a>
    ) : (
      <OrgContentTemplate {...org} />
    )}
  </li>
)

export default OrgTemplate
