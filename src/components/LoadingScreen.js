import React, { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";

const LoadingScreen = ({ onFinish }) => {
    const [showText, setShowText] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const textTimer = setTimeout(() => setShowText(true), 1500);
        const fadeTimer = setTimeout(() => setFadeOut(true), 3100);
        const finishTimer = setTimeout(() => onFinish(), 4600);

        return () => {
            clearTimeout(textTimer);
            clearTimeout(fadeTimer);
            clearTimeout(finishTimer);
        };
    }, [onFinish]);
    const { t } = useTranslation();
    return (
        <div className={`loading-container ${fadeOut ? 'fade-out' : ''}`}>
            {!showText ? (
                <div className='image-wrapper'>
                    <div className='rotating-bar'></div>
                    <img src="../../media/logosymbiose.png" alt="Logo" className="loading-logo" />
                </div>
            ) : (
                <>
                    <div className='border-bar top-left'></div>
                    <div className='border-bar bottom-left'></div>
                    <p className="loading-text"><strong>{t("text70")}</strong>{t("text71")}</p>
                </>
            )}
        </div>
    );
};

export default LoadingScreen;