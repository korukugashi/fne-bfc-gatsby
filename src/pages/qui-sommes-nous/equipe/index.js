import React from "react"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import userIcon from "../../../images/boy.svg"
import girlIcon from "../../../images/girl.svg"

const Contact = () => (
  <Layout>
    <SEO
      title="L'équipe de FNE BFC ?"
      description="Les administrateurs, salariés et bénévoles de Franche-Nature Environnement Bourgogne Franche-Comté"
    />
    <section className="hero is-primary">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1>L'équipe de FNE BFC</h1>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container has-text-centered">
        <style type="text/css">
          {`.team li{display:inline-block;width:180px;margin:20px 5px;padding:100px 0 20px;font-size:1rem;font-family:Sohoma;background:url(${userIcon}) no-repeat 50% 0;background-size:80px 80px}`}
          {`.team li.girl{background-image:url(${girlIcon})}`}
          {`.team div{font-family:Saira;font-size:1.1rem}`}
        </style>
        <h2>Administrateurs</h2>
        <ul className="team" style={{ marginTop: "3rem" }}>
          <li>
            <div>Hervé Bellimaz</div> Président
          </li>
          <li className="girl">
            <div>Annette Lapalus</div> Vice présidente
          </li>
          <li>
            <div>Gérard Groubatch</div> Secrétaire
          </li>
          <li>
            <div>Jean-Pierre Duplus</div> Trésorier
          </li>
          <li>
            <div>Patrick Laden</div> Trésorier adjoint
          </li>
          <li>
            <div>Pascal Blain</div> Porte parole
          </li>
          <li>
            <div>Patrick Bourque</div> RH et lien réseau
          </li>
          <li className="girl">
            <div>Michèle Durand Migeon</div> Administratrice
          </li>
          <li>
            <div>Jean-Yves Chalumeaux</div> Administrateur
          </li>
          <li className="girl">
            <div>Joëlle Pienoz</div> Administratrice
          </li>
          <li className="girl">
            <div>Martine Petit</div> Administratrice
          </li>
          <li className="girl">
            <div>Gisèle Daclin</div> Administratrice
          </li>
          <li className="girl">
            <div>Nicole Sicard</div> Administratrice
          </li>
        </ul>
        <h2>Salariés</h2>
        <ul className="team" style={{ marginTop: "3rem" }}>
          <li className="girl">
            <div>Marjorie Tourette</div> Salariée
          </li>
          <li className="girl">
            <div>Séverine Guyot</div> Salariée
          </li>
          <li>
            <div>Pierre Pécriaux</div> Salarié
          </li>
          <li>
            <div>Maxence BELLE</div> Salarié
          </li>
        </ul>
      </div>
    </section>
  </Layout>
)

export default Contact
