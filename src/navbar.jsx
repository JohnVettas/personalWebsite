import githubLogo from './assets/github.svg';
import cvLogo from './assets/cv.svg';
import linkedinLogo from './assets/linkedin.svg';

export default function BigNav() {
    return(
        <nav className="bigNav">
            <ul>
                <li><a href="#home" className="navItems-Left">Home</a></li>
                <li><a href="#skills" className="navItems-Left">Skills</a></li>
                <li><a href="#projects" className="navItems-Left">Projects</a></li>
                <li><a href="#contact" className="navItems-Left">Contact</a></li>
            </ul>
            <ul>
                <li><a href='https://github.com/JohnVettas'><img src={githubLogo} alt = "GitHub" width="30" height="30"></img></a></li>
                <li><a href='https://www.linkedin.com/in/ioannis-vettas-228442322/'><img src={linkedinLogo} alt = "LinkedIn" width="30" height="30"></img></a></li>
                <li><a href='https://github.com/JohnVettas'><img src={cvLogo} alt = "DownloadCV" width="30" height="30"></img></a></li>
                
            </ul>
        </nav>
    )
}