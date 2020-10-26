import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import MenuActions from "../../components/menuactions"

const Join = () => (
  <Layout>
    <SEO
      title="Les programmes de FNE BFC"
      description="Biodiversit'haies, plateau débat public, sentinelles de la nature"
    />
    <section className="hero is-primary">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1>Les actions de FNE BFC</h1>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container-fluid">
        <MenuActions />
      </div>
    </section>
  </Layout>
)

export default Join
