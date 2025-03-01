import React, { useEffect, useState } from 'react';

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

    return (
        <div className={`loading-container ${fadeOut ? 'fade-out' : ''}`}>
            {!showText ? (
                <div className='image-wrapper'>
                    <div className='rotating-bar'></div>
                    <img src="../../media/symbioseLogo2.png" alt="Logo" className="loading-logo" />
                </div>
            ) : (
                <>
                    <div className='border-bar top-left'></div>
                    <div className='border-bar bottom-left'></div>
                    <p className="loading-text"><strong>Authenticité</strong> d'un coloriste matiériste</p>
                </>
            )}
        </div>
    );
};

export default LoadingScreen;