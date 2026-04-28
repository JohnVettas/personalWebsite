import { useState, useEffect } from 'react';
import githubLogo from './assets/github.svg';
import cvLogo from './assets/cv.svg';
import linkedinLogo from './assets/linkedin.svg';
import cv from './assets/Ioannis_Vettas_Web_cv.pdf';

export default function BigNav() {
    
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
     if (window.innerWidth < 767 || window.scrollY !== 0) {
        useEffect(() => {
            const handleScroll = () => {
                const currentScrollY = window.scrollY;

                // If scrolling down AND past the very top, hide it. Otherwise, show it.
                if (currentScrollY > lastScrollY && currentScrollY > 50) {
                    setIsVisible(false);
                } else {
                    setIsVisible(true);
                }
                setLastScrollY(currentScrollY);
            };

            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }, [lastScrollY]);

    }
    return(
        <nav className={`bigNav transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'} `}>
            <ul>
                <li><a href="#home" className="navItems-Left">Home</a></li>
                <li><a href="#skills" className="navItems-Left">Skills</a></li>
                <li><a href="#education" className="navItems-Left">Education</a></li>
                <li><a href="#projects" className="navItems-Left">Projects</a></li>
                <li><a href="#contact" className="navItems-Left">Contact</a></li>
            </ul>
            <ul>
                <li><a href='https://github.com/JohnVettas'><img src={githubLogo} alt = "GitHub" width="30" height="30"></img></a></li>
                <li><a href='https://www.linkedin.com/in/ioannis-vettas-228442322/'><img src={linkedinLogo} alt = "LinkedIn" width="30" height="30"></img></a></li>
                <li><a href={cv} download="Ioannis_Vettas_CV.pdf"><img src={cvLogo} alt="Download CV" width="30" height="30" /></a></li>
                
            </ul>
        </nav>
    )
}