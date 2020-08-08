import React from "react"
import { useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import BackgroundSlider from "gatsby-image-background-slider"
import { MdSchedule, MdRoom } from "react-icons/md"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      backgrounds: allFile(
        filter: { sourceInstanceName: { eq: "backgrounds" } }
      ) {
        nodes {
          relativePath
          childImageSharp {
            fluid(maxWidth: 4000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      debatImg: file(relativePath: { eq: "debat.png" }) {
        childImageSharp {
          fluid(maxWidth: 125) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      haieImg: file(relativePath: { eq: "haie.png" }) {
        childImageSharp {
          fluid(maxWidth: 125) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO
        title="Accueil"
        keywords={[`nature`, `environnement`, `bourgogne`, `franche-comte`]}
      />
      <div>
        <BackgroundSlider query={data} callbacks={{}} />
        <p
          className="banner-catch"
          style={{ marginTop: "20rem", marginBottom: "2rem", marginLeft: '2rem' }}
        >
          <Link to="/qui sommes-nous/">
            <span>Partout où la nature a besoin de nous</span>
          </Link>
        </p>
      </div>

      <section
        className="section"
        style={{ paddingTop: "2rem", background: "#e7e7f2" }}
      >
        <div className="container-fluid">
          <div className="columns">
            <div className="column is-three-quarters-tablet">
              <div className="columns home-articles is-multiline">
                <div className="column is-half-tablet is-one-third-desktop">
                  <article>
                    <Link to="/">
                      <h1>
                        FNE BFC recrute un.e chargé.e de mission biodiversité
                      </h1>
                    </Link>
                    <div>
                      <time dateTime="2020-06-29">29 juin 2020</time>
                    </div>
                    <div className="is-size-7 is-size-6-fullhd is-size-6-mobile">
                      Vous disposez de compétences de coordination d’acteurs, de
                      gestion de projet, d’animation de réseau que vous
                      souhaitez mettre à profit pour la préservation de la
                      biodiversité ? Alors rejoignez notre équipe et répondez à
                      l’annonce d’offre d’emploi
                    </div>
                  </article>
                </div>
                <div className="column is-half-tablet is-one-third-desktop">
                  <article>
                    <Link to="/">
                      <h1>
                        Végétal local, biodiversité et revégétalisation face au
                        changement climatique
                      </h1>
                      <div>
                        <time dateTime="2020-06-24">24 juin 2020</time>
                      </div>

                      <img
                        src="https://www.terra.bzh/sites/terra/files/styles/normal_size/public/7IVWALP8_1.jpg?itok=jmFm9zMD"
                        alt="loup"
                      />

                      <div className="is-size-7 is-size-6-fullhd is-size-6-mobile">
                        Il s’agit d’une question récurrente : quelle est la
                        pertinence d’utiliser des végétaux d’origine locale dans
                        un contexte...
                      </div>
                    </Link>
                  </article>
                </div>
                <div className="column is-half-tablet is-one-third-desktop">
                  <article>
                    <Link to="/">
                      <h1>
                        Des fromageries ne font pas que des fromages mais
                        polluent des cours d’eau…
                      </h1>
                      <div>
                        <time dateTime="2020-06-12">12 juin 2020</time>
                      </div>
                      <img
                        src="https://i2.wp.com/www.soslrc.com/wp-content/uploads/2020/06/Noirefontaine-2.jpeg?w=640&ssl=1"
                        alt="loup"
                      />
                      <div className="is-size-7 is-size-6-fullhd is-size-6-mobile">
                        Les cas de pollutions à répétition de fromageries sur
                        l’aire AOP Comté se sont multipliés ces dernières
                        années.
                      </div>
                    </Link>
                  </article>
                </div>
                <div className="column is-half-tablet is-one-third-desktop">
                  <article>
                    <Link to="/">
                      <h1>
                        Plus de biodiversité dans les gestions des zones
                        herbeuses
                      </h1>
                      <div>
                        <time dateTime="2020-02-28">28 févr. 2020</time>
                      </div>
                      <img
                        src="https://projetletour.ca/wp-content/uploads/2019/12/2018-06-biodiversite%CC%81.jpg"
                        alt="loup"
                      />
                      <div className="is-size-7 is-size-6-fullhd is-size-6-mobile">
                        Tout le monde déplore la régression des pollinisateurs.
                        Mais savez-vous que leurs habitats sont régulièrement
                        détruits, alors qu’il est possible de l’éviter ?
                      </div>
                    </Link>
                  </article>
                </div>
                <div className="column is-half-tablet is-one-third-desktop">
                  <article>
                    <Link to="/">
                      <h1>
                        Revoir le webinaire “Insectes pollinisateurs et Végétal
                        local”
                      </h1>
                      <div>
                        <time dateTime="2020-02-28">28 févr. 2020</time>
                      </div>
                      <img
                        src="https://www.promixgardening.com/sites/promix/files/inline-images/promix_gardening_Butterfly%20on%20a%20pollinator%20plant_0.jpg"
                        alt="loup"
                      />
                      <div className="is-size-7 is-size-6-fullhd is-size-6-mobile">
                        L’Office Français de la Biodiversité organisait lundi
                        dernier un webinaire sur les ‘Insectes pollinisateurs et
                        Végétal local’.
                      </div>
                    </Link>
                  </article>
                </div>
                <div className="column is-half-tablet is-one-third-desktop">
                  <article>
                    <Link to="/">
                      <h1>Besoin de vos gouttes</h1>
                      <div>
                        <time dateTime="2020-02-28">28 févr. 2020</time>
                      </div>
                      <img
                        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PDQ8NDw8PDQ0ODg4QDw8PDw8PDhAOFhEWFhYRFRUYHSgiGRooGxgVITEhJSkrLi4yGB8zRDMsNygtLisBCgoKDQ0OGhAQGzclICU3LzA3Ny0vLy0wNy02MjU1Li83MC0vOCsuNjcxNzcyLzYvLS0tLTc1Kys1LS0tNy4rLf/AABEIALkBEQMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAACAwABBAYFB//EAEsQAAIBAwMBBAcFBAQJDQAAAAECAwAEEQUSITEGExRBIlFSk5TR0jJTYXGRIzRzgRVCobIHFjNDYoOzwcQkNVRVY3KSorHD4fDx/8QAGgEBAAIDAQAAAAAAAAAAAAAAAAMEAQIFBv/EACMRAQACAQQCAgMBAAAAAAAAAAABAgMEERIxQVETIXGBsQX/2gAMAwEAAhEDEQA/AO8C0YWjVaMLQAFowtGFowtAsJRhaYFogtAsLRBaYFogtAoLRBaYFottArbV7abtq9tAnbV7Kbtq9tArbU207bU20CdtTbTttTbQJ21W2n7arbQI21NtP21W2gRtoStaNtUVoM5Wq208rVbaDOVoSlaCtCVoMxSgK1qK0BWgzFaArWlloCtBmK0BWtJWllaBGypTdtSg1qtMVaJVpgWgELRBaMLRhaAAtEFpgWiC0CwtEFo9tEFoFhavbTAtFtoF7am2m7amKBe2r20zbUxQL21NtNxUxQK21NtNxUxQK21NtNxVYoFbarbTttVigVtoStP21W2gQVqitOK1RWgQVoStP21RWgzlaArWgrQlaDMVoGWtJWgZaDKVpZWtTLS2Wgz7alO21VBtVaYq1arRhaCgtEFogtGFoBC0QWiAogtAAWi20QWixQABV7aPFTFAOKmKPFXigDFTFc1d9qmWV3igabT7du7ubledrnzQf1lXz/Py4z0sUiuquhDIwDKw5DKRkEGt7Y7VjeUdMtLzMVnpeKmKyQapDJc3FohYz2qQvMNjAKJASgBPBOAelVp9+ZWAKqN0YkXa+8hc4w/HDf8Az6qhtetZiJ8porMxMw2YqYq1IOcEHBwcEHBxnB9R5FVNIqI0jHaiKzMfUoGSf0rdqmKrFEvIBHQgEflV4oAxVYpmKmKBe2q20zFVigWRVbabihxQKK0JWnFaoigQVoStPIoStBnK0BWtBWgZaDMy0tlrURSmWgRtqUzbUoNiimBagFGBQUBRgVYFEBQUFqwKICrAoBxRYq8VeKAcVeKupQViuf7caibeyO1tjzusIcAkorAlmGPPaD+tdDXhdstHa8tCkfM0biWME43EAgrn8QT/ADxUmHjzjl0h1HL4rcO9mSz7QaVBHDZpKphMYX7JMYB696ccE85z6+cUHYi9j33dlE/e29vJvtn5/wAi5OUGeoDdD55r5rLbSI/dtG6yZxsZGD5/LrX0f/B9oUtuklxMpjeYKqRtwyxjJyw8iSen4Vez4cePHM77zP8AfbmabUZcuWscdoj1626FoP8Az/rX8HS/9k9epoGqJcS3yLCIfCXjW5YEEysEVi5wBj7WMc9K8C9v10vWLu7uklFlfwWoW5SN5Y4pYQymOQICRkHIOP8AfiaXqKabqV9b3ayxrqF+k1pOIpHglMqogi3KDtYMMc49fSubtDstH+D1lSPVmJCqut6mzE8AAFSSapNc1C9jaWzsIHsWDKhu5jHJdR8glUAwqnnG6vOsnW1k1PR7oSwtql5dvZ3AikeCUXSYCh1BAZTwc4rXova2CytYrG/SW1u7WNIO77mWRZggCq8TKCGBAHq5zQe1o+rpeRi4LPaG1kkjurZyqlJwMbXbzUZyOmcj1Yr2opFdQ6MHRgCrKQysD5gjqK5zsdaSsb2+nhaD+kLhZEgkA3pAiBELr5MepH5V0oFY2+2Zn6TFSpUrLCsVMVdSgHFVijqYoFkVRFMxVEUCyKEimkUJFAkigIp5FARQIZaWy1oYUthQIxVU3FSg1AUYFUoowKCwKsCoBRCgmKvFSpQSpUq8UFVeKupQTFSrqUFVKupQVV1KlBKlSpQVUq6lBVTFXUoBxUxRVVANSiqsUFVMVKlBRFCRR1RoFkUJFMNCRQKYUthTmFLYUCsVKLFSg0LRM4VSzHCqCST0AAyTVLSNT/dp/wCBL/cNAYvU9mb4e4+irF6nqm+HuPoqahfw20TTzyJDEuMvIwVck4A/Ek8AdTSbHWbafuxDMshmSd4wM5ZYXVJeCOCrOoIODk0D/Gp6pvh7j6anjU9U3w9x9NZ7zXLWFXeSUAJN3BVVeSQ3GwP3SRqCzvtOcKCcVBr1n4TxxuIltOczM2xQQ2wqd2CG3ejtPOeMZoNPjU9mb4e4+mp45PZm+HuPprJpnaG1ue8EUjb4kDvHLDPbzCM5xJ3cqqxU4OGAxwRTBrdt3Ftcd5iG8CNA7KyhlaFpgTkeiO7VjzjGKB/jk9mb4e4+mr8cnszfD3H01h07tPYXLrHBcxyu+dgXJ3cZ4OMHgZrTq+rQ2kayTMwDyLFGscUs0skpBIRI4wWY4VjwOgJ8qBvjk9mb4e4+mp45PZm+HuPprzV7WWHdNK9wIFSVYXS4SW3mWVlLKhikUPkqCRxyAT5U+DtFZPDLcLcxdzAAZZGbYkYPQsWxjpQa/HJ7M3w9x9NTxyezN8PcfTWex121nCGGZZO8keJQNwPeKm9kIIyDt9LnHBB86XqHaSxt3Mc9zFFIG27GPp52q3C9Tw6nP+kKDZ45PZm+HuPpqeOT2Zvh7j6a82btZZKIyskk5l7zYltb3F1IQm3e2yJCQBvTJIx6QrQvaKz8L403CLbbim990ZEgbaYyrAMH3cbCN2eMUGrxyezN8PP9NTxyezN8PcfTSrHWbacxiGZZDNHLJGBnLJE6xyH8CrsqkHkE1mvO1NhC5iluokkBYFCSXBU4PojnGeM9KDd45PZm+HuPpqeOT2Zvh7j6aOzu4541micSRvnay9DgkH+0GsF72is4J1tpZgsrNGpGyRkRnOEWSQArGWP2Q5GfLNBs8cnszfD3H01PHJ7M3w9x9NHbXUcu/u2Dd3I8b4z6MinDKa8g9sdN9EeMhJZVcAFidjDKscDgEcg+YIPQ0HqeOT2Zvh7j6anjk9mb4e4+msd/2ksbcRtNcxRCZO8j3Ny0XH7THknIyx4Hrr1aDL45PZm+HuPpqeOT2Zvh7j6aVpmqx3FlDfKHWGa3S4AZcyLGyB8FVzk4PQZrB/jjYFjGJZC4AYoLW7LhSSASBHkAkH9D6qD1PGp7M3w9x9NV41PVN8PcfTS9N1WO4e4RA4NtLHG5Zdu4vbxTggdfsyqOQDkGg1XWre1KLK7d5JuMcMUUtxcSAYyVijVmIGRk4wM0D/Gp6pvh7j6ao3qezN8PcfRS9J1WC7jMkD71V2jdWR45I5RjMckbgMjcg4IB5HrrHqNpLdStGJ3t4oigYRhTI5K7ifSypHIHpAj0W4yQVDebxPZm+HuPoqR3Csdo3A4zh45IyRnGRuAz5dPXWe2iMEyQh3eOSGR8SNuZXjaMZX1Ah+QOBtGAMmnP+8L/AAZf78dA1qW1NalmgXUq6lA9aRqf7tP/AAJf7hpoNJ1M/wDJp/4E39w0Hk9opEj1DTJrgqtohu13PgRx3zqggdieFO3xCgnzcDqRWC9uBNq9oNOnsi6WmrCdtvfxhzLYllYROuJOVOSa6+SNXBRlDqwwysAykeog9aGC1jjCiONIwgIUIiqFUkEgYHAJA/QUHznToL2TWHRJ7RLiFtTleR7aWWDc4sYwUi75Srbdw3Fj1YY9Li7eTuL/ADqMkTW1lql28kyRmG1ivZ7O1kt53Qs3driS6XczEBmByCRj6SI1B3BQGPU4GT/Or2Dngel9rjrxjn18UHA9ptcjn1KxhtXhn/eFFzBKrhHe1nDWkrLwO8IhZUzkmPOPRFefqerwz2ujQWxE8MMebiSMgpAzaVPHHC/qc729HqNvOMjP02OJVG1VVVHkoAGfyFWsSgYCqBktgKAN2c5/Og5jsRqiNbW6Sala3TyW9sI4ozCkiHu+Vwrksen6U3t2JBDZyxNGk0Wp2XdvKjSRq0rm3yyqykjEp6EdetdAlpGCGEcYYdCEUEfzxTGUHggEZB5GeQcg/rQfK7syQ3Ci9njt9VGrWk0t4+w2htWtbuO3aJSV2xgCVdrHIYscncCeh1nUIW/o2SW7t7y2tr9XvZUaLukLQzLbyyqpIVRMY8EnAYK3lXZPCrfaVWzgHcoOQOlCltGoYLGihhhgEUBh6j66Dk9auUlv7JdPms/Ei7me4OBMAxsXUGVY3U7iiqASeijyFc3LNNFr5M97a2k5W9Uz90FgK+G00iMLJJ9rofteR4r6db2cUYCxxRxqpJUIiqAT1IAHFHJAjfaRW5z6Sg84xnmg43XJ5pb3TpNPu7N5zb6jbGZ17+FnK28uMRuNrfss9TgZ4NeZoc0cNxYG6DRdzLqcN29wyMq67KYJFkLgBfTiabuzgDEgXAJAr6LHbouNqIuCSMKBgkYJ/SpJAjKysisr/bVlBVuAOQevQfpQcbcXAm1m2GmT2W5LLVRMdvfxCQ3Nk0isInXEm5gTk+Z45rxNKuJItUuu91C0spmWbvHaNBHLtunwEWSTIxk+Z619Mhto0ChI0QKCqhEVQqk5IGOgyB+lSS2jb7UaN1PKqeaCW1zHKgkikSWM5w8bK6nHBwRxXzaWx1C40nV5Yri1WK4uNaco1nK1yxjmliT9sJgAQsSKrbOAq9cV9MjjVRtVQqjyUAD9BUWMAbQABzwAAOTk8frQcBqs8niprK33KO0MNtNDLGG/ZegIrybcOFIt1gKnzYj11os547bVb2Jb61sIY3sP+TSCIM8YtkXClmBUbVC8A9K7gIOOBwMDjoOOB+g/Sly20bnLRox9bKpP9tByem3tmt5q3i5bYeJMUqNO8fdTaV4SNBtLHDRCTv8AI6AuSftc9Utwjwd9EyyRvFvjdCGR0K5VlI4IIxipNZQuFV4o3WM5QPGrBD61BHH8qfQcZ2I7S2CaZpls93BFOLKziMckixt3whUGMbsZbORirHaKwi1m6eW+s4kbTdNVWkuYUVmFxekqCW5IBXP5j112LLkYIyD1BGRWeKxhT7EMSf8AdjRf/QUHKaP2hsoLvVjPcwwiW+ilRncBHh/o+1CyBum04POfKq0fV7OPUdRnuLm3jlna2a1lkmjVJdLFtGUaF2OGTvTOTtPU8+VdnS5IEbAZFcL03KGx+WelBzvZYia81HUIv3W6a0jhfBC3BhjZXuV9ancqBvMRAjIxWm5Z5LwGKQxNxCSoQh44/TlZgQdyqXRBjBVnfyyK92sGn6f3JYlzISAqkrghNzMc+tyzMWbjPHHFAy3tdjM7O8sjAAu+3hQchVCgADP4ZPmTgUL/ALwn8GX+/HWo1kk/eE/gy/346BzUBoiaW1BVShzUoGg0fXg8jzFKBowaABYwfcw+6T5VYsYPuYfdJ8qYDRg0CvAQfcw+6T5VfgIPuYfdJ8qaDRZoEeAg+5h92nyqeAg+5i92nyp+avNBn8BB9zF7tPlV+Ag+5i92nyp9SgR4CD7mH3afKp4CD7mL3afKn1KBHgIPuYvdp8qvwEH3MXu0+VPzUzQI8BB9zF7tPlU8BB9zF7tPlT81M0CPAQfcxe7T5VPAQfcxe7T5U/NTNAjwEH3MXu0+VTwEH3MXu0+VPzUzQI8BB9zF7tPlU8BB9zF7tPlT6qgR4CD7mH3afKp4GD7mL3afKn1KDP4CD7mL3afKp4CD7mL3afKtFTNBn8BB9zF7tPlU8DB9zD7tPlT81WaBHgYPuYfdJ8qE2MH3MPu0+VaM1WaDObGD7mL3afKrjgjTOxETPXaqrn88U1vyP6UsmghNLY1bGlk0EzUod1SgNTRg0hTRhqB4NEDSQ1Bd3kcMbTSNsjQZY4JPqAAHJJOAAOSSAOaDYDV5rxIbm+lG5YYbRT9gXDNLMR63jjwEP4b2/lR97f7kj2Wyg7i9wC8kYULwvdZRgxYj+swwp5yQKD2c1ea8DTNVma/ubKURsIUhdJY1ZN29MlWQs2MeRzznoMc+5mgZmpmgLfyxSDfQj/PRD/WJ86DXmpWM6nbjrcQD85ox/vptvcxyLujkSVc43Rurrn1ZHnQPqUOavNBdSuB7c60/iUhhkZPD+kxRiMynBAOOuBj9TXZaVfrcW8c69JFBI9lujL/I5FWMmmvjx1yT1KKuWLWmseGypVZqZqulXUqs1M0F1KHNTNAWarNeX2iv5Le27yII0rT2cKCTd3e6a6ihy23kD9pnI/Q9KHSNZWcvC6Nb3cOO+t5CN6g/ZkUjh4zg4ccHpwQVAetmqzQ5qs0BZqs0JNc92v1CRVhs4HMdxfO0YkXG+K3Vcyyr/pYKoD5NIp8qC5O0BubiWy094Xmg4ubiT0obcnIAWMEGZ9ykYBCjawLZG2uY1HSb6OUS3zRajFju133dxEjy7S2/w4CxIMK3BYDH9djgVv7NRpb6rLaFFgEOnwraovAaMSv3n57f2f5b8/1q26pqcN/H4KBFna4Cvm7tJ/CrAMP35VwvegHaAFP2mXoMmg4ldPWO3M9vY48LJAzJZCdZ7hZWZW/yaJJsAywdQoO37PBFdA+p6hYEzNBczaeqRsYbiWOe+jDNtISVc72HB7t2cnP2wcA+/ougC1lkn8RPPNM0jSlyixuWbco2AcBRkKM8An11n7XyF447RAsks7/5HcEkZFBYurEEKAQCWI48uSKD17C/iuIo54XWSKVA8br9lkPmP94PIprNXFdnra4066FtIgW0vSTD3Z3QW96I9xjXPpBXVWJ3Z9Jc7mL8dfvyAR5jNAealK3VKA1ajDVmVqYGoNIavAS9S+vliTBg06eVpSZI/wBpdoqqm2MEsUQvJksAA6LjOM17IauX0y1k0+7QO0L2t08sfe9wsd14qRu8TvpFGHDN3o3cZZ0GB5h6XbLUjDDEi3lpYmWX03urkWzvAoy6wttb0slATjgE4IOCOc0DtROLl44m/pSBEKym1klukSYhWRw7MzhcbkPGCcY6Njqe0cF5JFGbKcQSxzIzhkVhLDyHjBP2Wwcg8crgkA5Hl9n9EuomncmJWmlMkklxbpJNI5J/qxTbQoBOCzMx3H7IAyD+z8ksmpXc8kElusq2nd94HG4LFKrAblXkEAnAx6S811ua52xvpEv3sn7th4aKZZI4+65LyKylcnptQg58z+Fe7uoMHaq1e40y+t4xulmsrqONSQoMjRMFGTwOSOTXPpeWqgA6DtwB/wBRD/iK93tRavPpt9bxDdLPZXUUa5AzI8LKoyeByR1rw4Y4FVR/i1ICAM4g0Uc4/j0BDWbYdNGI/wBZoI/4mvQ7Frnx84hFtFcXyyRRB7V8KtnbxEnuHdB6aPxnP61kWRB07Ozj/V6MP/frZ2Wt3SS+la0axS4uInjhY2+7attFGWIhdlHpKfPNB0ma8rtHrAs7cycGRvQiU+b46n8B1/8A2vRzXDf4Sd261POzbMPw3ZTP9mKs6PFXLmrW3SLNaa0mYchJKzMWY7mYlmY9SxOSTXTdh9c7ibw0h/YzsNp8kmPAP5Hgfp+NI1HQUi0yC7DAyMVZ+eGWTG1R+K8fq1c4pJIC53Ejbjru8sV6Kfj1OK1fHX7hzo5Y7RL7hmvAN47zX3eXbWkVtcRRJsW3wVa2hkyTIjEtvdx+QHFe2G9fXz/OuYMkaaheb5lgYPaTxM2D6fh3hbKnqNuRXlHWb5htxnVLnJxgLHYOzfa6KICT9h+nsn1UEbBmCrqtwxOzH7Kx2necIQ3cY9I8DnnyrFE9hHKJk1GOObu2jLNNE3otIzthXOFOSOgwMdOSKJ/AtG9ub+Hw8kEVsYlmiBNumRs353ZIZgWGDzkYPNBulm7tUZtRbZIpdHMNuUKej6ZZUwB6S8nAO4eulvOwwf6R2g54a1iDLjGSwIBQDK5LADkeuqn8FMIxJdRyd1C8XM0ah92z02VSFJBQEDGAeccDC4dOtQsiR3Q7qdO7lTvIn3x5Zim45YZMkuTkn08DGBgAvESR1t59Rdu7mt52iMEUZJguElXkJ9nfGBnz5rXeizvigWcC5i3dzPbuFuIWJIIVsEYJRgUbKtsIIODieAVp0n8SJJ1QIpYRHKAlh6K49LJPP49KammIjrIHYbHmk6IP8pLJIw3YztzIcjODtX8cgFvqbwskF5tV22qlyo221w54wMk91IT/AJtjzn0WbBx626uYvtROoJJa2wDW0gaOW6dEkjkXo6QI4KyY6GRhsU+2QVr2rC2EMSRBmYIioNzM52qMAFm5Y/ieT/YA2ZrmJf2mvANyLfTomT8DNPMW/wBhH+ldGWrl9afw+pWt1/VuI2tXPmZIy00aj80a5/8ACKD2dW0mG52M4ZJYW3QzRsY5omxjKsPL1g8GuR0eymh1OWyWSFu6hS4SXu3BUZWMI8cboF3BRwvoHuz6CnJbtxICARyCAQfwrju3cZtlbVYHeO6hjK4XBSZMg904PkT5jkZ68kEPeg1gq/c3aLbS5ARwxa2myxC93IQMN0yjcjIxuHNYtWs7lb+G+gSOcLDJbyQs4ifa7KwkVyDwCvI8wSeSAKLUJnupVs0G2FPDT3cuT0DiRbZRjkttG7nAU+e4Y9dmoOW1rVhNYXUjKYbnS5YbiVFfeFkhKT4R8DcjKCucDq3FdIrcH8Gcf+Y1wGsI0d5d2smHbV47a3iAOMRibEo/HCTSSZ64BHlmu5jfK59olv5E5H9mKBu6pSt1SgsNTFaswajDUGoNQXUCSxtFIqyRupVkYBlZT1BB6ilq1MDUHlXGm3ipttb6WIAAKJo4bwKo8tz4kJ/FmY/nXnf4u35dbgancLdIpQSGGF42iYqWVoi4TkquCoTGPOuoDUQag8TQ9Fuo7s3d1deKkaIRfu8duqoGJ4Cu2T09XnXShqzhqINQaA1XurOGog1A7dV7qTuq91A7dWHWdMju4TDJxzuRx1Rx0YfKtO6puratprMWr3DExExtL55c9kr9f2a7Zo1JK7ZQEGfPaxGDXs9muyJhkWe5Kl0OY4lO5VbyZj5keofrXV7qm6ruT/Rz3px+o/CGunpE7m7qzz2cTtudFZumSATj1c0e6puqgnL8FF02DHq5xQNptuesSH8xmn7qrdQZTo1r/wBHh92vyqf0Vb9BDGB/Dj+Vat1VuoOa7UWlpawx3PdQxd3eWTGQQxKyjxCZwQoP8vOreGfUSROrW9lkFbQ5WSVfJrojlVPXuRgkY3EAla9+eMOAD5MGHCnDA5BGRwfxHNWgCjAGB/8AefzoCgiWNQqgAAAdAOAMAYHAA8gOBR7qUWqi1AwtXm6/pq3ds8DMyFtrJIv24pUYNHKv4hgDjz5HnWwtQlqDnOzuuuN1pdqIrqAASKMlCD0lj9qJuSD5cg8g1v7SWBvLOSKJkEhG6J25QSDlG49TYP8AKr1nR4btQJAwZd2ySN2imjz12SL6S5wMjoccg1yknYt0YbJ/ERghjFeeMkDv7TlJdjfzj4oPa7OPJE7w3BtoppmllWKOUSTOTK7bi5ILAIUQDaMBPV09fUL+OCNpZWCIo6k4/lXHt2enxgRWULBkZJ1N+86soYAj7LDAZhw4HpH116enaAVZJbiaW7nQko8zZER/7OMEgH1Mxdh66AdPtnubjx06GMhXS3jcYeGJwA0jDylZQAF6qpOeWKj32agGAMDgChLUB7quk7qlBA1GGpIoxQODUYekiiFA8PRBqSKNaBoaiDUoVdA4NV7qUKKgZuq99KoqBm6pupYq6Bm6pupdSgZuqbqXUoGbqrdQGpQHuqt1DQ0B76otQ1RoLLVRahoTQEXoS1UaFqCy9AWqjQGgstQFqhoGoIWoC1Q0BoL3VdBUoP/Z"
                        alt="loup"
                      />
                      <div className="is-size-7">
                        France Nature Environnement Bourgogne Franche-Comté a
                        besoin de vos ‘gouttes’ pour soutenir son projet !
                      </div>
                    </Link>
                  </article>
                </div>
              </div>
              <div className="has-text-centered">
                <a href="/" className="button is-primary">
                  AFFICHER PLUS
                </a>
              </div>
            </div>
            <div className="column">
              <aside>
                <article
                  className="box agenda"
                  style={{ background: "#c61512" }}
                >
                  <h1
                    className="title saira has-text-centered"
                    style={{
                      fontSize: "2rem",
                      textAlign: "center",
                      color: "#fff",
                    }}
                  >
                    AGENDA
                  </h1>
                  <div>
                    <Link to="/agenda/" className="columns event">
                      <div className="column is-3 day">
                        <time dateTime="2020-06-20" className="is-size-2 saira">
                          20 <small className="is-size-6">juin</small>
                        </time>
                      </div>
                      <div className="column is-size-7">
                        <h2 className="is-size-6">Sortie Nature</h2>
                        <time dateTime="08:00">
                          <MdSchedule /> 8h00 - 12h00
                        </time>
                        <address>
                          <MdRoom /> Roches de Nans
                        </address>
                      </div>
                    </Link>
                    <Link to="/agenda/" className="columns event">
                      <div className="column is-3 day">
                        <time dateTime="2020-07-07" className="is-size-2 saira">
                          07 <small className="is-size-6">juillet</small>
                        </time>
                      </div>
                      <div className="column is-size-7">
                        <h2 className="is-size-6">Sigogne s’envole !</h2>
                        <time dateTime="2020-08-31">
                          <MdSchedule /> Tout l'été
                        </time>
                        <address>
                          <MdRoom /> Evènement virtuel
                        </address>
                      </div>
                    </Link>
                    <div className="has-text-right is-size-7 columns event">
                      <Link to="/agenda/" className="column">Voir plus &gt;</Link>
                    </div>
                  </div>
                  
                </article>
                <article className="box">
                  <h1 className="title" style={{ marginBottom: "0.5rem" }}>
                    Débat public
                  </h1>
                  <div
                    className="columns is-2 is-variable"
                    style={{ marginBottom: 0 }}
                  >
                    <div className="column is-4">
                      <Link to="/nos-programmes/debat-public/">
                        <Img
                          fluid={data.debatImg.childImageSharp.fluid}
                          objectFit="cover"
                          objectPosition="50% 50%"
                          alt="Débat public"
                        />
                      </Link>
                    </div>
                    <div className="column is-size-7 is-size-6-fullhd is-size-6-mobile">
                      Favoriser le dialogue environnemental sur notre territoire
                    </div>
                  </div>
                  <div className="has-text-right saira">
                    <Link to="/nos-programmes/debat-public/">
                      Découvrir &gt;{" "}
                    </Link>
                  </div>
                </article>
                <article className="box">
                  <h1 className="title" style={{ marginBottom: "0.5rem" }}>
                    Biodiversit'haies
                  </h1>
                  <div
                    className="columns is-2 is-variable"
                    style={{ marginBottom: 0 }}
                  >
                    <div className="column is-4">
                      <Link to="/nos-programmes/biodiversit-haies/">
                        <Img
                          fluid={data.haieImg.childImageSharp.fluid}
                          objectFit="cover"
                          objectPosition="50% 50%"
                          alt="Haie champêtre"
                        />
                      </Link>
                    </div>
                    <div className="column is-size-7 is-size-6-fullhd is-size-6-mobile">
                      Favoriser la biodiversité à l’échelle d’un territoire
                    </div>
                  </div>
                  <div className="has-text-right saira">
                    <Link to="/">Découvrir &gt; </Link>
                  </div>
                </article>
              </aside>
            </div>
          </div>
        </div>
      </section>
      <script type="application/ld+json">
        {JSON.stringify([
          {
            "@context": "https://schema.org",
            "@id": "https://www.fne-bfc.fr/#fne-bfc",
            "@type": "NGO",
            name: "FNE BFC",
            legalName: "France Nature Environnement Bourgogne Franche-Comté",
            url: "https://www.fne-bfc.fr/",
            logo: "https://www.fne-bfc.fr/logofnefc.png",
            description:
              "Fédération régionale des associations de protection de la Nature et de l'environnement en Bourgogne Franche-Comté",
            address: [
              {
                "@type": "PostalAddress",
                addressLocality: "Besançon",
                postalCode: "25000",
                streetAddress:
                  "Maison de l’environnement de Franche-Comté - 7 rue Voirin",
                telephone: "+33381613644",
              },
            ],
          },
        ])}
      </script>
    </Layout>
  )
}

export default IndexPage
