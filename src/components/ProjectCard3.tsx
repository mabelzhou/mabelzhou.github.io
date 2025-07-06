import { Project } from '../pages/Projects'
import { Github } from 'react-bootstrap-icons'
import { ExternalLink } from 'lucide-react'
import "./ProjectCard3.css"

const ProjectCard3 = (project: Project) => (
  <div className="project-card3">
    <div className="project-card3__image-container">
      <img src={project.image} alt={project.name} className="project-card3__image" />
    </div>

    <div className="project-card3__content">
      <div className="project-card3__tags">
        {project.tags.map((tag) => (
          <span key={tag} className="project-card3__tag">
            {tag}
          </span>
        ))}
      </div>

      <h3 className="project-card3__title">{project.name}</h3>
      <p className="project-card3__description">{project.description}</p>

      <div className="project-card3__links">
        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-card3__link" title="Live Demo">
            <ExternalLink size={20} />
          </a>
        )}
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-card3__link" title="GitHub Repo">
            <Github size={20} />
          </a>
        )}
      </div>
    </div>
  </div>
);

export default ProjectCard3;