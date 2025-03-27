import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from "react-i18next";

const Navbar = ({ menuOpen, setMenuOpen }) => {
    const location = useLocation();
    const { t } = useTranslation();

    return (
        <div className="navbar">
            <div className="navbar-container">
                <div className="navbar-left">
                    <Link to="/" className={location.pathname === "/" ? "active" : ""} onClick={() => setMenuOpen(false)}>{t("nav1")}</Link>
                    <Link to="/projects" className={location.pathname === "/projects" ? "active" : ""} onClick={() => setMenuOpen(false)}>{t("nav2")}</Link>
                </div>

                <div className="navbar-center">
                    <Link to="/">
                        <img src="/media/logosymbiose.png" alt="Logo" className="logo" />
                    </Link>
                </div>

                <div className="navbar-right">
                    <Link to="/create-space" className={location.pathname === "/create-space" ? "active" : ""} onClick={() => setMenuOpen(false)}>{t("nav3")}</Link>
                    <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""} onClick={() => setMenuOpen(false)}>{t("nav4")}</Link>
                    <LanguageSwitcher/>
                </div>

                <div className='burger-menu' onClick={() => setMenuOpen(!menuOpen)}>☰</div>

                {menuOpen && (
                    <div className="mobile-menu">
                        <button className="close-btn" onClick={() => setMenuOpen(false)}>✖</button>
                        <ul>
                            <li><Link to="/" onClick={() => setMenuOpen(false)}>{t("nav1")}</Link></li>
                            <li><Link to="/projects" onClick={() => setMenuOpen(false)}>{t("nav2")}</Link></li>
                            <li><Link to="/create-space" onClick={() => setMenuOpen(false)}>{t("nav3")}</Link></li>
                            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>{t("nav4")}</Link></li>
                        </ul>
                        <LanguageSwitcher/>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;