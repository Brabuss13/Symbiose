import React, { useState, useEffect } from "react";
import LoadingScreen from '../components/LoadingScreen';
import Carousel from "../components/Carousel";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";

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
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

    const { t } = useTranslation();
    const titles = [
      t("Hôtel de la Zoologie"),
      t("Bientôt disponible"),
      t("Bientôt disponible"),
    ];
    const texts = [
      t("Bordeaux France"),
      t(""),
      t(""),
    ];

    useEffect(() => {
      AOS.init({ duration: 1000 });
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
          <div className="parent-text-line">
            {showAnimation && (
              <motion.p
                initial={{ x: "-100vw", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="text-line text-line-1"><strong>{t("text1")}</strong>
              </motion.p>
            )}
            {showAnimation && (
              <motion.p
                initial={{ x: "100vw", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="text-line text-line-2"><span>{t("text2")}</span>
              </motion.p>
            )}
          </div>
          <div className="space-bar"></div>
          <div className="parent-scroll-line">
            <h2>{t("text3")}</h2>
            <div className="logo-container">
              <svg className="scroll-arrow" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 9l6 6 6-6"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="space-bar"></div>

        <div data-aos="fade-up" className="home-information">
          <div data-aos="fade-up" className="home-information-box1 home-information-box">
            <div className="home-information-box1-content1 home-information-box1-content">
              <div className="box1-content-box-img">
                <div className="box1-content-box-img-background">
                  <div className="box1-content-box-img-background-img">
                    
                  </div>
                </div>
                <div className="box1-content-box-img-text">
                  <div className="box1-content-box-img-text-text"></div>
                </div>
              </div>
            </div>
            <div className="home-information-box1-content2 home-information-box1-content">
              <div className="home-information-box1-content2-box">
                <h1 data-aos="fade-up"><strong>01</strong>{t("text4")}</h1>
                <p data-aos="fade-up">{t("text5")}</p>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" className="home-information-box2 home-information-box">
            <div className="home-information-box2-content">
              <div className="home-information-box2-content-img"></div>
              <div className="home-information-box2-content-text">{t("text8")}<br></br>{t("text9")}</div>
            </div>
          </div>

          <div data-aos="fade-up" className="home-information-box1 home-information-box">
            <div className="home-information-box1-content1 home-information-box1-content">
              <div className="box1-content-box-img">
                <div className="box1-content-box-img-background">
                  <div className="box1-content-box-img-background-img background-img-22"></div>
                </div>
                <div className="box1-content-box-img-text">
                  <div className="box1-content-box-img-text-text"></div>
                </div>
              </div>
            </div>
            <div className="home-information-box1-content2 home-information-box1-content">
            <div className="home-information-box1-content2-box">
                <h1><strong>02</strong>{t("text10")}</h1>
                <p>{t("text11")}<strong>{t("text12")}</strong>{t("text13")}<strong>{t("text14")}</strong>{t("text15")} 
                    <strong>{t("text16")}</strong>
                    {t("text17")}<strong>{t("text18")}</strong>{t("text19")}
                </p>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" className="home-information-box2 home-information-box">
            <div className="home-information-box2-content">
              <div className="home-information-box2-content-img background-img-23"></div>
              <div className="home-information-box2-content-text">{t("text20")}</div>
            </div>
          </div>
        </div>

        <div className="space-bar"></div>

        <div data-aos="fade-up" className="mywork"></div>

        <div data-aos="fade-up" className="texte-projet">
          <div className="texte-info-partie1-a">
            <div className="texte-info-partie1-a-texte">
              <h1><strong>03 </strong>{t("text6")}</h1>
            </div>
          </div>
          <div className="texte-info-partie1-a">
            <div className="texte-info-partie1-a-texte">
              <p>{t("text7")}</p>
            </div>
          </div>
          
        </div>

        <div data-aos="fade-up" className='home-page'>
          <div className='description2-texte'>
            <h1>{titles[currentSlide]}</h1>
            <h2>{texts[currentSlide]}</h2>
            {/* <p>{descriptions[currentSlide]}</p> */}
            <button>{t("text21")}</button>
          </div>
          <div className='description1-carusel'>
            <Carousel onSlideChange={setCurrentSlide}/>
          </div>
        </div>

        <div data-aos="fade-up" className="texte-projet text-projet2">
          <div className="texte-info-partie1-a">
            <div className="texte-info-partie1-a-texte texte-info-partie1-a-textee2">
              <h1><strong>04 </strong>{t("text22")}</h1>
            </div>
          </div>
          <div className="texte-info-partie1-a">
            <div className="texte-info-partie1-a-texte texte-info-partie1-a-texte2">
              <p>{t("text23")}</p>
            </div>
          </div>
          
        </div>

        <div className="space20px"></div>

        <div data-aos="fade-up" className="home-companywork">
          <div className="home-companywork-img">
            <div className="gallery">
              <img className="img-1" src="/media/rfggrgg.avif" alt=""></img>
              <img className="img-2" src="/media/imgColor/pigmentcolor3.png" alt=""></img>
              <img className="img-3" src="/media/imgColor/trtrtrt.jpg" alt=""></img>
              <img className="img-4" src="/media/projet/7.png" alt=""></img>
              <img className="img-5" src="/media/IMG_9358.JPG" alt=""></img>
              <img className="img-6" src="/media/imgColor/verttttt.jpg" alt=""></img>
              <img className="img-7" src="/media/vberteee.png" alt=""></img>
              <img className="img-8" src="/media/IMG_9356.jpg" alt=""></img>
              <img className="img-9" src="/media/imgColor/pigmentcolor.jpg" alt=""></img>
              <img className="img-10" src="/media/test/imageplusdsombre.jpg" alt=""></img>
              <img className="img-11" src="/media/IMG_9355.png" alt=""></img>
              <img className="img-12" src="/media/imgColor/ftyjtyhytghjh.jpg" alt=""></img>
              <img className="img-13" src="/media/projet/8.png" alt=""></img>
            </div>
          </div>
        </div>

        <div className="space20px"></div>

        <div data-aos="fade-up" className='home-space'>
          <div className='space-link'>
            <div className="space-link-box">
              <h1>{t("text24")}</h1>
              <h2>{t("text25")}</h2>
              <p>{t("text26")}
              </p>
              <button className="button-space">{t("text27")}</button>
            </div>
          </div>
        </div>

        <div data-aos="fade-up" className='home-contact'>
          <div className="contact-box">
            <div className="contact-box-title">{t("text28")}</div>
            <div className="contact-box-button">
              <div className="contact-box-button-box">
                <button className="contact-box-button-box-butn">{t("text29")}</button>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
  
  export default Home;
  