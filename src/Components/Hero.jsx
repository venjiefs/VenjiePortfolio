function Hero() {
    return (
        <section id="hero" className="hero-section">
            <div className="hero-container container">
                <div className="hero-content">
                    <div className="hero-badge">IT Enthusiast</div>
                    <h1 className="hero-title">
                        Hi, I'm <span className="hero-name">Venjie Fundal</span>
                    </h1>
                    <h2 className="hero-subtitle">Web & App Developer</h2>
                    <div className="hero-text">
                        <p>
                        Hi, I'm Venjie, a 2nd-year IT student passionate about exploring the world of programming and innovative tech solutions.  
                            I specialize in <span className="highlight">Java</span> and 
                            <span className="highlight"> Web Development</span> technologies including 
                            <span className="highlight"> HTML</span>, 
                            <span className="highlight"> JavaScript</span>, and 
                            <span className="highlight"> React</span>.
                        </p>
                        <p>
                        I’m excited to share my journey and projects here—welcome to my portfolio!
                        </p>
                    </div>
                    <div className="hero-cta">
                        <a href="#projects" className="cta-button primary">View My Work</a>
                        <a href="#about" className="cta-button secondary">Learn About Me</a>
                    </div>
                </div>
                <div className="hero-scroll-indicator">
                    <span>Scroll Down</span>
                    <div className="scroll-arrow"></div>
                </div>
            </div>
        </section>
    );
}

export default Hero;