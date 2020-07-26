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
        <ul className="team" style={{ marginTop: "3rem" }}>
          <li>
            <div>Hervé Bellimaz</div> Président
          </li>
          <li className="girl">
            <div>Annette LAPALUS</div> Vice présidente
          </li>
          <li>
            <div>Jean-Pierre DUPLUS</div> Trésorière
          </li>
          <li>
            <div>Gérard Groubatch</div> Secrétaire
          </li>
          <li>
            <div>Patrick Bourque</div> Administrateur
          </li>
          <li className="girl">
            <div>Marjorie Tourette</div> Salariée
          </li>
          <li className="girl">
            <div>Séverine Guyot</div> Salariée
          </li>
          <li>
            <div>Maxence BELLE</div> Salarié
          </li>
        </ul>
        <p>
          Ainsi que des bénévoles répartis sur la région Bourgogne Franche-Comté
          !
        </p>
      </div>
    </section>
  </Layout>
)

export default Contact
