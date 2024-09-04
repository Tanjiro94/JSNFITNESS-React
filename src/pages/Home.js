import React, { forwardRef } from "react";
import '../styles/Home.css';
import video from '../assets/hero.mp4';
import Apropos from "../components/Apropos";
import Avantage from "../components/Avantage";
import Abonnement from "../components/Abonnement";
import ComparaisonAbonnement from "../components/ComparaisonAbonnement";
import Etape from "../components/Etape";

const Home = forwardRef((props, heroSectionRef) => {
  return (
    <>
      <section className="hero-section container" ref={heroSectionRef}>
        <div className="content row ">
          <div className="title col col-1440-12">
            <h1>Coaching Personnalisé <br /> pour les Athlètes</h1>
          </div>
          <div className="desc-wrapper col col-1440-6">
            <p>
              Atteignez vos objectifs les plus ambitieux et réalisez vos préparations physiques en toute sérénité grâce à un coaching sportif personnalisé et des plans alimentaires perte de poids adaptés à vos besoins.
            </p>
          </div>
          <div className="devise-container col col-1440-10 col-992-12 col-768-6">
            <p className="anton-font">ENSEMBLE NOUS SOMMES</p>
            <p className="anton-font">VRAIMENT IMBATTABLE</p>
          </div>
        </div>
        <div className="mask-video"></div>
        <div className="video-hero">
          <video autoPlay loop muted>
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </section>
      <section className="a-propos container" id="a-propos">
        <Apropos />
        <Avantage />
      </section>
      <Abonnement />
      <ComparaisonAbonnement />
      <Etape />
    </>
  );
});

export default Home;
