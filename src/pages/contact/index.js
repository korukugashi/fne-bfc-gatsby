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
    <div className="has-text-centered">
        <section className="hero">
            <div className="hero-body">
                <div className="container">
                    <div className="columns">
                        <address className="column">
                            <h2>Nous contacter</h2>
                            <p><small>C/O</small> Maison de l’environnement</p>
                            <p>7 rue Voirin<br />25000 Besançon</p>
                            <div><span className="has-text-weight-bold">Tél :</span> 03 81 80 92 98</div>
                            <div><span className="has-text-weight-bold">Email :</span> <Obfuscate email="contact@fne-bfc.fr" /></div>
                        </address>
                    </div>
                </div>
            </div>
        </section>
    </div>
  </Layout>
)

export default Contact
