import React from "react"
import { useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import BackgroundSlider from "gatsby-image-background-slider"
import { MdSchedule, MdRoom } from 'react-icons/md';

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      backgrounds: allFile(
        filter: { sourceInstanceName: { eq: "backgrounds" } }
      ) {
        nodes {
          relativePath
          childImageSharp {
            fluid(maxWidth: 2000, quality: 100) {
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
      <SEO title="Accueil" keywords={[`nature`, `environnement`, `bourgogne`, `franche-comte`]} />
      <div>
        <BackgroundSlider query={data} callbacks={{}} />
        <p
          className="has-text-centered banner-catch"
          style={{ marginTop: "3rem", marginBottom: "4rem" }}
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
          <div className="columns">
            <div className="column is-three-quarters-tablet">
              <div className="columns home-articles is-multiline">
                <div className="column is-half-tablet is-one-third-desktop">
                  <article>
                    <Link to="/">
                      <h1>FNE BFC recrute un.e chargé.e de mission biodiversité</h1>
                    </Link>
                    <div>
                      <date>29 juin 2020</date>
                    </div>
                    <div className="is-size-7">
                      Vous disposez de compétences de coordination d’acteurs, de gestion de projet, d’animation de réseau que vous souhaitez mettre à profit pour la préservation de la biodiversité ? Alors rejoignez notre équipe et répondez à l’annonce d’offre d’emploi
                    </div>
                  </article>
                </div>
                <div className="column is-half-tablet is-one-third-desktop">
                  <article>
                    <Link to="/">
                      <img
                        src="https://cdn.pixabay.com/photo/2013/07/19/00/18/splashing-165192_960_720.jpg"
                        alt="loup"
                      />
                      <h1>
                        Végétal local, biodiversité et revégétalisation face au changement climatique
                      </h1>
                    </Link>
                    <div>
                      <date>24 juib 2020</date>
                    </div>
                    <div className="is-size-7">
                      Il s’agit d’une question récurrente : quelle est la pertinence d’utiliser des végétaux d’origine locale dans un contexte...
                    </div>
                  </article>
                </div>
                <div className="column is-half-tablet is-one-third-desktop">
                  <article>
                    <Link to="/">
                      <img
                        src="https://cdn.pixabay.com/photo/2015/10/12/22/43/fox-985292_960_720.jpg"
                        alt="loup"
                      />
                      <h1>
                        Des fromageries ne font pas que des fromages mais polluent des cours d’eau…
                      </h1>
                    </Link>
                    <div>
                      <date>12 juin 2020</date>
                    </div>
                    <div className="is-size-7">
                    Les cas de pollutions à répétition de fromageries sur l’aire AOP Comté se sont multipliés ces dernières années.
                    </div>
                  </article>
                </div>
                <div className="column is-half-tablet is-one-third-desktop">
                  <article>
                    <Link to="/">
                      <img
                        src="https://cdn.pixabay.com/photo/2019/09/21/11/10/chicken-4493649_960_720.jpg"
                        alt="loup"
                      />
                      <h1>
                        Plus de biodiversité dans les gestions des zones herbeuses
                      </h1>
                    </Link>
                    <div>
                      <date>28 févr. 2020</date>
                    </div>
                    <div className="is-size-7">
                      Tout le monde déplore la régression des pollinisateurs. Mais savez-vous que leurs habitats sont régulièrement détruits, alors qu’il est possible de l’éviter ?
                    </div>
                  </article>
                </div>
                <div className="column is-half-tablet is-one-third-desktop">
                  <article>
                    <Link to="/">
                      <img
                        src="https://cdn.pixabay.com/photo/2016/02/19/11/23/bicycle-1209682_960_720.jpg"
                        alt="loup"
                      />
                      <h1>Revoir le webinaire “Insectes pollinisateurs et Végétal local”</h1>
                    </Link>
                    <div>
                      <date>28 févr. 2020</date>
                    </div>
                    <div className="is-size-7">
                      L’Office Français de la Biodiversité organisait lundi dernier un webinaire sur les ‘Insectes pollinisateurs et Végétal local’.
                    </div>
                  </article>
                </div>
                <div className="column is-half-tablet is-one-third-desktop">
                  <article>
                    <Link to="/">
                      <img
                        src="https://cdn.pixabay.com/photo/2019/09/21/11/10/chicken-4493649_960_720.jpg"
                        alt="loup"
                      />
                      <h1>
                        Besoin de vos gouttes
                      </h1>
                    </Link>
                    <div>
                      <date>28 févr. 2020</date>
                    </div>
                    <div className="is-size-7">
                      France Nature Environnement Bourgogne Franche-Comté a besoin de vos ‘gouttes’ pour soutenir son projet !
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
                  className="box agenda"
                  style={{ background: "#c61512" }}
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
                    <Link to="/" className="columns event">
                      <div className="column is-3 day">
                        <time datetime="2020-06-20" className="is-size-2 saira">
                          20 <small className="is-size-6">juin</small>
                        </time>
                      </div>
                      <div className="column is-size-7">
                        <h2 className="is-size-6">Sortie Nature</h2>
                        <time datetime="08:00"><MdSchedule /> 8h00 - 12h00</time>
                        <address><MdRoom /> Roches de Nans</address>
                      </div>
                    </Link>
                    <Link to="/" className="columns event">
                      <div className="column is-3 day">
                        <time datetime="2020-07-07" className="is-size-2 saira">
                          07 <small className="is-size-6">juillet</small>
                        </time>
                      </div>
                      <div className="column is-size-7">
                        <h2 className="is-size-6">Sigogne s’envole !</h2>
                        <time datetime="2020-08-31"><MdSchedule /> Tout l'été</time>
                        <address><MdRoom /> Evènement virtuel</address>
                      </div>
                    </Link>
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
                      <Link to="/nos-programmes/debat-public/">
                        <Img
                          fluid={data.debatImg.childImageSharp.fluid}
                          objectFit="cover"
                          objectPosition="50% 50%"
                          alt="Débat public"
                        />
                      </Link>
                    </div>
                    <div className="column is-size-7">
                      Favoriser le dialogue environnemental sur notre territoire
                    </div>
                  </div>
                  <div className="has-text-right saira">
                    <Link to="/nos-programmes/debat-public/">
                      Découvrir &gt;{" "}
                    </Link>
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
                      <Link to="/nos-programmes/biodiversit-haies/">
                        <Img
                          fluid={data.haieImg.childImageSharp.fluid}
                          objectFit="cover"
                          objectPosition="50% 50%"
                          alt="Haie champêtre"
                        />
                      </Link>
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
