import React from 'react';
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();
    return (
        <div className="footer">
            <div className="footer-container">
                <nav>
                    <ul>
                        <li><a href="/">{t("nav1")}</a></li>
                        <li><a href="projects">{t("nav2")}</a></li>
                        <li><a href="/Create-space">{t("nav3")}</a></li>
                        <li><a href="/contact">{t("nav4")}</a></li>
                    </ul>
                </nav>
            </div>
            <div className="footer-bottom">
                <p>{t("navtext")}</p>
            </div>
        </div>
    );
  }
  
  export default Footer;