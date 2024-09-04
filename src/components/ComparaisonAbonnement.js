import React from "react";
import coche from '../assets/coche.svg';
import croix from '../assets/croix.svg'
import '../styles/ComparaisonAbonnement.css';

function ComparaisonAbonnement(){
    return(
        <>
        <section className="comparatif-section container">
        <div className="text-content row">
            <div className="titre-wrapper col col-1440-10">
            <h2>COMPARAISON DE NOS DEUX <br/> FORMULES D'ABONNEMENT</h2>
            </div>
      </div>
      <div className="rectangle-comparatif-row row">
        <div className="rectangle-comparatif-column col col-1440-12">
          <div className="rectangle-comparatif">
            <div className="abonnement abonnement-premium col col-1440-6">
              <div className="titre-wrapper">
                <h3>ABONNEMENT PREMIUM</h3>
              </div>
              <div className="comparatif-wrapper">

                <div className="comparatif">
                  <div className="icon-wrapper">
                    <img src={coche} loading="lazy" className="coche" alt="Icon valider"/>
                  </div>
                  <div className="comparatif-texte">
                    <p>Programme sportif personnalisé fourni le dimanche pour la semaine à venir. En fonction de vos objectifs, de vos restrictions et de vos préférences.</p>
                  </div>
                </div>
                <div className="comparatif">
                  <div className="icon-wrapper">
                    <img src={coche} className="coche" loading="lazy" alt="Icon valider"/>
                  </div>
                  <div className="comparatif-texte">
                    <p>4 recettes nutritionnelles fournies chaque semaine, en fonction de vos objectifs, de vos restrictions alimentaires ainsi que de vos préférences.</p>
                  </div>
                </div>
                <div className="comparatif">
                  <div className="icon-wrapper">
                    <img src={coche} className="coche" loading="lazy" alt="Icon valider"/>
                  </div>
                  <div className="comparatif-texte">
                    <p>Un suivi nutritionnel afin de pouvoir vous conseiller et vous orienter vers des choix en adéquation avec vos objectifs sportifs. Cela vous permettra de voir des changements plus rapidement.</p>
                  </div>
                </div>
                <div className="comparatif">
                  <div className="icon-wrapper">
                    <img src={coche} className="coche" loading="lazy" alt="Icon valider"/>
                  </div>
                  <div className="comparatif-texte">
                    <p>Je vous accompagnerai tout au long du processus, en vous guidant vers vos objectifs de manière personnalisée. Je corrigerai vos mouvements pour garantir une exécution correcte et sécuritaire, j'optimiserai votre nutrition pour maximiser vos résultats, et je vous fournirai des conseils sur bien d'autres aspects essentiels pour votre réussite.</p>
                  </div>
                </div>

              </div>
            </div>
            
            <div className="abonnement abonnement-standard col col-1440-6">
              <div className="titre-wrapper">
                <h3>ABONNEMENT STANDARD</h3>
              </div>
              <div className="comparatif-wrapper">

                <div className="comparatif">
                  <div className="icon-wrapper">
                    <img src={coche} className="coche" loading="lazy" alt="Icon valider"/>
                  </div>
                  <div className="comparatif-texte">
                    <p>Programme sportif personnalisé fourni le dimanche pour la semaine à venir. En fonction de vos objectifs, de vos restrictions et de vos préférences.</p>
                  </div>
                </div>
                <div className="comparatif">
                  <div className="icon-wrapper">
                    <img src={coche} className="coche" loading="lazy" alt="Icon valider"/>
                  </div>
                  <div className="comparatif-texte">
                    <p>1 recette nutritionnelle fournie chaque semaine, en fonction de vos objectifs, de vos restrictions alimentaires ainsi que de vos préférences.</p>
                  </div>
                </div>
                <div className="comparatif">
                  <div className="icon-wrapper">
                    <img src={croix} className="croix" loading="lazy" alt="Icon croix"/>
                  </div>
                  <div className="comparatif-texte">
                    <p>Un suivi nutritionnel afin de pouvoir vous conseiller et vous orienter vers des choix en adéquation avec vos objectifs sportifs. Cela vous permettra de voir des changements plus rapidement.</p>
                  </div>
                </div>
                <div className="comparatif">
                  <div className="icon-wrapper">
                    <img src={croix} className="croix" loading="lazy" alt="Icon croix"/>
                  </div>
                  <div className="comparatif-texte">
                    <p>Je vous accompagnerai tout au long du processus, en vous guidant vers vos objectifs de manière personnalisée. Je corrigerai vos mouvements pour garantir une exécution correcte et sécuritaire, j'optimiserai votre nutrition pour maximiser vos résultats, et je vous fournirai des conseils sur bien d'autres aspects essentiels pour votre réussite.</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
        </>
    );
}


export default ComparaisonAbonnement;