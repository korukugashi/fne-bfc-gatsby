import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import Img from "gatsby-image"

const FilterTemplate = ({ tag, current }) => (
  <li className="column is-3 mt-2 mb-2">
    <Link
      className={`columns is-vcentered ${current ? "current-tag" : ""}`}
      to={`${tag.node.fields.slug}#thematiques`}
    >
      <Img
        fixed={tag.node.frontmatter.image.childImageSharp.fixed}
        alt={tag.node.frontmatter.label}
        className="mr-3"
        style={{
          width: 40,
          height: 40,
          border: "1px solid #000",
          background: "#fff",
          borderRadius: 10,
        }}
        imgStyle={{ margin: "3px 4px", width: 30, height: 30 }}
      />{" "}
      {tag.node.frontmatter.label}
    </Link>
  </li>
)

const Filters = ({ slug }) => {
  const data = useStaticQuery(graphql`
    query FiltersQuery {
      allMarkdownRemark(
        sort: { fields: [frontmatter___label] }
        filter: { frontmatter: { templateKey: { eq: "actions-tags" } } }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              label
              image {
                childImageSharp {
                  fixed(width: 30, quality: 80) {
                    ...GatsbyImageSharpFixed_withWebp_noBase64
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  return (
    <section className="section pt-0 pb-3" id="actions">
      <div className="container-fluid">
        <ul className="is-size-6 columns is-multiline is-vcentered filter-action pl-0">
          {data.allMarkdownRemark.edges &&
            data.allMarkdownRemark.edges.map(tag => (
              <FilterTemplate
                tag={tag}
                current={decodeURIComponent(slug) === tag.node.fields.slug}
              />
            ))}
        </ul>
      </div>
    </section>
  )
}

export default Filters
