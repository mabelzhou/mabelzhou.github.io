import "./ProjectCard.css";

interface Props {
  image: string;
  name: string;
  description: string;
  link: string;
  github: string;
}

const ProjectCard = ({ image, name, description, link, github }: Props) => {
  return (
    <div className="project-card">
      <div className="slide slide1">
        <div className="content">
          <h3>{name}</h3>
          <img className="icon" src={image} alt="project image" />
        </div>
      </div>

      <div className="slide slide2">
        <div className="content">
          <h3>{name}</h3>
          <p>{description}</p>
          <div className="project-links">
            <a href={link}>Live Demo</a>
            <a href={github}>Github</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
