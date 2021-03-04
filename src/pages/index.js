import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Header from "../components/header"
import Drag from "../components/drag"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <section className="hero_section">
      <div className="text_container">
        <h1>Architecture</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, quis qui culpa ab libero maiores.</p>
        <Link to="/project_1">Voir mon travaille</Link>
      </div>
      <Drag />
    </section>
    <section className="a_propos" id="about">
      <Image alt="image" filename="architect.jpg" />
      <div className="text_container">
        <h2>A propos</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, vitae harum accusamus autem quia ea, obcaecati libero, praesentium ratione enim illum cupiditate nemo quasi. Fugiat adipisci optio esse architecto.</p>
      </div>
   </section>

  </Layout>
)

export default IndexPage
