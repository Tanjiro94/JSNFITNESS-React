import React, {useRef, useEffect} from "react";
import '../styles/Abonnement.css';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Abonnement() {

    const cardAbonnement = useRef(null);
    const abonnementCardWrapper = useRef(null);

    useEffect(()=>{
        gsap.to(cardAbonnement.current,{
            scrollTrigger:{
              trigger: abonnementCardWrapper.current,
              start: 'top center',
            },
            y:0,
            duration:1,
            ease:"Quart.easeOut",
          })
    })

    return(
        <>
        <section className="abonnement-section container" id="abonnement">
        <div className="text-wrapper row">
            <div className="titre-wrapper col col-1440-10">
            <h2>DEUX Offres de Coaching <br/> Sportif Personnalisé </h2>
            </div>
            <div className="desc-wrapper col col-1440-6">
            <p>J'ai décidé de proposer deux offres distinctes pour répondre précisément aux besoins variés de mes clients. Mes programmes sont minutieusement conçus pour s'adapter aux objectifs personnels et niveaux d'engagement de chaque athlète, assurant ainsi une approche sur mesure et efficace.</p>
            </div>
      </div>
      <div className="abonnement-card-wrapper row" ref={abonnementCardWrapper}>
        <div className="abonnement-card-column col col-1440-6 col-992-6 col-768-6 col-481-6 col-350-4">
          <a href="abonnement-premium.html"><div className="abonnement-card abonnement-premium">
            <div className="text-content">
              <div className="titre-wrapper">
                <h3>ABONNEMENT PREMIUM</h3>
              </div>
              <div className="prix-wrapper">
                <p className="anton-font">250 € / mois</p>
              </div>
            </div>
          </div></a>
        </div>
        <div className="abonnement-card-column col col-1440-6 col-992-6 col-768-6 col-481-6 col-350-4" ref={cardAbonnement}>
          <a href="abonnement-standard.html"><div className="abonnement-card abonnement-standard">
            <div className="text-content">
              <div className="titre-wrapper">
                <h3>ABONNEMENT STANDARD</h3>
              </div>
              <div className="prix-wrapper">
                <p className="anton-font">100 € / mois</p>
              </div>
            </div>
          </div></a>
        </div>

      </div>
    </section>
        </>
    )
}


export default Abonnement;