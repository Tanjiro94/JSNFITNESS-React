import React, {useEffect, useRef} from "react";
import '../styles/Avantage.css';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Avantage() {

  const rect2Ref = useRef(null);
  const rect4Ref = useRef(null);
  const avantageWrapperRef = useRef(null);

  useEffect(() => {
    const avantageWrapper = avantageWrapperRef.current;
    const rect2 = rect2Ref.current;
    const rect4 = rect4Ref.current;

    gsap.to(rect2, {
        scrollTrigger: {
            trigger: avantageWrapper,
            start: 'bottom center',
        },
        y: 0,
        duration: 1,
        ease: "Quart.easeOut",
    });
    gsap.to(rect4, {
        scrollTrigger: {
            trigger: avantageWrapper,
            start: 'bottom center',
        },
        y: 0,
        duration: 1,
        ease: "Quart.easeOut",
    });

}, []);

    return(
        <>
        <div className="avantage-wrapper row" ref={avantageWrapperRef}>
        <div className="titre-wrapper col col-1440-7 col-992-7">
          <h2>EN QUELQUES MOTS JSNFITNESS, C'EST</h2>
        </div>
        </div>

        <div className="avantage-rectangle-wrapper row">
          <div className="avantage-rect-1 col col-1440-3 col-992-6 col-768-6 col-481-6 col-350-4">
            <div className="avantage-rectangle">
              <div className="avantage-titre">
              <p className="anton-font">Adaptation Individuelle</p>
            </div>
            <div className="avantage-desc">
              <p>Chaque programme est conçu pour répondre à vos besoins spécifiques, en tenant compte de votre niveau de forme physique, de vos objectifs personnels, et de vos contraintes de temps.</p>
            </div>
            </div>
          </div>
          <div className="avantage-rect-2 col col-1440-3 col-992-6 col-768-6 col-481-6 col-350-4" ref={rect2Ref}>
            <div className="avantage-rectangle">
              <div className="avantage-titre">
              <p className="anton-font">Adaptation Individuelle</p>
            </div>
            <div className="avantage-desc">
              <p>Chaque programme est conçu pour répondre à vos besoins spécifiques, en tenant compte de votre niveau de forme physique, de vos objectifs personnels, et de vos contraintes de temps.</p>
            </div>
            </div>
          </div>
          <div className="avantage-rect-3 col col-1440-3 col-992-6 col-768-6 col-481-6 col-350-4">
            <div className="avantage-rectangle">
              <div className="avantage-titre">
              <p className="anton-font">Adaptation Individuelle</p>
            </div>
            <div className="avantage-desc">
              <p>Chaque programme est conçu pour répondre à vos besoins spécifiques, en tenant compte de votre niveau de forme physique, de vos objectifs personnels, et de vos contraintes de temps.</p>
            </div>
            </div>
          </div>
          <div className="avantage-rect-4 col col-1440-3 col-992-6 col-768-6 col-481-6 col-350-4" ref={rect4Ref}>
            <div className="avantage-rectangle">
              <div className="avantage-titre">
              <p className="anton-font">Adaptation Individuelle</p>
            </div>
            <div className="avantage-desc">
              <p>Chaque programme est conçu pour répondre à vos besoins spécifiques, en tenant compte de votre niveau de forme physique, de vos objectifs personnels, et de vos contraintes de temps.</p>
            </div>
            </div>
          </div>
          

        </div>
        </>
    )
}


export default Avantage;