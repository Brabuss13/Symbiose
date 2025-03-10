import React, { useState, useEffect } from "react";
import LoadingScreen from '../components/LoadingScreen';
import Carousel from "../components/Carousel";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
// import { motion, useScroll, useTransform } from "framer-motion";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);
  
  const [currentSlide, setCurrentSlide] = useState(0);
  // const { scrollYProgress } = useScroll();
  // const scale = useTransform(scrollYProgress, [0, 0.2], [1, 2]);
  // const y = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  // const opacity = useTransform(scrollYProgress, [0.15, 0.2], [1, 0]);

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

  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

    return (
      <div className='home'>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        {loading ? (
                <LoadingScreen onFinish={() => setLoading(false)} />
            ) : (
                <div className="home-containers"></div>
            )}
        <div className='top-page'>
          {/* <div className="parent-home-title">
            {showAnimation && (
              <motion.img 
                style={{ scale, y, opacity }} 
                className={`home-title ${menuOpen ? "hide-logo" : ""}`}
                src="/media/logosymbiose.png"
                alt="illustration"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity:1, scale: 1 }}
                transition={{ duration:1, ease: "easeOut" }}
                ></motion.img>
            )}
          </div> */}
          <div className="parent-text-line">
            {showAnimation && (
              <motion.p
                initial={{ x: "-100vw", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="text-line text-line-1"><strong>Sublimez votre intérieur</strong>
              </motion.p>
            )}
            {showAnimation && (
              <motion.p
                initial={{ x: "100vw", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="text-line text-line-2"><span>fait partie de mon idéal de vie</span>
              </motion.p>
            )}
          </div>
          <div className="space-bar"></div>
          <div className="parent-scroll-line">
            <h2>Découvrir</h2>
            <div className="logo-container">
              <svg className="scroll-arrow" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 9l6 6 6-6"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="space-bar"></div>

        <div className="home-information">
          <div className="home-information-box1 home-information-box">
            <div className="home-information-box1-content1 home-information-box1-content">
              <div className="box1-content-box-img">
                <div className="box1-content-box-img-background">
                  <div className="box1-content-box-img-background-img"></div>
                </div>
                <div className="box1-content-box-img-text">
                  <div className="box1-content-box-img-text-text">Création artistique</div>
                </div>
              </div>
            </div>
            <div className="home-information-box1-content2 home-information-box1-content">
              <div className="home-information-box1-content2-box">
                <h1><strong>01</strong>Nos services</h1>
                <p>Artisan spécialisé en décoration d'ambiance intérieure,
                    je mets mon savoir-faire au service de vos
                    projets pour sublimer vos espaces. Expert
                    en enduit décoratif, béton ciré (Mortex), stucco dont le travail
                    à la chaux. Je vous propose des finitions
                    uniques alliant élégance et authenticité.
                    Pour votre intérieur raffiné, je vous
                    accompagne avec des techniques artisanales
                    et des matériaux nobles pour un rendu qui 
                    satisfera toutes vos exigences.
                  </p>
              </div>
            </div>
          </div>

          <div className="home-information-box2 home-information-box">
            <div className="home-information-box2-content">
              <div className="home-information-box2-content-img"></div>
              <div className="home-information-box2-content-text">Qualité et durabilité</div>
            </div>
          </div>

          <div className="home-information-box1 home-information-box">
            <div className="home-information-box1-content1 home-information-box1-content">
              <div className="box1-content-box-img">
                <div className="box1-content-box-img-background">
                  <div className="box1-content-box-img-background-img"></div>
                </div>
                <div className="box1-content-box-img-text">
                  <div className="box1-content-box-img-text-text">Création sur mesure</div>
                </div>
              </div>
            </div>
            <div className="home-information-box1-content2 home-information-box1-content">
            <div className="home-information-box1-content2-box">
                <h1><strong>02</strong>Qui somme nous</h1>
                <p>Fort de mon expertise en projet décoratif
                    et en finitions haut de gamme, j'ai eu l'honneur
                    d'intervenir sur des projets d'exception.
                    Au <strong>Palais-Royal de Paris</strong> au château de
                    Saint-Mesme, <strong>des villas à Saint-Tropez</strong>, en passant par 
                    <strong>l'Hôtel de la Zoologie</strong>
                    , j'apporte mon savoir-faire aux
                    lieux les plus prestigieux. Mon travail
                    s'étend également à des résidences privées
                    de renom,<strong>un chalet de 800 m²</strong> à Saint-Gervais
                    ou encore un palais au Portugal. Chaque projet
                    est une nouvelle occasion de sublimer
                    l'architecture avec des techniques artisanales
                    et des matériaux nobles.
                  </p>
              </div>
            </div>
          </div>

          <div className="home-information-box2 home-information-box">
            <div className="home-information-box2-content">
              <div className="home-information-box2-content-img"></div>
              <div className="home-information-box2-content-text">Qualité et durabilité</div>
            </div>
          </div>
        </div>

        <div className="space-bar"></div>

        <div className="mywork"></div>

        <div className="texte-projet">
          <div className="texte-info-partie1-a">
            <div className="texte-info-partie1-a-texte">
              <h1><strong>03 </strong>  Nos dernières réalisations</h1>
            </div>
          </div>
          <div className="texte-info-partie1-a">
            <div className="texte-info-partie1-a-texte">
              <p>Découvrez nos derniers projets, alliant design, fonctionnalité
                 et savoir-faire. Chaque réalisation est le reflet de notre engagement
                à créer des espaces uniques et adaptés aux besoins de nos clients.
              </p>
            </div>
          </div>
          
        </div>

        <div className='home-page'>
          <div className='description2-texte'>
            <h1>{titles[currentSlide]}</h1>
            <h2>{texts[currentSlide]}</h2>
            <p>{descriptions[currentSlide]}</p>
            <button>clique pour voir</button>
          </div>
          <div className='description1-carusel'>
            <Carousel onSlideChange={setCurrentSlide}/>
          </div>
        </div>

        <div className="texte-projet text-projet2">
          <div className="texte-info-partie1-a">
            <div className="texte-info-partie1-a-texte texte-info-partie1-a-textee2">
              <h1><strong>04 </strong> L'art de la décoration intérieure</h1>
            </div>
          </div>
          <div className="texte-info-partie1-a">
            <div className="texte-info-partie1-a-texte texte-info-partie1-a-texte2">
              <p>Spécialiste en décoration d'ambiance intérieure, nous transformons vos espaces
                 avec des matières nobles et des finitions haut de gamme. Enduit décoratif, béton ciré,
                  travail à la chaux… chaque technique apporte une touche unique pour créer des
                   atmosphères modernes, élégantes et authentiques. Découvrez nos savoir-faire en images.
              </p>
            </div>
          </div>
          
        </div>

        <div className="space20px"></div>

        <div className="home-companywork">
          <div className="home-companywork-img">
            <div className="gallery">
              <img className="img-1" src="/media/rfggrgg.avif" alt=""></img>
              <img className="img-2" src="/media/imgColor/pigmentcolor3.png" alt=""></img>
              <img className="img-3" src="/media/imgColor/bleuuu.jpg" alt=""></img>
              <img className="img-4" src="/media/projet/7.png" alt=""></img>
              <img className="img-5" src="/media/IMG_9358.JPG" alt=""></img>
              <img className="img-6" src="/media/imgColor/verttt.jpg" alt=""></img>
              <img className="img-7" src="/media/imgColor/violettt.jpg" alt=""></img>
              <img className="img-8" src="/media/IMG_9356.jpg" alt=""></img>
              <img className="img-9" src="/media/imgColor/pigmentcolor.jpg" alt=""></img>
              <img className="img-10" src="/media/test/imageplusdsombre.jpg" alt=""></img>
              <img className="img-11" src="/media/IMG_9355.png" alt=""></img>
              <img className="img-12" src="/media/imgColor/orangeee.jpg" alt=""></img>
              <img className="img-13" src="/media/projet/8.png" alt=""></img>
            </div>
          </div>
        </div>

        <div className="space20px"></div>

        <div className='home-space'>
          <div className='space-link'>
            <div className="space-link-box">
              <h1>Transformez votre espace, créez un lieu qui vous ressemble</h1>
              <h2>De la rénovation à la transformation, nous donnons vie à vos idées</h2>
              <p>Votre intérieur mérite mieux qu'un simple rafraîchissement. Imaginez un
                  espace repensé, optimisé et sublimé selon vos envies. Que ce soit une rénovation
                  complète ou une transformation sur-mesure, nous vous accompagnons à chaque étape
                  pour créer un lieu unique, à votre image. Design moderne, matériaux de qualité
                  et finitions impeccables : tout est pensé pour allier esthétisme et
                  fonctionnalité. Faites de votre espace un véritable reflet de votre style et
                  de vos besoins.
              </p>
              <button className="button-space">PROCESS</button>
            </div>
          </div>
        </div>

        <div className='home-contact'>
          <div className="contact-box">
            <div className="contact-box-title">Nous contacter</div>
            <div className="contact-box-button">
              <div className="contact-box-button-box">
                <button className="contact-box-button-box-butn">Votre mail</button>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
  
  export default Home;
  