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
    <section className="section" id="qui-sommes-nous" style={{paddingTop: 0 }}>
      <div className="container">
        <h2>Nos statuts</h2>
        <p>Consulter les <Link to="/qui-sommes-nous/">statuts de FNE Bourgogne Franche-Comté</Link>.</p>
        <h2>Pourquoi ce logo ?</h2>
        <p>Le hérisson est un animal pacifique et qui souffre de la pression des modes de vie contemporains.</p>
        <p>Il se défend en montrant ses piquants pour interpeller ce qui est une des fonctions de FNE et de FNE-BFC.</p>
        <h2>Une structure fédérale</h2>
        <p>FNE-BFC est une interface entre un pôle national (<Link to="https://www.fne.asso.fr/">FNE</Link>) et des pôles infrarégionaux et départementaux (nos <Link to="/qui-sommes-nous/reseau-fne/">associations adhérentes</Link>).</p>
        <h2>Nos objectifs et missions</h2>
        <p>Nos objectifs et nos missions sont ancrées dans les spécificités des territoires de notre région de Bourgogne Franche Comté.</p>
        <p>Ainsi, par ses bénévoles, FNE-BFC :</p>
        <ul>
          <li><strong>alerte, sensibilise, interpelle, fait pression</strong>, pour que ça bouge et que ça change dans tous les domaines où la nature est en cause. Comme notre slogan national le souligne <em>partout où la nature a besoin de nous</em>, à quoi nous ajoutons <em>partout où nous avons besoin de la nature</em>.</li>
          <li>agit à travers des <strong>manifestations militantes</strong>, un programme d’<strong>éducation à l’environnement</strong>, des <Link to="/nos-actions/juridique/">actions juridiques</Link>, ...</li>
          <li>est <strong>lanceur d’alerte pour l’environnement</strong> en intervenant sur tous les sujets nécessitant une action d’urgence : <strong>sauvegarde d’espèces menacées, pollutions, préservation de sites</strong>, …</li>
          <li>est force de propositions</li>
          <li>est partie prenante exigeante dans les schémas ou plans ou stratégies régionales concernant aussi bien les <strong>carrières</strong>, les <strong>déchets</strong>, le <a href="http://strategie.biodiversite.bourgognefranchecomte.fr/r/60/sraddet/">SRADDET</a>, la <strong>biomasse</strong>, la <strong>biodiversité</strong>, les <strong>énergies</strong>, les <strong>plans d’alimentation</strong>, les <strong>plans nationaux d’actions (PNA)</strong> (lynx, etc.), ...<br/>Nous sommes interlocuteur du <strong>Conseil Régional</strong>, de la <a href="https://www.prefectures-regions.gouv.fr/bourgogne-franche-comte">Préfecture de Région</a>, de l’<a href="https://www.ademe.fr/">ADEME</a> et de toutes les <strong>structures institutionnelles</strong> que nous sommes amenés à rencontrer dans nos démarches</li>
          <li>FNE BFC est propriétaire d’un <strong>foncier</strong> d’environ 75 hectares. En partenariat avec le <a href="http://cen-franchecomte.org/">Conservatoire des Espaces Naturels de Franche-Comté</a> : nous intervenons dans un patrimoine de biodiversité qu’il nous tient à cœur de protéger, comme la <a href="http://cen-franchecomte.org/vallon-fontenelay-art161">Réserve Naturelle Régionale de Fontenelay (70)</a></li>
        </ul>
        <p>Ainsi, par ses salarié(e)s, FNE-BFC élargi et spécialise ses missions et objectifs par deux pôles complémentaires :</p>
        <ul>
          <li>celui du <Link to="/nos-actions/debat-public/">Débat Public</Link> qu’elle anime au sein de la maison de l’Environnement sise à Besançon avec une portée régionale sur Bourgogne et Franche Comté</li>
          <li>celui de <Link to="/nos-actions/biodiversit-haies/">biodiversit’haie</Link></li>
        </ul>
      </div>
    </section>
  </Layout>
)

export default Contact
