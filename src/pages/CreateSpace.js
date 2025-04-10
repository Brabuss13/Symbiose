import React from 'react';
import { useTranslation } from "react-i18next";

const CreateSpace = () => {
  const { t } = useTranslation();
    return (
      <div className="creat-space-class">
        <div data-aos="fade-up" className="creat-space-back">
          <h1>{t("text39")}</h1>
        </div>

        <div data-aos="fade-up" className="creat-space-info">
          <h1>{t("text40")}</h1>
        </div>

        <div data-aos="fade-up" className="creat-space-stucco-mortex">
          <div className="creat-space-stucco-mortex-box">
            <div className="stucco-mortex-box1tittle">
              <h1>{t("text41")}</h1>
            </div>
            <div className="stucco-mortex-box2content">
              <div className="partie1sm partieallsm">
                <img src='/media/fb/fdtjfj.jpg' alt=''></img>
                <h3>{t("text42")}</h3>
                <p>{t("text43")}</p>
              </div>
              <div className="partie2sm partieallsm">
                <img src='/media/fb/fgyhjjyr.jpg' alt=''></img>
                <h3>{t("text44")}</h3>
                <p>{t("text45")}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-bar"></div>
        
        <div data-aos="fade-up" className="create-spacelist">
          <div className="new-section">
            <div className="border-left"></div>

            <div className="new-section-top">
              <div className="image-box">
                <img src='/media/metier/demolition1.jpg' alt=''></img>
              </div>
              <div className="text-box">
                <h1>{t("text46")}</h1>
                <p><strong>{t("text47")}</strong><br></br>{t("text48")}</p>
              </div>
            </div>

            <div className="new-section-bottom">
              <div className="image-box">
                <img src='/media/metier/electricien.jpeg' alt=''></img>
              </div>
              <div className="text-box">
                <h1>{t("text49")}</h1>
                <p><strong>{t("text50")}</strong><br></br>{t("text51")}</p>
              </div>
            </div>
            
          </div>
        </div>

        <div data-aos="fade-up" className="service-reno">
            <div className="container-reno">
              <div className="grid">
                <div className="card">
                  <div className="overlay">{t("text52")}</div>
                </div>
                <div className="card">
                  <div className="overlay">{t("text53")}</div>
                </div>
                <div className="card">
                  <div className="overlay">{t("text54")}</div>
                </div>
                <div className="card">
                  <div className="overlay">{t("text55")}</div>
                </div>
                <div className="card">
                  <div className="overlay">{t("text56")}</div>
                </div>
                <div className="card">
                  <div className="overlay">{t("text57")}</div>
                </div>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" className="create-spacelist create-spacelist2">
          <div className="new-section">
            <div className="border-left border-left1"></div>

            <div className="new-section-top">
              <div className="image-box">
                <img src='/media/metier/carreleur.jpg' alt=''></img>
              </div>
              <div className="text-box text-box1">
                <h1>{t("text58")}</h1>
                <p><strong>{t("text59")}</strong><br></br>{t("text60")}</p>
              </div>
            </div>

            <div className="new-section-bottom">
              <div className="image-box">
                <img src='/media/metier/peintre.jpeg' alt=''></img>
              </div>
              <div className="text-box text-box1">
                <h1>{t("text61")}</h1>
                <p><strong>{t("text62")}</strong><br></br>{t("text63")}
                </p>
              </div>
            </div>
            
          </div>
        </div>

        <div data-aos="fade-up" className="create-spacelist create-spacelist2">
          <div className="new-section">
            <div className="border-left border-left1"></div>

            <div className="new-section-top">
              <div className="image-box">
                <img src='/media/metier/placo.jpeg' alt=''></img>
              </div>
              <div className="text-box text-box1">
                <h1>{t("text64")}</h1>
                <p><strong>{t("text65")}</strong><br></br>{t("text66")}</p>
              </div>
            </div>

            <div className="new-section-bottom">
              <div className="image-box">
                <img src='/media/metier/parquet.jpg' alt=''></img>
              </div>
              <div className="text-box text-box1">
                <h1>{t("text67")}</h1>
                <p><strong>{t("text68")}</strong><br></br>{t("text69")}</p>
              </div>
            </div>
            
          </div>
        </div>

      </div>
    );
  }
  
  export default CreateSpace;
  