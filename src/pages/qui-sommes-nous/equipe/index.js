import React from "react"
import Obfuscate from 'react-obfuscate';

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
            <Obfuscate element="div">Hervé Bellimaz</Obfuscate> Président
          </li>
          <li className="girl">
            <Obfuscate element="div">Annette Lapalus</Obfuscate> Vice présidente
          </li>
          <li>
            <Obfuscate element="div">Gérard Groubatch</Obfuscate> Secrétaire
          </li>
          <li>
            <Obfuscate element="div">Jean-Pierre Duplus</Obfuscate> Trésorier
          </li>
          <li>
            <Obfuscate element="div">Patrick Laden</Obfuscate> Trésorier adjoint
          </li>
          <li>
            <Obfuscate element="div">Pascal Blain</Obfuscate> Porte parole
          </li>
          <li>
            <Obfuscate element="div">Patrick Bourque</Obfuscate> RH et lien réseau
          </li>
          <li className="girl">
            <Obfuscate element="div">Michèle Durand Migeon</Obfuscate> Administratrice
          </li>
          <li>
            <Obfuscate element="div">Jean-Yves Chalumeaux</Obfuscate> Administrateur
          </li>
          <li className="girl">
            <Obfuscate element="div">Joëlle Pienoz</Obfuscate> Administratrice
          </li>
          <li className="girl">
            <Obfuscate element="div">Martine Petit</Obfuscate> Administratrice
          </li>
          <li className="girl">
            <Obfuscate element="div">Gisèle Daclin</Obfuscate> Administratrice
          </li>
          <li className="girl">
            <Obfuscate element="div">Nicole Sicard</Obfuscate> Administratrice
          </li>
        </ul>
        <h2>Salariés</h2>
        <ul className="team" style={{ marginTop: "3rem" }}>
          <li className="girl">
            <Obfuscate element="div">Marjorie Tourette</Obfuscate> Débat public
          </li>
          <li>
            <Obfuscate element="div">Pierre Pécriaux</Obfuscate> Débat public
          </li>
          
          <li>
            <Obfuscate element="div">Maxence Belle</Obfuscate> Biodiversit'haies
          </li>
          <li className="girl">
            <Obfuscate element="div">Peggy Gougeon</Obfuscate> Secrétariat
          </li>
        </ul>
      </div>
    </section>
  </Layout>
)

export default Contact
