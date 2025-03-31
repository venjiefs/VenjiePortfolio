import figmaLogo from "../assets/figma-logo.png";
import expressLogo from "../assets/express-logo.png";
import mongodbLogo from "../assets/mongodb-logo.png";
import reactLogo from "../assets/react-logo.png";
import nodeLogo from "../assets/node-logo.png";
import javaLogo from "../assets/java-logo.png";

function TechCard({ image, alt, name }) {
    return (
        <div className="tech-card">
            <div className="tech-img-container">
                <img className="tech-img" src={image} alt={alt} />
            </div>
            <span className="tech-name">{name}</span>
        </div>
    );
}

function TechCategory({ title, icon: Icon, technologies }) {
    return (
        <div className="tech-category">
            <div className="category-header">
                <div className="category-icon">
                    <Icon className="category-svg" />
                </div>
                <h3 className="category-title">{title}</h3>
            </div>
            <div className="tech-grid">
                {technologies.map((tech, index) => (
                    <TechCard 
                        key={index}
                        image={tech.image}
                        alt={tech.alt}
                        name={tech.name}
                    />
                ))}
            </div>
        </div>
    );
}

// Example SVG icon components (you can replace with actual icons)
const FrontendIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.8L20 9v6l-8 4-8-4V9l8-4.2z"/>
    </svg>
);

const BackendIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
    </svg>
);

const DesignIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 3h18v2H3zm0 4h18v2H3zm0 4h18v2H3zm0 4h18v2H3zm0 4h18v2H3z"/>
    </svg>
);

function Tech() {
    const techCategories = [
        {
            title: "Frontend",
            icon: FrontendIcon,
            technologies: [
                { image: reactLogo, alt: "React", name: "React" },
            ]
        },
        {
            title: "Backend",
            icon: BackendIcon,
            technologies: [
                { image: nodeLogo, alt: "Node.js", name: "Node.js" },
                { image: expressLogo, alt: "Express", name: "Express" },
                { image: javaLogo, alt: "Java", name: "Java" },
                { image: mongodbLogo, alt: "MongoDB", name: "MongoDB" }
            ]
        },
        {
            title: "Design",
            icon: DesignIcon,
            technologies: [
                { image: figmaLogo, alt: "Figma", name: "Figma" }
            ]
        }
    ];

    return (
        <section id="tech">
            <div className="tech-decoration decoration-1"></div>
            <div className="tech-decoration decoration-2"></div>
            
            <div className="container tech-container">
                <h2 className="tech-title">Tech Stack</h2>
                <p className="tech-description">
                    Technologies I've worked with and gives me knowledge to make this semester.
                </p>
                
                <div className="tech-categories">
                    {techCategories.map((category, index) => (
                        <TechCategory
                            key={index}
                            title={category.title}
                            icon={category.icon}
                            technologies={category.technologies}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Tech;