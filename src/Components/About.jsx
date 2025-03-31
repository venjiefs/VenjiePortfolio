import image from "../assets/Venjie.png";

function About() {
    return (
        <section id="about">
            <div className="about-container container">
                <div className="about-left-section">
                    <div className="image-wrapper">
                        <img 
                            className="about-img" 
                            src={image} 
                            alt="Venjie Fundal" 
                        />
                        <div className="image-decoration"></div>
                    </div>
                </div>
                <div className="about-right-section">
                    <div className="about-content">
                        <span className="section-tag">About Me</span>
                        <h2 className="section-title">Venjie Fundal</h2>
                        <p className="about-text">
                            A 2nd-year IT student passionate about web development and problem-solving. 
                            I enjoy building interactive web applications and exploring new technologies. 
                            Currently, I actively seek hands-on experience through personal projects, coding challenges, and collaborations—always pushing myself to learn and adapt in this fast-evolving field. My goal is to blend logic and creativity to develop efficient, real-world applications that make an impact.
                        </p>
                    </div>
                    
                    <div className="education-section">
                        <h3 className="education-title">Education</h3>
                        <ul className="education-list">
                            <li className="education-item">
                                <span className="highlight">Bachelor of Science in Information Technology (BSIT)</span>
                            </li>
                            <li className="education-item">
                                <span className="highlight">Western Institute of Technology</span>, Iloilo, Philippines (2023 - 2027 [Expected])
                            </li>
                            <li className="education-item">
                                <span className="highlight">Relevant Courses</span>: Integrative Programming, Data Science, Networking
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;