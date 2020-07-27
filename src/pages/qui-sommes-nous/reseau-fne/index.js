import React from "react"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"

const Contact = () => (
  <Layout>
    <SEO
      title="Le réseau FNE"
      description="Les associations et collectifs membres de France Nature Environnement Bourgogne Franche-Comté"
    />
    <section className="hero is-primary">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1>Le réseau FNE</h1>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container has-text-centered">
        <h2>Fédérations départementales</h2>
        <ul>
          <li>FNE 25-90 (antennes de Besançon et Belfort)</li>
          <li>FNE 70 Haute-Saône</li>
          <li>FNE 21 Côte d'Or</li>
          <li>CAPEN (FNE 71) Saône-et-Loire</li>
          <li>JNE (FNE 39) Jura</li>
        </ul>
        <h2>Associations régionales</h2>
        <ul>
          <li>CPEPESC</li>
          <li>Patrimoine et Environnement</li>
          <li>CPIE de Brussey</li>
          <li>ADEB</li>
          <li>Interbio</li>
          <li>vergers vivants</li>
          <li>AOMSL</li>
        </ul>
      </div>
    </section>
  </Layout>
)

export default Contact
