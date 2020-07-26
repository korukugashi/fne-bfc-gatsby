import React from "react"
import Obfuscate from "react-obfuscate"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"

const Join = () => (
  <Layout>
    <SEO
      title="Participer à une action"
      description="Agissez pour la protection de la nature et l'environnement en Bourgogne Franche-Comté en participant à nos actions !"
    />
    <section className="hero is-primary">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1>Participer à une action</h1>
        </div>
      </div>
    </section>
    <section className="section" id="benevole">
      <div className="container">
        <h2>
          Vous souhaitez participer ?
        </h2>

        <p>Biodiversit’haies est un programme de valorisation et de plantation de haies-ripisylves pour aménager votre paysage de demain.</p>

        <p>
          Pour vous inscrire, contactez-nous par mail
          à <Obfuscate email="contact@fne-bfc.fr" />
        </p>
      </div>
    </section>
  </Layout>
)

export default Join
