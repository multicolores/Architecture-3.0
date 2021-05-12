import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import ImageParallax from "../components/image_parallax"
import SEO from "../components/seo"
import Header from "../components/header"
import Drag from "../components/drag"


const IndexPage = () => {
  return(
    <Layout>
        <SEO title="Home" />
        <Header />
        <section className="hero_section">
          <Link to="/project_1">
            <h1>Portfolio</h1>
          </Link>
          <div className="images_bigcontainer">
            <div className="ImgContainer img1" >
                <ImageParallax alt="image" filename="image1.jpg" />
            </div>
            <div className="ImgContainer img2" data-scroll data-scroll-speed="1.6">
                <ImageParallax alt="image" filename="image_interieur.jpg" />
            </div>
            <div className="ImgContainer img3">
                <ImageParallax alt="image" filename="image4.jpg" />
            </div>
          </div>
        </section>

        {/* <section className="hero_section">
          <div className="text_container">
            <h1>Architecture</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, quis qui culpa ab libero maiores.</p>
            <Link to="/project_1">Voir mon travaille</Link>
          </div>
          <Drag />
        </section> */}

        <h1 className="workTitle">works</h1>

        <section className="work_section">
          <WorkImage image="image1.jpg" work_name="Projet 1" url="/project_1"/>
          <WorkImage image="image2.jpg" work_name="Projet 2" url="/project_2"/>
          <WorkImage image="image3.jpg" work_name="Projet 3" url="/project_3"/>
          <WorkImage image="image4.jpg" work_name="Projet 4" url="/project_4"/>
        </section>

        <section className="a_propos" id="about">
          <Image alt="image" filename="architect.jpg" />
          <div className="text_container">
            <h2>A propos</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, vitae harum accusamus autem quia ea, obcaecati libero, praesentium ratione enim illum cupiditate nemo quasi. Fugiat adipisci optio esse architecto.</p>
          </div>
      </section>

      </Layout>
  );
};

export const WorkImage = (props) => {
  return (
    <div className="work_item">
      <Link to={props.url}>
      <h3 data-scroll data-scroll-speed="3">{props.work_name}</h3>
      <div className="ImgContainer"><Image alt="image" filename={props.image} /></div>
      </Link>
    </div>

  );
};
  


export default IndexPage
