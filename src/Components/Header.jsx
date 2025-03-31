function Header() {
    return (
        <>
        <section id="header">
            <div className="header-container container">
                <h2 className="header-name title">Venjie Fundal</h2>
                <div className="nav-section">
                    <a href="#hero" className="nav-link text">Home</a>
                    <a href="#about" className="nav-link text">About</a>
                    <a href="#tech" className="nav-link text">Tech Stack</a>
                    <a href="#projects" className="nav-link text">Projects</a>
                    {/* <a href="#contact" className="nav-link text">Contact</a> */}
                </div>
            </div>
        </section>
        
        </>
        
    )
}
export default Header