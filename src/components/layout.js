/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "./header"
import './all.sass'
import './dontpurge.sass'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <footer>
        <div className="content has-text-centered">
          © FNE BFC {new Date().getFullYear()}
          { ' - ' }
          <Link to="/mentions-legales/">Mentions légales</Link>
          { ' - ' }
          <Link to="/contact/">Contactez-nous</Link>
        </div>
        <div className="has-text-centered">
          Rejoignez-nous sur{ ' ' }
          <a href="https://www.youtube.com/channel/UCtAtLPHHo-JXdwOgCtU3dcw" target="_blank">Youtube</a>
          { ' - ' }
          <a href="https://www.linkedin.com/company/fne-bfc" target="_blank">Linkedin</a>
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
