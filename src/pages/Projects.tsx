import "./Projects.css";
import diceImg from "../assets/dice.png";
import pathfindingImg from "../assets/pathfinder.png";
import qrImg from "../assets/qrcode.png";
import shirtImg from "../assets/shirt.png";
import weatherImg from "../assets/weather.png";
import websiteImg from "../assets/website.png";
import spiceforgeImg from "../assets/spiceforge.png";
import snaptrackImg from "../assets/snaptrack.png";
import ProjectCard3 from "../components/ProjectCard3";
import airbnbImg from "../assets/airbnb.png";

export type Project = {
  image: string;
  name: string;
  description: string;
  link: string;
  github: string;
  demo: boolean;
  tags: string[];
}

const Projects = () => {
  const projects: Project[] = [
    {
      image: snaptrackImg,
      name: "SnapTrack",
      description: "A web application for tracking and managing your daily tasks and habits with AI integration",
      link: "https://snaptrack-gold.vercel.app/",
      github: "https://github.com/mabelzhou/snaptrack",
      demo: true,
      tags: ["React", "Next.js", "TailwindCSS", "Gemini AI", "Clerk", "Supabase", "Arcjet", "TypeScript"]
    },
    {
      image: spiceforgeImg,
      name: "Spice Forge",
      description: "A website for a meal kit delivery service using EJS and Express.",
      link: "https://spice-forge.onrender.com/",
      github: "https://github.com/mabelzhou/spice-forge",
      demo: true,
      tags: ["JavaScript", "EJS", "Express", "Node.js", "MongoDB", "Mailgun"]
    },
    {
      image: airbnbImg,
      name: "Airbnb App Clone",
      description: "A frontend clone of the Airbnb app using React Native and Expo.",
      link: "",
      github: "https://github.com/mabelzhou/airbnb-clone",
      demo: false,
      tags: ["React Native", "TypeScript", "Expo", "Clerk", "iOS", "Android", "Geodata"]
    },
    {
      image: websiteImg,
      name: "Personal Website",
      description: "You're here now! Welcome, and thanks for visiting! 😊",
      link: "",
      github: "https://github.com/mabelzhou/mabelzhou.github.io",
      demo: true,
      tags: ["React", "Vite", "React Router", "TypeScript"]
    },
    {
      image: weatherImg,
      name: "Weather App",
      description: "A weather app made using React and the OpenWeatherMap API. It displays the current weather and a 3-day forecast for any city.",
      link: "https://mabelzhou.github.io/weather-app/",
      github: "https://www.github.com/mabelzhou/weather-app",
      demo: true,
      tags: ["React", "API", "TypeScript", "Vite"]
    },
    {
      image: diceImg,
      name: "Dice Roller",
      description: "A web-based virtual dice roller made using Three.js for 3D rendering and Cannon-es for physics simulation.",
      link: "https://mabelzhou.github.io/dice-roller/",
      github: "https://www.github.com/mabelzhou/dice-roller",
      demo: true,
      tags: ["Three.js", "Cannon-es", "WebGL", "JavaScript"]
    },
    // {
    //   image: "",
    //   name: "Kids First",
    //   description: "A volunteer made co-parenting app that aspires to give divorced parents a fair and practical tool to schedule child custody without conflict",
    //   link: "",
    //   github: "https://github.com/JULIERAJ/KIDS-FIRST-v2",
    //   demo: false,
    //   tags: ["React", "TypeScript", "Firebase"]
    // },
    {
      image: qrImg,
      name: "QR Code Generator",
      description: "A QR code generator made using React. It generates a QR code for any text inputted by the user with customizable colours.",
      link: "https://mabelzhou.github.io/qr-code-generator/",
      github: "https://www.github.com/mabelzhou/qr-code-generator",
      demo: true,
      tags: ["React", "QR", "Vite", "TypeScript", "API", "Node.js"]
    },
    
    {
      image: pathfindingImg,
      name: "Pathfinding Visualizer",
      description: "A pathfinding visualizer written in Python using Pygame. It uses the A* algorithm to find the shortest path between two points.",
      link: "",
      github: "https://www.github.com/mabelzhou/pathfinding-visualizer",
      demo: false,
      tags: ["Python", "Pygame", "Visualization", "Algorithms"]
    },
    {
      image: shirtImg,
      name: "Shirt Customizer",
      description: "A shirt customizer made using React and Tailwind. It allows the user to customize the shirt's colour, texture, and logo.",
      link: "https://mabelzhou.github.io/shirt-customizer/",
      github: "https://www.github.com/mabelzhou/shirt-customizer",
      demo: true,
      tags: ["React", "TailwindCSS", "Three.js", "JavaScript", "Vite"]
    }
  ];

  return (
    <>
      <section id="projects">
        <div className="outer-wrapper"> 
          <div className="card-container">
            {projects.map((project, index) => (
              <ProjectCard3 key={index} {...project} />
            ))}
          </div>
        </div>
      </section>


      {/* <div className="card-container">
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
      </div> */}
      
    </>
  );
};

export default Projects;
