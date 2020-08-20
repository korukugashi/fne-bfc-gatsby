import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundSlider from "gatsby-image-background-slider"

import Filters from "../components/filters"
import Layout from "../components/layout"
import SEO from "../components/seo"
import NewsPreview from "../components/newspreview"
import AgendaPreview from "../components/agendapreview"
import ProgPrev from "../components/progprev"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      backgrounds: allFile(
        filter: { sourceInstanceName: { eq: "backgrounds" } }
      ) {
        nodes {
          relativePath
          childImageSharp {
            fluid(maxWidth: 4000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      debatImg: file(relativePath: { eq: "debat.png" }) {
        childImageSharp {
          fluid(maxWidth: 125) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      haieImg: file(relativePath: { eq: "haie.png" }) {
        childImageSharp {
          fluid(maxWidth: 125) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO
        title="Accueil"
        keywords={[`nature`, `environnement`, `bourgogne`, `franche-comte`]}
      />
      <div>
        <BackgroundSlider query={data} callbacks={{}} />
        <p
          className="banner-catch"
          style={{ marginTop: "20rem", marginBottom: "2rem", marginLeft: '2rem' }}
        >
          <Link to="/qui sommes-nous/">
            <span>Partout où la nature a besoin de nous</span>
          </Link>
        </p>
      </div>
      

      <section
        className="section"
        style={{ paddingTop: "2rem", background: "#e7e7f2" }}
      >
        <div className="container-fluid">
          <h2 className="is-size-4 mt-0 mb-5">Thématiques</h2>
          <Filters />
          <div className="columns">
            <div className="column is-three-quarters-tablet">
              <NewsPreview />
              <div className="has-text-centered">
                <a href="/" className="button is-primary">
                  AFFICHER PLUS
                </a>
              </div>
            </div>
            <div className="column">
              <aside>
                <article
                  className="box agenda"
                  style={{ marginTop: 23, background: "#c61512" }}
                >
                  <h1
                    className="title saira has-text-centered"
                    style={{
                      fontSize: "2rem",
                      textAlign: "center",
                      color: "#fff",
                    }}
                  >
                    AGENDA
                  </h1>
                  <div>
                    <AgendaPreview />
                    <div className="has-text-right is-size-7 columns event">
                      <Link to="/agenda/" className="column">Voir plus &gt;</Link>
                    </div>
                  </div>
                  
                </article>
                <ProgPrev />
              </aside>
            </div>
          </div>
        </div>
      </section>
      <script type="application/ld+json">
        {JSON.stringify([
          {
            "@context": "https://schema.org",
            "@id": "https://www.fne-bfc.fr/#fne-bfc",
            "@type": "NGO",
            name: "FNE BFC",
            legalName: "France Nature Environnement Bourgogne Franche-Comté",
            url: "https://www.fne-bfc.fr/",
            logo: "https://www.fne-bfc.fr/logofnefc.png",
            description:
              "Fédération régionale des associations de protection de la Nature et de l'environnement en Bourgogne Franche-Comté",
            address: [
              {
                "@type": "PostalAddress",
                addressLocality: "Besançon",
                postalCode: "25000",
                streetAddress:
                  "Maison de l’environnement de Franche-Comté - 7 rue Voirin",
                telephone: "+33381613644",
              },
            ],
          },
        ])}
      </script>
    </Layout>
  )
}

export default IndexPage
