import "./BusinessCard.css";
import { Github, Linkedin, FilePerson } from "react-bootstrap-icons";
import myPhoto from "src/assets/me.png";

const BusinessCard = () => {
  return (
    <div className="card">
      <img className="card-image" src={myPhoto} alt="Photo of Mabel" />
      <div className="card-info">
        <h1 className="card-info-item">Hi, I'm Mabel!</h1>
        <p className="card-info-item">
          I'm a mechanical engineering graduate and programmer based in Toronto.
          I worked in building automation for 2&frac12; years and now I'm
          learning how to code.
        </p>
        <div className="card-icons">
          <a href="https://github.com/mabelzhou" id="github-icon">
            <Github size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/mabel-zhou-a92131a5/"
            id="linkedin-icon"
          >
            <Linkedin size={30} />
          </a>
          <a href="https://example.com" id="cv-icon">
            <FilePerson size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
