import React, { useState } from "react";
import Carousel from "../components/Carousel";
import { motion, useScroll, useTransform } from "framer-motion";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { scrollYProgress } = useScroll(); // Détecte le scroll
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 2]); // Grossissement
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -100]); // Déplacement vers le haut
  const opacity = useTransform(scrollYProgress, [0.15, 0.2], [1, 0]); // Disparition progressive

  const titles = [
    "Projet 1",
    "Projet 2",
    "Projet 3",
  ];
  const texts = [
    "Texte correspondant au projet 1",
    "Texte correspondant au projet 2",
    "Texte correspondant au projet 3",
  ];
  const descriptions = [
    "Texte correspondant à la description 1",
    "Texte correspondant à la description 2",
    "Texte correspondant à la description 3",
  ];

    return (
      <div className='home'>
        <div className='top-page'>
          <motion.img style={{ scale, y, opacity }} className="home-title" src="/media/SymbioseLogo2.png">
          </motion.img>
        </div>

        <div className="space-bar"></div>

        <div className='home-info'>
          <div className="home-info-partie1">
            <div className="info-partie1-img-zone">
              <div className="info-partie1-img"></div>
              <h1>Création artistique</h1>
            </div>
            <div className="home-info-partie1-a">
              <div className="home-info-partie1-a-texte">
                <h1><strong>01</strong> Nos services</h1>
                <p>Artisan spécialisé en décoration murale,
                   je mets mon savoir-faire au service de vos
                    projets pour sublimer vos espaces. Expert
                     en enduit à la chaux, peinture à la chaux
                      et stucco, je vous propose des finitions
                       uniques alliant élégance et authenticité.
                        Que ce soit pour un intérieur raffiné ou
                         une façade au cachet intemporel, je vous
                          accompagne avec des techniques artisanales
                           et des matériaux nobles pour un rendu sur-mesure.
                </p>
              </div>
            </div>
          </div>
          <div className="home-info-partie2">
            <div className="info-partie1-img-zone">
              <div className="info-partie2-img"></div>
              <h1>Qualité et durabilité</h1>
            </div>
          </div>
        </div>
        <div className='home-info'>
          <div className="home-info-partie1">
            <div className="info-partie1-img-zone">
              <div className="info-partie3-img"></div>
              <h1>Création sur mesure</h1>
            </div>
            <div className="home-info-partie1-a">
              <div className="home-info-partie1-a-texte">
                <h1><strong>02</strong> Qui somme nous</h1>
                <p>Fort de mon expertise en décoration murale
                   et en finitions haut de gamme, j’ai eu l’honneur
                    d’intervenir sur des projets d’exception.
                     Du Palais-Royal de Paris au château de
                      Saint-Mesme, en passant par l’Hôtel de la
                       Zoologie, j’apporte mon savoir-faire aux
                        lieux les plus prestigieux. Mon travail
                         s’étend également à des résidences privées
                          de renom, comme plusieurs villas à
                           Saint-Tropez, un chalet de 800 m² à Saint-Gérys
                            ou encore un palais au Portugal. Chaque projet
                             est une nouvelle occasion de sublimer
                              l’architecture avec des techniques artisanales
                               et des matériaux nobles.
                </p>
              </div>
            </div>
          </div>
          <div className="home-info-partie2">
            <div className="info-partie1-img-zone">
              <div className="info-partie4-img"></div>
              <h1>Qualité et durabilité exeptionelle</h1>
            </div>
          </div>
        </div>

        <div className="space-bar"></div>
        <div className="space-bar"></div>

        <div className="texte-projet">
          <div className="texte-info-partie1-a">
            <div className="texte-info-partie1-a-texte">
              <h1><strong>03 </strong>  Nos dernières réalisations</h1>
            </div>
          </div>
          <div className="texte-info-partie1-a">
            <div className="texte-info-partie1-a-texte">
              <p>Que ce soit pour concevoir des sites vitrines percutants,
                   développer des plateformes e-commerce dynamiques ou optimiser
                    la visibilité avec notre savoir-faire en référencement,
                     nous transcendons les frontières du digital en intégrant
                      une dimension graphique captivante.
              </p>
            </div>
          </div>
          
        </div>

        <div className='home-page'>
          <div className='description1-carusel'>
            <Carousel onSlideChange={setCurrentSlide}/>
          </div>
          
          <div className='description2-texte'>
            <h1>{titles[currentSlide]}</h1>
            <h2>{texts[currentSlide]}</h2>
            <p>{descriptions[currentSlide]}</p>
          </div>
        </div>

        <div className='home-space'>
          <div className='space-link'>
            <div className="space-link-box">
              <h1>Création d'espace</h1>
              <p>Si vous recherchez une entreprise spécialisée
                 en rénovation et travaux, nous mettons, en
                  collaboration avec nos partenaires, notre expertise
                   à votre service pour concrétiser vos projets.
              </p>
            </div>
          </div>
        </div>

        <div className='home-contact'></div>
      </div>
    );
  }
  
  export default Home;
  