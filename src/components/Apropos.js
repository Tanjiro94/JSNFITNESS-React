import React from "react";
import logo from "../assets/logo.svg";
import photoJason from "../assets/a-propos.webp";
import '../styles/Apropos.css';

function Apropos() {
    return(
        <>
        <div className="a-propos-wrapper row">
        <div className="left-wrapper col col-1440-5 col-992-10">
          <div className="titre-wrapper">
            <h2>JSNFITNESS COACH SPORTIF</h2>
          </div>
          <div className="desc-wrapper">
            <p>Guidé par des valeurs telles que la discipline et la détermination, et animé par ma passion pour le sport, je suis Jason Simon, votre coach sportif personnalisé en ligne en France. Je partage mon expertise avec tous les athlètes motivés. Que vous visiez une préparation physique générale, une perte de poids, ou tout autre objectif, je m’engage à faire de vos aspirations les miennes. Le sport est une part essentielle de ma vie quotidienne, et j’aimerais qu’il en soit de même pour vous, grâce à un accompagnement sur mesure en coaching sportif et nutritionnel.</p>
          </div>
          <div className="a-propos-btn-wrapper">
            <a href="#abonnement"><button><span>LES ABONNEMENTS</span></button></a>
          </div>
        </div>
        <div className="right-wrapper col col-1440-6 col-992-8">
          <div className="img-wrapper">
            <img src={photoJason} loading="lazy" alt="Photo du coach Jason Simon de JSNFITNESS"/>
          </div>
        </div>
      </div>
    
    <div className="logo-anime-wrapper row ">
      <div className="img-wrapper col col-1440-12">
          <img src={logo} loading="lazy" alt=""/>
          <img src={logo} loading="lazy" alt=""/>
          <img src={logo} loading="lazy" alt=""/>
          <img src={logo} loading="lazy" alt=""/>
          <img src={logo} loading="lazy" alt=""/>
          <img src={logo} loading="lazy" alt=""/>
          <img src={logo} loading="lazy" alt=""/>
          <img src={logo} loading="lazy" alt=""/>
          <img src={logo} loading="lazy" alt=""/>
          <img src={logo} loading="lazy" alt=""/>
      </div>
      </div>

        </>
    );
}


export default Apropos