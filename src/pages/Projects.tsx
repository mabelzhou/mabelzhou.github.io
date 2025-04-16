import ProjectCard2 from "../components/ProjectCard2";
import "./Projects.css";
import diceImg from "../assets/dice.png";
import pathfindingImg from "../assets/pathfinder.png";
import qrImg from "../assets/qrcode.png";
import shirtImg from "../assets/shirt.png";
import weatherImg from "../assets/weather.png";
import websiteImg from "../assets/website.png";
import spiceforgeImg from "../assets/spiceforge.png";

const Projects = () => {
  return (
    <>
      <div className="card-container">
        <ProjectCard2
          image={spiceforgeImg}
          name="Spice Forge"
          description="A website for a meal kit delivery service using EJS and Express."
          link="https://spice-forge.onrender.com/"
          github="https://github.com/mabelzhou/spice-forge"
          demo={true}
        />
        <ProjectCard2
          image={weatherImg}
          name="Weather App"
          description="A weather app made using React and the OpenWeatherMap API. It displays the current weather and a 3-day forecast for any city."
          link="https://mabelzhou.github.io/weather-app/"
          github="https://www.github.com/mabelzhou/weather-app"
          demo={true}
        />
        <ProjectCard2
          image={diceImg}
          name="Dice Roller"
          description="A web-based virtual dice roller made using Three.js for 3D rendering and Cannon-es for physics simulation."
          link="https://mabelzhou.github.io/dice-roller/"
          github="https://www.github.com/mabelzhou/dice-roller"
          demo={true}
        />
        <ProjectCard2
          image={qrImg}
          name="QR Code Generator"
          description="A QR code generator made using React. It generates a QR code for any text inputted by the user with customizable colours."
          link="https://mabelzhou.github.io/qr-code-generator/"
          github="https://www.github.com/mabelzhou/qr-code-generator"
          demo={true}
        />
        <ProjectCard2
          image={websiteImg}
          name="Personal Website"
          description="You're here now! Welcome, and thanks for visiting! 😊"
          link=""
          github="https://github.com/mabelzhou/mabelzhou.github.io"
          demo={true}
        />
        <ProjectCard2
          image={pathfindingImg}
          name="Pathfinding Visualizer"
          description="A pathfinding visualizer written in Python using Pygame. It uses the A* algorithm to find the shortest path between two points."
          link=""
          github="https://www.github.com/mabelzhou/pathfinding-visualizer"
          demo={false}
        />
        <ProjectCard2
          image={shirtImg}
          name="Shirt Customizer"
          description="A shirt customizer made using React and Tailwind. It allows the user to customize the shirt's colour, texture, and logo."
          link="https://mabelzhou.github.io/shirt-customizer/"
          github="https://www.github.com/mabelzhou/shirt-customizer"
          demo={true}
        />
      </div>
    </>
  );
};

export default Projects;
