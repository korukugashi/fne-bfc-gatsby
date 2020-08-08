import React from "react"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"

const Soutiens = () => (
  <Layout>
    <SEO
      title="On les soutient"
      description="Les associations et collectifs que France Nature Environnement Bourgogne Franche-Comté soutient"
    />
    <section className="hero is-primary">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1>On les soutient</h1>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container has-text-centered">
        <h2>Associations</h2>
        <ul>
          <li></li>
        </ul>
        <h2>Collectifs</h2>
        <ul>
          <li><a href="https://www.coquelicots-franche-comte.org/">Nous voulons des coquelicots</a></li>
        </ul>
      </div>
    </section>
  </Layout>
)

export default Soutiens
