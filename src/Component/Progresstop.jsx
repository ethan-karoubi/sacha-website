// Component/ScrollToTop.js
import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    const handleScroll = () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress = (scrollTop / docHeight) * 100;
        setScrollProgress(progress);
        console.log('Scroll progress:', progress); // Debug log pour suivre la progression
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        console.log('ScrollToTop component mounted');
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="progress-wrap cursor-pointer" onClick={scrollToTop}>
            <svg width="60" height="60" viewBox="0 0 100 100">
                {/* Cercle statique pour test de visibilité */}
                <circle cx="50" cy="50" r="45" stroke="black" strokeWidth="5" fill="none" />
                
                {/* Chemin avec offset dynamique */}
                <path
                    d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
                    strokeDasharray="307"
                    strokeDashoffset={307 - (scrollProgress * 3)} // Ajustement du calcul
                    stroke="blue"
                    strokeWidth="5"
                    fill="none"
                />
            </svg>
        </div>
    );
};

export default ScrollToTop;
