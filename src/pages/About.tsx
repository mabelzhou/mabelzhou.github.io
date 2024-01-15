import Skills from "../components/Skills";
import Timeline from "../components/Timeline";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="moreAboutMe">
        <img
          className="moreAboutMe-image"
          src="src\assets\me.png"
          alt="Photo of Mabel"
        />
        <div className="moreAboutMe-info">
          <h1>About Me</h1>
          <p>
            I graduated from the University of Ottawa in 2020 with a degree in
            Mechanical Engineering. I designed and programmed building
            automation systems for commercial, multi-residential, and
            institutional buildings for two and a half years before deciding to
            pursue software development full-time. I'm currently studying at
            Seneca Polytechnica.
          </p>
        </div>
      </div>
      <Skills />
      <Timeline />
    </>
  );
};

export default About;
