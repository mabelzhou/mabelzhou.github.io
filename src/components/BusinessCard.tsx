import "./BusinessCard.css";
import { Github, Linkedin, FilePerson } from "react-bootstrap-icons";
import myPhoto from "../assets/me.png";

const BusinessCard = () => {
  return (
    <div className="card">
      <img className="card-image" src={myPhoto} alt="Photo of Mabel" />
      <div className="card-info">
        <h1 className="card-info-item">Hi, I'm Mabel!</h1>
        <p className="card-info-item">
          I'm a developer based in Toronto who loves building intuitive, thoughtful software.
          I have experience in full-stack and mobile development, and enjoy turning ideas 
          into real, usable products.
        </p>
        <div className="card-icons">
          <a
            href="https://github.com/mabelzhou"
            id="github-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/mabel-zhou-a92131a5/"
            id="linkedin-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={30} />
          </a>
          <a
            href="https://www.dropbox.com/scl/fi/2h71sayuvdq31bmmjqu96/Resume-Mabel-Zhou.pdf?rlkey=0rx05c9k019mxp1slpsy4ups6&st=6kloc17v&dl=0"
            id="cv-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FilePerson size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
