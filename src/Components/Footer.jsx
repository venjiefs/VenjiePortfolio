import githubLogo from "../assets/github-logo.png";
import facebookLogo from "../assets/facebook-logo.png";

function Footer() {
    return (
        <section id="footer">
            <div className="footer-container container">
                <div className="footer-left">
                    <h2 className="footer-name">Venjie Fundal</h2>
                    <p className="footer-tagline">UI/UX Developer</p>
                    <div className="footer-socials">
                        <a 
                            href="https://web.facebook.com/venjie.fundal.2024/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="social-link"
                        >
                            <img 
                                src={facebookLogo} 
                                alt="Facebook" 
                                className="footer-social-img" 
                            />
                            <span className="sr-only">Facebook profile</span>
                        </a>
                        <a 
                            href="https://github.com/venjiefs" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="social-link"
                        >
                            <img 
                                src={githubLogo} 
                                alt="GitHub" 
                                className="footer-social-img" 
                            />
                            <span className="sr-only">GitHub profile</span>
                        </a>
                    </div>
                </div>
                <div className="footer-right">
                    <div className="footer-quick-links">
                        <h3 className="quick-link-title">Quick Links</h3>
                        <ul className="quick-link-container">
                            <li><a href="#hero" className="quick-link">Back to Top</a></li>
                            <li><a href="#about" className="quick-link">About</a></li>
                            <li><a href="#tech" className="quick-link">Tech Stack</a></li>
                            <li><a href="#projects" className="quick-link">Projects</a></li>
                        </ul>                    
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Venjie Fundal. All rights reserved.</p>
            </div>
        </section>
    );
}

export default Footer;