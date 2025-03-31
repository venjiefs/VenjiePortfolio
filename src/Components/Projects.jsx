import succorSample from "../assets/succor.png";
import todosSample from "../assets/todos.png";

function ProjectCard({ image, alt, title, description, role, tags, demoUrl, codeUrl }) {
    return (
        <div className="project-card">
            <div className="project-img-container">
                <img className="project-img" src={image} alt={alt} />
                <div className="project-img-overlay">
                    <span className="project-badge">{role}</span>
                </div>
            </div>
            <div className="project-card-content">
                <h3 className="project-card-title">{title}</h3>
                <p className="project-card-description">{description}</p>
                <div className="project-tags">
                    {tags.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                    ))}
                </div>
                <div className="project-actions">
                    <a href={demoUrl} className="project-btn btn-primary" target="_blank" rel="noopener noreferrer">
                        Live Demo
                    </a>
                    {codeUrl && (
                        <a href={codeUrl} className="project-btn btn-outline" target="_blank" rel="noopener noreferrer">
                            View Code
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

function Projects() {
    const projects = [
        {
            image: succorSample,
            alt: "Succor Game",
            title: "Succor",
            description: "A website that can help your future.",
            role: "UI/UX Designer",
            tags: ["Java", "Spring Boot", "WebSocket"],
            demoUrl: "https://www.figma.com/design/hV2AFXr9V9IM6huJhyaBYA/Succor?m=auto&t=QXM8F7MpMJCUIquN-6",
            codeUrl: null
        },
        {
            image: todosSample,
            alt: "Awesome Todos App",
            title: "Awesome Todos",
            description: "A simple and intuitive web app for managing your daily tasks.",
            role: "Fullstack Developer",
            tags: ["React", "Node.js", "MongoDB"],
            demoUrl: "https://awesometodoappvenj.onrender.com",
            codeUrl: "https://github.com/yourusername/awesome-todos"
        }
    ];

    return (
        <section id="projects">
            <div className="projects-decoration decoration-1"></div>
            <div className="projects-decoration decoration-2"></div>
            
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">My Projects</h2>
                    <p className="section-subtitle">
                        Here are some of my recent works that showcase my skills and creativity
                    </p>
                </div>
                
                <div className="projects-container">
                    <div className="projects-grid">
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={index}
                                image={project.image}
                                alt={project.alt}
                                title={project.title}
                                description={project.description}
                                role={project.role}
                                tags={project.tags}
                                demoUrl={project.demoUrl}
                                codeUrl={project.codeUrl}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;