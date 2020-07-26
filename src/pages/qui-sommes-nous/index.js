import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Contact = () => (
  <Layout>
    <SEO
      title="Qui sommes-nous ?"
      description="FNE BFC est la fédération régionale d’associations de protection de la nature et de l’environnement en Bourgogne Frnahce-Comté."
    />
    <section className="hero is-primary">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1>Qui sommes-nous ?</h1>
          <p>
            FNE Bourgogne Franche-Comté est une{" "}
            <strong>
              fédération régionale d’associations de protection de la nature et
              de l’environnement.
            </strong>
          </p>
        </div>
      </div>
    </section>
    <section className="section" id="qui-sommes-nous">
      <div className="container">
        <h2 style={{ marginTop: 0 }}>Nos objectifs et missions</h2>

        <p>
          France Nature Environnement Bourgogne Franche-Comté{" "}
          <strong>alerte, sensibilise, interpelle, fait pression</strong>, pour
          que ça change !
        </p>

        <p>
          FNE Bourgogne Franche-Comté agit à travers des{" "}
          <strong>manifestations militantes</strong>, un{" "}
          <strong>programme d’éducation à l’environnement</strong>, des{" "}
          <Link to="/nos-actions/juridique/">actions juridiques</Link>…
        </p>

        <p>
          FNE Bourgogne Franche-Comté joue un véritable rôle de{" "}
          <strong>lanceur d’alerte pour l’environnement</strong> en intervenant
          sur tous les sujets nécessitant une action d’urgence : sauvegarde
          d’espèces menacées, pollutions, préservation de sites, …
        </p>

        <h2>Des actions au quotidien</h2>
        <ul style={{ listStyleType: "circle", paddingLeft: "2rem" }}>
          <li>
            <strong>Campagnes de sensibilisation</strong> sur les problèmes
            environnementaux régionaux.
          </li>
          <li>
            <Link to="/nos-programmes/debat-public/">
              <strong>Débat public</strong>
            </Link>{" "}
            : mise en place de « réseaux Environnement » : eau, biodiversité,
            agriculture-forêt, aménagement du territoire, énergie-déchets…
            journées de formation, débat contradictoire.
          </li>
          <li>
            <strong>Gestion de terrains</strong> en partenariat avec le{" "}
            <a href="http://cen-franchecomte.org/">
              Conservatoire des Espaces Naturels de Franche-Comté
            </a>{" "}
            : Réserve Naturelle Régionale de Fontenelay (70).
          </li>
        </ul>
      </div>
    </section>
  </Layout>
)

export default Contact
