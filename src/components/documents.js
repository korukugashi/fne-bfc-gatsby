import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import moment from "moment"
import "moment/locale/fr"

export const DocumentsPreviewTemplate = doc => {
  const date = moment(doc.frontmatter.date)
  const [isFolded, setFold] = useState(true)
  return (
    <div className="mb-5">
      <article className="message">
        <div
          className="message-header"
          style={{ cursor: "pointer" }}
          onClick={() => setFold(!isFolded)}
          onKeyDown={() => setFold(!isFolded)}
          tabIndex={0}
          role="button"
        >
          <h3>{doc.frontmatter.title}</h3>
          <div>{isFolded ? "+" : "-"}</div>
        </div>
        {isFolded ? null : (
          <div className="message-body">
            <div className="columns is-vcentered">
              <div className="column is-2">
                <a href={"/img/" + doc.frontmatter.file.relativePath}>
                  <Img
                    fluid={doc.frontmatter.photo.childImageSharp.fluid}
                    alt={doc.frontmatter.title}
                    style={{ maxWidth: 180 }}
                  />
                </a>
              </div>
              <div className="column">
                <div
                  dangerouslySetInnerHTML={{
                    __html: doc.html,
                  }}
                />
                <p>{date.format("DD/MM/YYYY")}</p>
                <a href={"/img/" + doc.frontmatter.file.relativePath}>
                  Télécharger
                </a>
              </div>
            </div>
          </div>
        )}
      </article>
    </div>
  )
}

const Documents = ({ category }) => {
  moment.locale("fr")
  const data = useStaticQuery(graphql`
    query DocumentsQuery {
      allMarkdownRemark(
        sort: { fields: [frontmatter___category, frontmatter___title] }
        filter: { frontmatter: { templateKey: { eq: "documents" } } }
        limit: 50
      ) {
        edges {
          node {
            html
            frontmatter {
              title
              category
              date
              file {
                relativePath
              }
              photo {
                childImageSharp {
                  fluid(maxWidth: 180, quality: 90) {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
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
    <>
      {data.allMarkdownRemark.edges
        .filter(doc => doc.node.frontmatter.category === category)
        .map(doc => (
          <DocumentsPreviewTemplate {...doc.node} />
        ))}
    </>
  )
}

export default Documents
