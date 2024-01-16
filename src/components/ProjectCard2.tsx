import "./ProjectCard2.css";

interface Props {
  image: string;
  name: string;
  description: string;
  link: string;
  github: string;
}

const ProjectCard2 = ({ image, name, description, link, github }: Props) => {
  return (
    <>
      <div className="project-card2">
        <img src={image} alt="project" />
        <div className="project-card2-body">
          <h1>{name}</h1>
          <p>{description}</p>
          <a
            href={link}
            className="button-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
          <a
            href={github}
            className="button-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectCard2;
