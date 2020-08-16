import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"

export const MenuActionsTemplate = prog => {
  return (
    <Link className="navbar-item" to="/nos-actions/">
      {prog.title}
    </Link>
  )
}

const MenuActions = () => {
  const data = useStaticQuery(graphql`
    query MenuActionsQuery {
      allMarkdownRemark(
        sort: { fields: [frontmatter___title] }
        filter: { frontmatter: { templateKey: { eq: "programmes" } } }
      ) {
        edges {
          node {
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)

  return (
    <>
      {data.allMarkdownRemark.edges.map(prog => (
        <MenuActionsTemplate {...prog.node.frontmatter} />
      ))}
    </>
  )
}

export default MenuActions
