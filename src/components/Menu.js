import React, { useEffect, useRef } from "react";
import '../styles/Menu.css';
import logo from '../assets/logo-menu.svg';
import panier from '../assets/panier.svg';
import gsap from "gsap";

function Menu ({ isOpen, setIsMenuOpen }) {

  const menuRef = useRef();
  const secitons = document.querySelectorAll('section');
  const lis = document.querySelectorAll('.nav-menu-wrapper .nav-menu .links-wrapper ul li');
  const btnMenuRef = useRef();

  useEffect(()=>{
    if(isOpen){
      animateNavSlide();
    }else{
      closeNavSlide();
    }
    
  }, [isOpen]);

  const handleClose = () =>{
    setIsMenuOpen(false);
  }

  const animateNavSlide = ()=>{
    gsap.to(menuRef.current, {
      left:0,
      duration:1,
      ease:"Quart.easeOut",
    })
    gsap.from('.nav-menu-wrapper .nav-menu .links-wrapper ul li span', {
      stagger:0.1,
      filter:"blur(5px)",
      yPercent:200,
      duration:1.25,
      ease:"Quart.easeInOut",
    })
    gsap.to('section', {
      filter: "blur(10px)",
      duration: 1,
      ease: "Quart.easeOut",
    });
  }
  const closeNavSlide = () =>{
    gsap.to(menuRef.current, {
      left:"-100%",
      duration:1,
      ease:"Quart.easeIn",
    })
    gsap.to('section', {
      filter: "blur(0px)",
      duration: 1,
      ease: "Quart.easeOut",
    });
  }


  secitons.forEach(section=>{
    section.addEventListener('click',()=>{
      closeNavSlide();
      setIsMenuOpen(false);
    });
  });
  lis.forEach(li=>{
    li.addEventListener('click',()=>{
      closeNavSlide();
      setIsMenuOpen(false);
    });
  });



    return (
        <div className={`nav-menu-wrapper`} ref={menuRef}>
        <div className="nav-menu">
          <div className="en-tete">
            <div className={`close`} onClick={handleClose}>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
            <div className="logo-wrapper">
              <a href="/"><img src={logo} alt="Logo de JSNFITNESS"/></a>
            </div>
            <div className="panier-icon">
              <a href="panier.html"><img src={panier} alt="Icon de panier"/></a>
              <a href="panier.html"><div className="nb-panier-wrapper">
                <span className="anton-font">0</span>
              </div></a>
            </div>
            
          </div>
          
          <div className="links-wrapper">
            <ul>
              <li><span><a href="/">ACCUEIL</a></span></li>
              <li><span><a href="#a-propos">A PROPOS</a></span></li>
              <li><span><a href="/Abonnement Premium">PREMIUM</a></span></li>
              <li><span><a href="/Abonnement Standard">STANDARD</a></span></li>
            </ul>
          </div>
          <div className="pied">
            <p><a href="mailto:simonnjason@gmail.com">Contact</a></p>
            <p><a href="mentions-legales.html">Mentions Légales</a></p>
            <a href="#faq" onClick={()=>{closeNavSlide(); setIsMenuOpen(false);}}><button>QUESTIONS REPONSES</button></a>
          </div>
  
        </div>
      </div>
      
    );
}

export default Menu;