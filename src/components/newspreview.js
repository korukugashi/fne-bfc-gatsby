import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import moment from "moment"
import "moment/locale/fr"

import ImgNetlify from "./imgnetlify"

export const NewsPreviewTemplate = news => {
  const date = moment(news.date)
  return (
    <div className="column is-half-tablet is-one-third-desktop">
      <Link to="/">
        <article>
          <div>
            <h1 className="mt-0">{news.title}</h1>
            <div className="tags mt-2 mb-0">
              <time dateTime={date.format("YYYY-MM-DD")} className="mr-2">
                {date.format("DD MMMM YYYY")}
              </time>
              {news.tags.map(tag => (<span>• {tag}</span>))}
            </div>
            {news.featuredimage ? (
              <ImgNetlify image={news.featuredimage} alt={news.title} className="mt-1" style={{maxHeight: 150, overflow: 'hidden'}} />
            ) : null}
            <p className="is-size-7 mt-2">
              {news.description}
            </p>
          </div>
        </article>
      </Link>
    </div>
  )
}

const NewsPreview = () => {
  const data = useStaticQuery(graphql`
    query NewsPreviewQuery {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { templateKey: { eq: "action-post" } } }
      ) {
        edges {
          node {
            frontmatter {
              title
              date
              description
              featuredimage {
                childImageSharp {
                  fluid(maxWidth: 300, quality: 80) {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                  }
                }
              }
              tags
            }
          }
        }
      }
    }
  `)
  moment.locale("fr")
  return (
    <div className="columns home-articles is-multiline mt-2">
      {data.allMarkdownRemark.edges.map(news => (
        <NewsPreviewTemplate {...news.node.frontmatter} />
      ))}
    </div>
  )
}

export default NewsPreview
