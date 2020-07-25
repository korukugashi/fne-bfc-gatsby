import React from "react"
import { useStaticQuery, Link } from "gatsby"
import BackgroundSlider from "gatsby-image-background-slider"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Accueil" keywords={[`gatsby`, `application`, `react`]} />
    <div>
      <BackgroundSlider
        query={useStaticQuery(graphql`
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
          }
        `)}
        callbacks={{}}
      />
      <p className="has-text-centered banner-catch" style={{ marginTop: 0 }}>
        <Link to="/qui sommes-nous/">
          <span>Fédération régionale des associations</span>
          <br />
          <span>de protection de la Nature et de l'environnement</span>
          <br />
          <span>en Bourgogne Franche-Comté</span>
        </Link>
      </p>
    </div>

    <section
      className="section"
      style={{ paddingTop: "2rem", background: "#e7e7f2" }}
    >
      <div className="container-fluid">
        <div className="columns">
          <div className="column is-three-quarters">
            <div className="columns home-articles is-multiline">
              <div className="column is-3">
                <article>
                  <Link to="/">
                    <img
                      src="https://cdn.pixabay.com/photo/2018/04/03/08/37/mushroom-3286258_960_720.jpg"
                      alt="loup"
                    />
                    <h1>La Champignonnière Terrifortaine</h1>
                  </Link>
                  <div>
                    <date>28 févr. 2020</date>
                  </div>
                  <div>
                    « Approvisionnement en matières premières 100 % durable », «
                    réduction des émissions de carbone », « lutte contre le...{" "}
                  </div>
                </article>
              </div>
              <div className="column is-3">
                <article>
                  <Link to="/">
                    <img
                      src="https://cdn.pixabay.com/photo/2013/07/19/00/18/splashing-165192_960_720.jpg"
                      alt="loup"
                    />
                    <h1>Débat public : l'eau potable, une affaire de santé</h1>
                  </Link>
                  <div>
                    <date>28 févr. 2020</date>
                  </div>
                  <div>
                    « Approvisionnement en matières premières 100 % durable », «
                    réduction des émissions de carbone », « lutte contre le...{" "}
                  </div>
                </article>
              </div>
              <div className="column is-3">
                <article>
                  <Link to="/">
                    <img
                      src="https://cdn.pixabay.com/photo/2015/10/12/22/43/fox-985292_960_720.jpg"
                      alt="loup"
                    />
                    <h1>Le dispositif CARELI : CAmpagnol, REnard et LIèvre</h1>
                  </Link>
                  <div>
                    <date>28 févr. 2020</date>
                  </div>
                  <div>
                    « Approvisionnement en matières premières 100 % durable », «
                    réduction des émissions de carbone », « lutte contre le...{" "}
                  </div>
                </article>
              </div>
              <div className="column is-3">
                <article>
                  <Link to="/">
                    <img
                      src="https://cdn.pixabay.com/photo/2019/09/21/11/10/chicken-4493649_960_720.jpg"
                      alt="loup"
                    />
                    <h1>
                      Opposition au projet de poulailler de 29000 poules à
                      Rigney
                    </h1>
                  </Link>
                  <div>
                    <date>28 févr. 2020</date>
                  </div>
                  <div>
                    « Approvisionnement en matières premières 100 % durable », «
                    réduction des émissions de carbone », « lutte contre le...{" "}
                  </div>
                </article>
              </div>
              <div className="column is-3">
                <article>
                  <Link to="/">
                    <img
                      src="https://cdn.pixabay.com/photo/2016/02/19/11/23/bicycle-1209682_960_720.jpg"
                      alt="loup"
                    />
                    <h1>Un plan vélo pour Besançon</h1>
                  </Link>
                  <div>
                    <date>28 févr. 2020</date>
                  </div>
                  <div>
                    « Approvisionnement en matières premières 100 % durable », «
                    réduction des émissions de carbone », « lutte contre le...{" "}
                  </div>
                </article>
              </div>
              <div className="column is-3">
                <article>
                  <Link to="/">
                    <img
                      src="https://cdn.pixabay.com/photo/2019/09/21/11/10/chicken-4493649_960_720.jpg"
                      alt="loup"
                    />
                    <h1>
                      Opposition au projet de poulailler de 29000 poules à
                      Rigney
                    </h1>
                  </Link>
                  <div>
                    <date>28 févr. 2020</date>
                  </div>
                  <div>
                    « Approvisionnement en matières premières 100 % durable », «
                    réduction des émissions de carbone », « lutte contre le...{" "}
                  </div>
                </article>
              </div>
              <div className="column is-3">
                <article>
                  <Link to="/">
                    <img
                      src="https://cdn.pixabay.com/photo/2019/09/21/11/10/chicken-4493649_960_720.jpg"
                      alt="loup"
                    />
                    <h1>
                      Opposition au projet de poulailler de 29000 poules à
                      Rigney
                    </h1>
                  </Link>
                  <div>
                    <date>28 févr. 2020</date>
                  </div>
                  <div>
                    « Approvisionnement en matières premières 100 % durable », «
                    réduction des émissions de carbone », « lutte contre le...{" "}
                  </div>
                </article>
              </div>
              <div className="column is-3">
                <article>
                  <Link to="/">
                    <img
                      src="https://cdn.pixabay.com/photo/2019/09/21/11/10/chicken-4493649_960_720.jpg"
                      alt="loup"
                    />
                    <h1>
                      Opposition au projet de poulailler de 29000 poules à
                      Rigney
                    </h1>
                  </Link>
                  <div>
                    <date>28 févr. 2020</date>
                  </div>
                  <div>
                    « Approvisionnement en matières premières 100 % durable », «
                    réduction des émissions de carbone », « lutte contre le...{" "}
                  </div>
                </article>
              </div>
            </div>
            <div className="has-text-centered">
              <a href="/" className="button is-primary">
                AFFICHER PLUS
              </a>
            </div>
          </div>
          <div className="column">
            <aside>
              <article
                className="box has-text-centered"
                style={{ background: "#c61512" }}
              >
                <h1
                  className="title saira"
                  style={{
                    fontSize: "2rem",
                    textAlign: "center",
                    color: "#fff",
                  }}
                >
                  AGENDA
                </h1>
                <div
                  style={{
                    margin: "2rem 0",
                    lineHeight: "4rem",
                    padding: "1.5rem 0 1rem",
                    borderTop: "1px solid #fff",
                    borderBottom: "1px solid #fff",
                  }}
                >
                  <div
                    className="saira"
                    style={{ fontSize: "5rem", color: "#fff" }}
                  >
                    21
                  </div>
                  <div
                    className="saira"
                    style={{ fontSize: "3rem", color: "#fff" }}
                  >
                    MARS
                  </div>
                </div>
                <div style={{ color: "#fff" }}>
                  Journée internationale des forêts : une 7e saison pour
                  célébrer ces milieux d’exception{" "}
                </div>
                <div style={{ marginTop: "2rem" }}>
                  <a href="/" className="button">
                    TOUTES LES DATES
                  </a>
                </div>
              </article>
              <article className="box">
                <h1 className="title" style={{ marginBottom: "0.5rem" }}>
                  Débat public
                </h1>
                <div
                  className="columns is-2 is-variable"
                  style={{ marginBottom: 0 }}
                >
                  <div className="column is-4">
                    <img
                      src="https://pixabay.com/get/53e3dc464f54ab14f1dc8460da2932771039d7e2555577_640.jpg"
                      alt="Meeting"
                    />
                  </div>
                  <div className="column is-size-7">
                    Favoriser le dialogue environnemental sur notre territoire
                  </div>
                </div>
                <div className="has-text-right saira">
                  <Link to="/">Découvrir &gt; </Link>
                </div>
              </article>
              <article className="box">
                <h1 className="title" style={{ marginBottom: "0.5rem" }}>
                  Biodiversit'haies
                </h1>
                <div
                  className="columns is-2 is-variable"
                  style={{ marginBottom: 0 }}
                >
                  <div className="column is-4">
                    <img
                      src="https://pixabay.com/get/52e0d74b4c52a514f1dc8460da2932771039d7ed515079_640.jpg"
                      alt="Rural"
                    />
                  </div>
                  <div className="column is-size-7">
                    Favoriser la biodiversité à l’échelle d’un territoire
                  </div>
                </div>
                <div className="has-text-right saira">
                  <Link to="/">Découvrir &gt; </Link>
                </div>
              </article>
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
          logo: "https://www.fne-bfc.fr/logo-fne-bfc.svg",
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
          sameAs: [
            "https://www.facebook.com/France-Nature-Environnement-du-Doubs-1521967594737213/",
            "https://fr-fr.facebook.com/fne90/",
          ],
        },
      ])}
    </script>
  </Layout>
)

export default IndexPage
