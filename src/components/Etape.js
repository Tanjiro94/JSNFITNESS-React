import React, {useRef, useEffect} from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import '../styles/Etape.css';
import Etape1 from "../assets/etape-1.webp";
import Etape2 from "../assets/accompagnement.webp";
import Etape3 from "../assets/etape-3.webp";
import Etape4 from "../assets/etape-4.webp";


function Etape() {

    

    const etapeWrapper = useRef(null);
    const etapes = useRef([]);

    useEffect(() => {
        if (window.innerWidth > 1290) {
            gsap.registerPlugin(ScrollTrigger);
    
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: etapeWrapper.current,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: true,
                    snap: {
                        snapTo: 0.05,
                        stagger: 0.2,
                        duration: { min: 0.1, max: 0.2 },
                        ease: "power1.inOut"
                    }
                }
            });
    
            etapes.current.forEach((etape, index) => {
                if (index > 0 && etape) {
                    const hauteur = etape.clientHeight;
                    gsap.set(etape, { y: -hauteur * index, opacity: 0 });
                    timeline.to(etape, {
                        y: 0,
                        opacity: 1,
                        duration: 1
                    });
                }
            });
        }
    }, []);
    
    return(
        <>
        <section className="etape-section container" id="etapes">
            <div className="text-content row">
                <div className="titre-wrapper col col-1440-8">
                    <h2>C'EST SIMPLE, <br/> RAPIDE ET EFFICACE</h2>
                </div>
            </div>
        <div className="etape-wrapper " ref={etapeWrapper}>

        <div className="etape etape-1 row" ref={el => etapes.current [0]= el }>
          <div className="left-wrapper col col-1440-6 col-992-12 col-768-6 col-481-6 col-350-4">
            <div className="img-wrapper">
              <img src={Etape1} loading="lazy" alt="Image pour représneter l'étape numéro 1"/>
            </div>
          </div>
          <div className="right-wrapper col col-1440-6 col-992-12 col-768-6 col-481-6 col-350-4">
            <div className="titre-wrapper">
              <h3>01. ABONNE TOI</h3>
            </div>
            <div className="desc-wrapper">
              <p>Pour répondre au mieux à tes besoins et à tes attentes, je te propose plusieurs formules d'abonnement. Prends le temps de choisir celle qui te convient le mieux. Il y a deux options principales : l'offre Premium et l'offre Standard. Chacune de ces offres est conçue pour répondre à des exigences spécifiques et offrir des avantages uniques.
                Pour en savoir plus sur chaque formule, je t'invite à consulter les détails disponibles sur leurs pages respectives. Tu y trouveras toutes les informations nécessaires pour faire un choix éclairé, telles que les fonctionnalités incluses, les tarifs.</p>
            </div>
            <div className="btn-wrapper">
              <a href="abonnement-premium.html"><button>ABONNEMENT PREMIUM</button></a>
              <a href="abonnement-standard.html"><button>ABONNEMENT STANDARD</button></a>
            </div>
          </div>
        </div>
        <div className="etape etape-2 row" ref={el => etapes.current [1]= el }>
          <div className="left-wrapper col col-1440-6 col-992-12 col-768-6 col-481-6 col-350-4">
            <div className="img-wrapper">
              <img src={Etape2} loading="lazy" alt="Image pour représneter l'étape numéro 2"/>
            </div>
          </div>
          <div className="right-wrapper col col-1440-6 col-992-12 col-768-6 col-481-6 col-350-4">
            <div className="titre-wrapper">
              <h3>02. APPEL DECOUVERTE</h3>
            </div>
            <div className="desc-wrapper">
              <p>Une fois que vous aurez souscrit à l’une des formules, nous organiserons ensemble un rendez-vous en visioconférence. Cette première rencontre nous permettra de faire connaissance et d’en apprendre davantage sur vous.
                Au cours de cet appel, nous prendrons le temps de discuter de vos objectifs, de vos contraintes, ainsi que de tout autre élément pertinent pour la suite de notre collaboration. Cette discussion est essentielle pour me permettre de mieux comprendre vos besoins et d’adapter le service en conséquence.
                De plus, je vous expliquerai en détail le fonctionnement de notre collaboration pour que vous ayez une vision claire des étapes à venir. Ce premier échange sera donc l’occasion de poser toutes vos questions et de vous sentir pleinement accompagné dès le début de notre collaboration.</p>
            </div>
          </div>
        </div>
        <div className="etape etape-3 row" ref={el => etapes.current [2]= el }>
          <div className="left-wrapper col col-1440-6 col-992-12 col-768-6 col-481-6 col-350-4">
            <div className="img-wrapper">
              <img src={Etape3} loading="lazy" alt="Image pour représneter l'étape numéro 3"/>
            </div>
          </div>
          <div className="right-wrapper col col-1440-6 col-992-12 col-768-6 col-481-6 col-350-4">
            <div className="titre-wrapper">
              <h3>03. VOTRE ESPACE CLIENT</h3>
            </div>
            <div className="desc-wrapper">
              <p>À l'issue de notre appel découverte, vous recevrez les informations nécessaires pour accéder à votre espace client. Cet espace se trouve sur la plateforme en ligne, appelée Notion. C’est ici que vous pourrez consulter toutes les informations relatives à votre abonnement.
                Dans votre espace client, vous trouverez une multitude de ressources conçues pour vous aider à atteindre vos objectifs. Cela inclut vos programmes sportifs personnalisés, des recettes adaptées à vos besoins nutritionnels, et bien d'autres informations utiles. Chaque élément est organisé de manière claire et accessible, afin que vous puissiez facilement naviguer et trouver ce dont vous avez besoin.</p>
            </div>
          </div>
        </div>
        <div className="etape etape-4 row" ref={el => etapes.current [3]= el }>
          <div className="left-wrapper col col-1440-6 col-992-12 col-768-6 col-481-6 col-350-4">
            <div className="img-wrapper">
              <img src={Etape4} loading="lazy" alt="Image pour représneter l'étape numéro 4"/>
            </div>
          </div>
          <div className="right-wrapper col col-1440-6 col-992-12 col-768-6 col-481-6 col-350-4">
            <div className="titre-wrapper">
              <h3>04. A NOUS DE JOUER</h3>
            </div>
            <div className="desc-wrapper">
              <p>Maintenant, c'est ensemble que nous allons écrire la suite de votre histoire. N'oubliez pas qu'à deux, nous sommes plus forts et que nous pourrons surmonter tous les défis. La collaboration et le soutien mutuel sont au cœur de notre approche, et nous croyons fermement que c'est en travaillant main dans la main que nous atteindrons vos objectifs.</p>
            </div>
            <div className="btn-wrapper">
              <button><a href="abonnement-premium.html">ABONNEMENT PREMIUM</a></button>
              <button><a href="abonnement-standard.html">ABONNEMENT STANDARD</a></button>
            </div>
          </div>
        </div>

      </div>
    </section>
        </>
    );
}

export default Etape;