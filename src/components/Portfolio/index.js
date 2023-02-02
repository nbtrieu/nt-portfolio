import { useState } from "react";
import Project from "../Project";

function Portfolio() {
  const [projects] = useState([
    {
      name: 'pokemon-battle-simulator',
      description: 'JavaScript/HTML/FoundationCSS',
      link: 'https://wangbrian26.github.io/Pokemon-Fusion-Battle-Simulator/',
      repo: 'https://github.com/wangbrian26/Pokemon-Fusion-Battle-Simulator'
    },
    {
      name: 'SEND-MOODS',
      description: 'Node/Handlebars/Sequelize',
      link: 'https://shrouded-eyrie-81227.herokuapp.com/',
      repo: 'https://github.com/BryantTrinh/Mood-App-Send-Moods'
    },
    {
      name: 'weather-dashboard',
      description: 'JavaScript/HTML/CSS',
      link: 'https://nbtrieu.github.io/weather-dashboard/',
      repo: 'https://github.com/nbtrieu/weather-dashboard'
    },
    {
      name: 'note-taker',
      description: 'Express/CSS',
      link: 'https://nbtrieu-note-taker.herokuapp.com/.',
      repo: 'https://github.com/nbtrieu/note-taker'
    }
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;