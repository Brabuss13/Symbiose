import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();
    const location = useLocation();
    return (
        <div className="footer">
            <div className="footer-container">
                <nav>
                    <ul>
                        <Link to="/" className={location.pathname === "/" ? "active" : ""}>{t("nav1")}</Link>
                        <Link to="/projects" className={location.pathname === "/projects" ? "active" : ""}>{t("nav2")}</Link>
                        <Link to="/create-space" className={location.pathname === "/create-space" ? "active" : ""}>{t("nav3")}</Link>
                        <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>{t("nav4")}</Link>
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