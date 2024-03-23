import React from "react"
import Obfuscate from 'react-obfuscate'

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Contact = () => (
  <Layout>
    <SEO 
        title="Nous contacter"
        description="Retrouvez FNE Bourgogne Franche-Comté à son antenne de Besançon"
    />
    <section className="hero is-primary">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1>Nous contacter</h1>
        </div>
      </div>
    </section>
    <div className="has-text-centered">
        <section className="hero">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-vcentered">
                        <address className="column is-6">
                            <p>30-32 avenue fontaine argent<br />25000 Besançon</p>
                            <div><span className="has-text-weight-bold">Tél :</span> 03 81 80 92 98</div>
                            <div><span className="has-text-weight-bold">Email :</span> <Obfuscate email="contact@fne-bfc.fr" /></div>
                        </address>
                        <div className="column is-6">
                            <iframe src="https://www.openstreetmap.org/export/embed.html?bbox=6.033417284488679%2C47.24577270430456%2C6.035471856594087%2C47.24685062516591&amp;layer=mapnik&amp;marker=47.246311667477116%2C6.034444570541382" title="Adresse FNE BFC" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" style={{ width: '100%', height: 300}}></iframe><br/>
                            <small><a href="https://www.openstreetmap.org/?mlat=47.24631&amp;mlon=6.03444#map=19/47.24631/6.03444">Afficher une carte plus grande</a></small>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  </Layout>
)

export default Contact
