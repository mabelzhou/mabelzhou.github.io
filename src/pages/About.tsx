import Skills from "../components/Skills";
import Timeline from "../components/Timeline";
import "./About.css";
import myPhoto from "../assets/me.png";

const About = () => {
  return (
    <>
      <div className="moreAboutMe">
        <img className="moreAboutMe-image" src={myPhoto} alt="Photo of Mabel" />
        <div className="moreAboutMe-info">
          <h1>About Me</h1>
          <p>
            I graduated from the University of Ottawa in 2020 with a Mechanical Engineering degree 
            and hold a diploma in Computer Programming. After 2&frac12; years working in building automation, 
            I now work as an automation engineer at ParTech.
          </p>
        </div>
      </div>
      <Skills />
      <Timeline />
    </>
  );
};

export default About;
