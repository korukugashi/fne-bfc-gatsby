import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { MdSchedule, MdRoom } from "react-icons/md"
import moment from "moment"
import "moment/locale/fr"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

export const AgendaPreviewTemplate = event => {
  const date = moment(event.frontmatter.date)
  return (
    <div className="columns event" style={{ borderBottom: "1px solid #bbb" }}>
      <div className="column is-2 day pt-0 pb-0">
        <time dateTime={date.format("YYYY-MM-DD")} className="is-size-2 saira">
          {date.format("DD")}{" "}
          <small className="is-size-6">{date.format("MMMM YYYY")}</small>
        </time>
      </div>
      <div className="column is-size-7 pt-0">
        <h2 className="is-size-6 mt-3 mb-2">{event.frontmatter.title}</h2>
        <time dateTime={date.format("HH:mm")}>
          <MdSchedule /> {event.frontmatter.duration}
        </time>
        <address>
          <MdRoom /> {event.frontmatter.location}
        </address>
      </div>
      <div
        className="column is-size-7 pt-0 pb-0"
        dangerouslySetInnerHTML={{
          __html: event.html,
        }}
      />
    </div>
  )
}

const Agenda = () => {
  const data = useStaticQuery(graphql`
    query AgendaQuery {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { templateKey: { eq: "agenda" } } }
        limit: 50
      ) {
        edges {
          node {
            html
            frontmatter {
              title
              date
              location
              duration
            }
          }
        }
      }
    }
  `)
  moment.locale("fr")
  return (
    <Layout>
      <SEO
        title="Agenda"
        description="Retrouvez l'agenda du réseau FNE BFC : sorties natures, chantiers participatifs, conférences, ..."
      />
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1>Agenda</h1>
          </div>
        </div>
      </section>
      <section className="section pt-5">
        {data.allMarkdownRemark.edges.map(event => (
          <AgendaPreviewTemplate {...event.node} />
        ))}
      </section>
    </Layout>
  )
}

export default Agenda
