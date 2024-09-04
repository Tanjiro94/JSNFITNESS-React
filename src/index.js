import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Lenis from 'lenis'
import reportWebVitals from './reportWebVitals';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';


const root = ReactDOM.createRoot(document.getElementById('root'));

gsap.registerPlugin(ScrollTrigger);


const lenis = new Lenis({
  duration: 1, 
  easing: (t) => 1 - Math.pow(1 - t, 3),
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
