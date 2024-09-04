import React, { useEffect, forwardRef, useRef } from "react";
import logo from '../assets/logo.svg';
import '../styles/NavBar.css';
import gsap from "gsap";

const NavBar = forwardRef(({ onMenuToggle, isOpen }, navBar) => {

    useEffect(() => {
        if (isOpen) {
            animateNavSlide();
        } else {
            closeNavSlide();
        }
    }, [isOpen]);

    const animateNavSlide = () => {
        gsap.to(navBar.current, {
            opacity: 0,
            duration: 1,
            ease: "Quart.easeInOut",
        });
    };

    const closeNavSlide = () => {
        gsap.to(navBar.current, {
            opacity: 1,
            duration: 1,
            ease: "Quart.easeInOut",
        });
    };

    return (
        <div className="nav-bar-fixed container" ref={navBar}>
            <nav className="col col-1440-12">
                <div className="hamburger" onClick={onMenuToggle}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                <div className="logo-wrapper">
                    <a href="/"><img src={logo} loading="lazy" alt="Logo de JSNFIT" /></a>
                </div>
                <div className="btn-wrapper">
                    <a href="/panier"><button><span>Panier (0)</span></button></a>
                </div>
            </nav>
        </div>
    );
});

export default NavBar;
