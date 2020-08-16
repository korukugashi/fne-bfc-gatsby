import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import moment from "moment"
import "moment/locale/fr"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

export const DocumentsPreviewTemplate = doc => {
  const date = moment(doc.date)
  return (
    <div>
      <a href={'/img/'+doc.file.relativePath}>
        {doc.title} ({date.format("DD/MM/YYYY")})
      </a>
    </div>
  )
}

const Documents = () => {
  const data = useStaticQuery(graphql`
    query DocumentsQuery {
      allMarkdownRemark(
        sort: { fields: [frontmatter___title] }
        filter: { frontmatter: { templateKey: { eq: "documents" } } }
        limit: 50
      ) {
        edges {
          node {
            frontmatter {
              title
              date
              file {
                relativePath
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO
        title="Documentation"
        description="Retrouvez les documents et publications FNE BFC : fiches buissonières, journal empreinte, "
      />
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1>Documents</h1>
          </div>
        </div>
      </section>
      <section className="section pt-5">
        {data.allMarkdownRemark.edges.map(event => (
          <DocumentsPreviewTemplate {...event.node.frontmatter} />
        ))}
      </section>
    </Layout>
  )
}

export default Documents
