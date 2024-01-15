import ProjectCard from "../components/ProjectCard";
import "./Projects.css";
import diceImg from "../assets/dice.png";
import pathfindingImg from "../assets/pathfinder.png";
import qrImg from "../assets/qrcode.png";
import shirtImg from "../assets/shirt.png";
import weatherImg from "../assets/weather.png";
import websiteImg from "../assets/website.png";

const Projects = () => {
  return (
    <>
      <div className="card-container">
        <ProjectCard
          image={pathfindingImg}
          name="Pathfinding Visualizer"
          description="A pathfinding visualizer written in Python using Pygame. It uses the A* algorithm to find the shortest path between two points."
          link="https://mabelzhou.github.io/pathfinding-visualizer/"
          github="https://www.github.com/mabelzhou/pathfinding-visualizer"
        />
        <ProjectCard
          image={diceImg}
          name="Dice Roller"
          description="A web-based virtual dice roller made using Three.js for 3D rendering and Cannon-es for physics simulation."
          link="https://mabelzhou.github.io/dice-roller/"
          github="https://www.github.com/mabelzhou/dice-roller"
        />
        <ProjectCard
          image={qrImg}
          name="Weather App"
          description="A weather app made using React and the OpenWeatherMap API. It displays the current weather and a 3-day forecast for any city."
          link="https://mabelzhou.github.io/weather-app/"
          github="https://www.github.com/mabelzhou/weather-app"
        />
        <ProjectCard
          image={shirtImg}
          name="QR Code Generator"
          description="A QR code generator made using React. It generates a QR code for any text inputted by the user with customizable colours."
          link="https://mabelzhou.github.io/qr-code-generator/"
          github="https://www.github.com/mabelzhou/qr-code-generator"
        />
        <ProjectCard
          image={weatherImg}
          name="Personal Website"
          description="You're here now! Welcome, and thanks for visiting! 😊"
          link=""
          github="https://github.com/mabelzhou/mabelzhou.github.io"
        />
        <ProjectCard
          image={websiteImg}
          name="Shirt Customizer"
          description="A shirt customizer made using React and Tailwind. It allows the user to customize the shirt's colour, texture, and logo."
          link="https://mabelzhou.github.io/shirt-customizer/"
          github="https://www.github.com/mabelzhou/shirt-customizer"
        />
      </div>
    </>
  );
};

export default Projects;
